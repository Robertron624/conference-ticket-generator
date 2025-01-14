<script lang="ts">
  console.log("Hello Vite + Svelte!");

  import Header from "./lib/Header.svelte";
</script>

<main>
  <Header />
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
  }
</style>
