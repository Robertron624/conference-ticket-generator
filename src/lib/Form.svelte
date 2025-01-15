<script lang="ts">
  import { onMount } from "svelte";
  import ErrorMessage from "./FormComponents/ErrorMessage.svelte";

  // initial errors state
  let errors = {
    avatar: "",
    fullName: "",
    email: "",
    githubUsername: "",
  };

  let formData = {
    avatar: null as File | null,
    email: "",
    fullName: "",
    githubUsername: "",
  };

  const validateForm = () => {
    errors = { avatar: "", fullName: "", email: "", githubUsername: "" };
    let isValid = true;

    // Validación del avatar
    if (!formData.avatar) {
      errors.avatar = "The avatar is required.";
      isValid = false;
    } else if (formData.avatar.size > 500000) {
      errors.avatar = "File too large. Please upload a photo under 500KB.";
      isValid = false;
    } else if (!["image/png", "image/jpeg"].includes(formData.avatar.type)) {
      errors.avatar = "Invalid file type. Please upload a JPG or PNG.";
      isValid = false;
    }

    // Validación del nombre
    if (!formData.fullName.trim()) {
      errors.fullName = "The full name is required.";
      isValid = false;
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "An email address is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validación del usuario de GitHub
    if (!formData.githubUsername.trim()) {
      errors.githubUsername = "The GitHub username is required.";
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form successfully submitted :", formData);
    }
  };

  const handleFileDrop = (event: DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files[0]) {
      formData.avatar = files[0];
      validateForm();
    }
  };
</script>

