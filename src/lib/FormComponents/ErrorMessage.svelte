<script lang="ts">
    export let message: string; // Propiedad que recibe el texto del error
  </script>
  
  <div class="error">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
      />
      <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.004 10.462V7.596M8 5.569v-.042"
      />
    </svg>
    <span>{message}</span>
  </div>
  
  <style lang="scss">

    @use "../../variables" as vars;

    .error {
        @include vars.flex($justify: flex-start, $align: center, $gap: 0.5rem);
        @include vars.text($size: 0.65rem, $color: vars.$orange-700, $margin: 0.5rem 0 0);
    }
  
    svg {
      flex-shrink: 0;
    }
  </style>