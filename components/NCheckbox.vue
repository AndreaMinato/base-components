<template>
  <input
    :style="cssVars"
    class="form-checkbox form-checkbox__tempestive"
    type="checkbox"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { useAttrs, computed } from "vue";

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

const cssVars = computed(() => {
  return {
    "--checkbox-border-color": `var(--${color.value}-checkbox-border-color, var(--default-border-color))`,
    "--checkbox-color": `var(--${color.value}-checkbox-color, var(--default-checkbox-color))`,
    "--checkbox-focus-color": `var(--${color.value}-checkbox-focus-color, var(--default-focus-color))`,
  };
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: unknown) {
    emit("update:modelValue", value);
  },
});
</script>

<style></style>