<section id="form-container">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-groups">
      <div class="form-group">
        <label for="avatar" class="form-label">Upload Avatar</label>
        <div
          id="avatar-dropzone"
          class="dropzone"
          on:dragover|preventDefault
          on:drop={handleFileDrop}
          on:click={() => document.getElementById("avatar-input")?.click()}
          on:keydown={(e: KeyboardEvent) => {
            if (e.key === "Enter") {
              document.getElementById("avatar-input")?.click();
            }
          }}
          aria-label="Selecciona una imagen"
          role="button"
          tabindex="0"
          class:uploaded-image={formData.avatar && !errors.avatar}
        >
          <div class="upload-image-container"
            class:uploaded-image-container={formData.avatar && !errors.avatar}
          >
            {#if formData.avatar && !errors.avatar}
                <img
                    id="uploaded-image"
                    src={URL.createObjectURL(formData.avatar)}
                    alt="Uploaded avatar"
                />
            {:else}
                <img
                    id="placeholder-image"
                    src="/images/icon-upload.svg"
                    alt="a cloud with an arrow pointing up"
                />
            {/if}
          </div>
          {#if !formData.avatar || errors.avatar}
            <p>Drag and drop or click to upload</p>
          {/if}
          <input
            id="avatar-input"
            type="file"
            accept=".png,.jpeg,.jpg,.svg"
            on:change={(e: Event) => {
              const target = e.target as HTMLInputElement;
              if (target.files) formData.avatar = target.files[0];
              validateForm();
            }}
            hidden
          />
        {#if formData.avatar && !errors.avatar}
            <div class="avatar-mod-buttons">
                <button
                    type="button"
                    class="btn btn-secondary"
                    on:click={() => (formData.avatar = null)}
                >
                    Remove Image
                </button>
                <button
                        type="button"
                        class="btn btn-secondary"
                        on:click={() => document.getElementById("avatar-input")?.click()}
                >
                        Change Image
                </button>
            </div>
        {/if}
        </div>
        {#if !errors.avatar}
          <div class="avatar-info">
            <img
              src="/images/icon-info.svg"
              alt="the vowel i inside a circle"
            />
            <small>Upload your photo (JPG or PNG, max size: 500kb).</small>
          </div>
        {/if}
        {#if errors.avatar}<ErrorMessage message={errors.avatar} />
        {/if}
      </div>
      <div class="form-group">
        <label for="name" class="form-label">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          bind:value={formData.fullName}
          on:blur={validateForm}
        />
        {#if errors.fullName}
          <ErrorMessage message={errors.fullName} />
        {/if}
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          bind:value={formData.email}
          on:blur={validateForm}
        />
        {#if errors.email}
          <ErrorMessage message={errors.email} />
        {/if}
      </div>

      <div class="form-group">
        <label for="github" class="form-label">Usuario de GitHub</label>
        <input
          id="github"
          type="text"
          placeholder="@yourusername"
          bind:value={formData.githubUsername}
          on:blur={validateForm}
        />
        {#if errors.githubUsername}
          <ErrorMessage message={errors.githubUsername} />
        {/if}
      </div>
    </div>
    <button type="submit">Generate My Ticket</button>
  </form>
</section>

<style lang="scss">
  @use "../variables" as vars;

  $inputs-border-radius: 0.65rem;

  #form-container {
    @include vars.container(
      $max-width: 20rem,
      $padding: 0,
      $margin: 2rem auto 0
    );
    @include vars.flex(column, start, center);

    .form-groups {
      @include vars.flex($direction: column, $gap: 1.5rem);

      .form-group {
        .avatar-info {
          margin-top: 0.25rem;
          @include vars.flex(
            $justify: flex-start,
            $align: center,
            $gap: 0.5rem
          );
          small {
            @include vars.text($size: 0.65rem, $color: vars.$neutral-500);
          }
        }

        .avatar-mod-buttons {
            @include vars.flex($justify: flex-start, $align: center, $gap: 0.5rem);

            button {

                &:first-of-type {
                    text-decoration: underline;
                }

                @include vars.button(
                    $bg: vars.$neutral-700,
                    $bg-hover: vars.$neutral-300,
                    $color: vars.$neutral-0,
                    $border: 1px solid vars.$neutral-700,
                    $radius: .25rem,
                    $padding: 0.25rem .35rem,
                    $font-size: 0.8rem,
                    $font-weight: 400,
                );
            }
        }
      }

      .form-label {
        @include vars.text($size: 1rem, $weight: 700, $align: left);
        width: 100%;
        display: block;
      }

      input {
        margin-top: 0.5rem;
        @include vars.input(
          $padding: 0.5rem,
          $radius: $inputs-border-radius,
          $font-size: 1rem,
          $color: vars.$neutral-0,
          $border: 1px solid vars.$neutral-300,
          $bg: transparent,
          $width: 100%,
          $placeholder-color: vars.$neutral-300
        );
      }

      .dropzone {
        backdrop-filter: blur(1px);
        @include vars.flex(column, center, center);
        @include vars.text(
          $size: 1rem,
          $color: vars.$neutral-300,
          $align: center
        );
        @include vars.container(
          $padding: 1.5rem 1rem,
          $margin: 0.5rem auto 0,
          $height: auto,
          $border: 2px dashed vars.$neutral-500,
          $radius: $inputs-border-radius
        );
        cursor: pointer;

        .upload-image-container {
          @include vars.flex($justify: center, $align: center);
          @include vars.container(
            $radius: 0.8rem,
            $width: 3rem,
            $height: 3rem,
            $bg: vars.$neutral-700,
            $border: 1.5px solid vars.$neutral-500,
            $margin: 0 0 0.5rem
          );

          &.uploaded-image-container {
            img {
                border-radius: 0.8rem;
            }
          }

          img {
            object-fit: contain;
          }
        }
      }
    }

    button[type="submit"] {
      &:hover {
        background-color: vars.$neutral-700;
      }

      @include vars.button(
        $bg: vars.$orange-700,
        $bg-hover: vars.$orange-500,
        $color: vars.$neutral-900,
        $border: 1px solid vars.$neutral-700,
        $radius: $inputs-border-radius,
        $padding: 0.5rem,
        $font-size: 1.2rem,
        $font-size-desktop: 1.5rem,
        $font-weight: 700,
        $width: 100%,
        $margin: 1rem 0 0,
      );
    }
  }
</style>
