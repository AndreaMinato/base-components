<template>
  <button
    :style="cssVars"
    :disabled="loading || attrs.disabled"
    class="button__tempestive flex justify-center py-2 px-4 shadow-sm text-sm font-medium"
  >
    <slot v-if="!loading" />
    <slot name="loading" v-if="loading">Loading...</slot>
  </button>
</template>

<script lang="ts" setup>
import { useAttrs, computed } from "vue";
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "base",
  },
});

const attrs = useAttrs();
const color = computed(() => {
  if (attrs.disabled == null || attrs.disabled === false) {
    return props.variant;
  }
  return "disabled";
});

const cssVars = computed(() => {
  return {
    "--button-background-color": `var(--${color.value}-button-background-color)`,
    "--button-border-color": `var(--${color.value}-button-border-color)`,
    "--button-focus-color": `var(--${color.value}-button-focus-color)`,
    "--button-hover-color": `var(--${color.value}-button-hover-color)`,
    "--button-hover-text-color": `var(--${color.value}-button-hover-text-color)`,
    "--button-text-color": `var(--${color.value}-button-text-color)`,
  };
});
</script>

<style></style>
