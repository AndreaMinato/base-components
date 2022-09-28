<template>
  <input
    :style="cssVars"
    class="form-radio form-radio__tempestive"
    type="radio"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const props = defineProps({
  modelValue: {},
  variant: {
    type: String,
    default: "base",
  },
});
const emit = defineEmits(["update:modelValue"]);

const attrs = useAttrs();
const color = computed(() => {
  if (attrs.disabled == null || attrs.disabled === false) {
    return props.variant;
  }
  return "disabled";
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: unknown) {
    emit("update:modelValue", value);
  },
});
const cssVars = computed(() => {
  return {
    "--radio-border-color": `var(--${color.value}-radio-border-color, var(--default-border-color))`,
    "--radio-color": `var(--${color.value}-radio-color, var(--default-radio-color))`,
    "--radio-focus-color": `var(--${color.value}-radio-focus-color, var(--default-focus-color))`,
  };
});
</script>

<style></style>
