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

    background-image: url("/images/pattern-squiggly-line-top.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 7rem;
    height: 4rem;

    img {
        width: 180px;
    }
  }
</style>
