<template>
  <select
    :class="
      [undefined, null, false].includes(attrs.multiple)
        ? 'form-select'
        : 'form-multiselect'
    "
    class="form-select__tempestive"
    v-model="value"
  >
    <slot />
  </select>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const props = defineProps({
  modelValue: {},
});
const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();
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
