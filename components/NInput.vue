<template>
  <input class="form-input form-input__tempestive" v-model="value" />
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {},
});
const emit = defineEmits(["update:modelValue"]);

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
