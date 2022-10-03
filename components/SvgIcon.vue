<template>
  <div class="relative">
    <svg
      role="img"
      class="absolute inset-0 w-full h-full fill-none stroke-current flex-shrink-0"
    >
      <use :href="iconName" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import EventBus from "../../utils/EventBus";

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
});

const prefix = ref<string>("");
const route = useRoute();

EventBus.on("icons-loaded", () => {
  prefix.value = route.params.tenant as string;
});

const iconName = computed(() => {
  const icon = document.querySelector(`#${prefix.value}_${props.icon}`);
  if (icon) {
    return `#${prefix.value}_${props.icon}`;
  }
  return `#${props.icon}`;
});
</script>

<style></style>
