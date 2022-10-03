<template>
  <ul
    role="list"
    class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
  >
    <slot v-if="loading" name="loading">
      <ContentLoader viewBox="0 0 250 1000" :speed="1" primary-color="#e0e0e0">
        <rect x="0" y="0" rx="3" ry="3" width="250" height="40" />
        <rect x="0" y="50" rx="3" ry="3" width="250" height="40" />
        <rect x="0" y="100" rx="3" ry="3" width="250" height="40" />
        <rect x="0" y="150" rx="3" ry="3" width="250" height="40" />
      </ContentLoader>
    </slot>
    <slot v-else-if="noContent" name="no-content">
      <div class="p-2">
        <button
          @click="$emit('no-content-action')"
          type="button"
          class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center"
        >
          <SvgIcon
            icon="no-content-search"
            class="mx-auto h-12 w-12 text-nuboj-400"
          />
          <span class="mt-2 block text-sm font-medium text-nuboj-900"
            >No items here</span
          >
        </button>
      </div>
    </slot>
    <slot v-else />
  </ul>
</template>

<script setup lang="ts">
import { ContentLoader } from "vue-content-loader";
import SvgIcon from "./SvgIcon.vue";

defineEmits(["no-content-action"]);
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  noContent: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
