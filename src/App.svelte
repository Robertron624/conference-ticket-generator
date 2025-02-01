<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Form from "./lib/Form.svelte";
  import Ticket from "./lib/Ticket.svelte";
  import type { UserData } from "./types";

  let isSubmitted = false;
  let ticketData = {} as UserData;

  const handleFormSubmit = (data: any) => {
    isSubmitted = true;
    ticketData = data.detail;
  };
</script>

<main>
  <Header />
  {#if isSubmitted}
    <Ticket {ticketData} />
  {:else}
    <div class="intro-text">
      <h1 class="heading">Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p class="sub-heading">
        Secure your spot at next year's biggest coding conference.
      </p>
    </div>
    <Form on:submit={handleFormSubmit} />
  {/if}
</main>

<style lang="scss">
  @use "./variables" as vars;

  main {
    height: 100%;
    padding: 2rem 0rem 3.5rem;

    background-image: url("/images/pattern-circle.svg");
    background-repeat: no-repeat;
    background-position: -7% -2rem;
    background-size: 7rem;

    .intro-text {
      margin-top: 1rem;
      .heading {
        & {
          @include vars.text(
            $size: 1.5rem,
            $weight: 700,
            $align: center,
            $size-desktop: 2.5rem,
            $text-color: vars.$neutral-0
          );
          & {
            @include vars.container($max-w: 20rem, $max-w-tablet: 40rem);
          }
        }
      }

      .sub-heading {
        & {
          @include vars.text(
            $text-color: vars.$neutral-300,
            $size: 1rem,
            $weight: 400,
            $align: center
          );

          & {
            @include vars.container($max-w: 18rem, $m: 1.5rem auto 0);
          }
        }
      }
    }
  }
</style>
