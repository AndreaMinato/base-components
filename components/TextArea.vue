<template>
  <textarea
    class="form-textarea form-textarea__tempestive"
    v-model="value"
  ></textarea>
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
