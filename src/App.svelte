<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Form from "./lib/Form.svelte";
</script>

<main>
  <Header />
  <div class="intro-text">
    <h1 class="heading">Your Journey to Coding Conf 2025 Starts Here!</h1>
    <p class="sub-heading">Secure your spot at next year's biggest coding conference.</p>
  </div>
  <Form />
</main>

<style lang="scss">

  @use "./variables" as vars;

  main {
    height: 100%;
    padding: 2rem 0rem 0;

    background-image: url("/images/pattern-circle.svg");
    background-repeat: no-repeat;
    background-position: -7% -2rem;
    background-size: 7rem;

    .intro-text {
      margin-top: 1rem;
      h1 {
        @include vars.text($size: 1.5rem, $weight: 700, $align: center);
        @include vars.container($max-w: 20rem);
      }
  
      .sub-heading {
        @include vars.text($text-color: vars.$neutral-300,$size: 1rem, $weight: 400, $align: center);
        @include vars.container($max-w: 18rem, $m: 1.5rem auto 0);
      }
    }

  }
</style>
