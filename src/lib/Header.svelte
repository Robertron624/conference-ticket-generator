<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<header>
  <picture>
    <img src="/images/logo-full.svg" alt="" />
  </picture>
</header>

<style lang="scss">
  @use "../variables" as vars;

  header {
    @include vars.flex(row, center, center);
    height: 4rem;

    img {
        width: 180px;
    }
  }
</style>
