<script lang="ts">
  console.log("Hello Vite + Svelte!");
</script>

<main>
  <h1>Hello Vite + Svelte!</h1>
</main>

<style lang="scss">

  @use "./variables" as vars;

  main {
    h1 {
      color: vars.$neutral-300;
      background-color: vars.$neutral-900;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  }
</style>
