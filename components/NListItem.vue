<template>
  <li
    class="col-span-1 flex shadow-sm border overflow-hidden list-item__tempestive"
  >
    <slot name="left">
      <div
        class="flex-shrink-0 flex items-center justify-center w-16 text-sm font-medium"
        :style="{
          backgroundColor: accentColor,
          color: accentIconColor,
        }"
      >
        <slot name="left-content">{{ leftContent }}</slot>
      </div>
    </slot>
    <div
      class="flex-1 flex items-center justify-between truncate list-item-main-content__tempestive"
    >
      <slot>
        <div class="flex-1 px-4 py-2 text-sm truncate">
          <p class="text-nuboj-900 font-medium hover:text-nuboj-600">
            {{ mainContent }}
          </p>
          <p class="text-nuboj-500 truncate">{{ secondaryContent }}</p>
        </div>
      </slot>
    </div>
    <slot name="right"></slot>
  </li>
</template>

<script setup lang="ts">
defineProps({
  leftContent: {
    type: String,
    default: "",
  },
  mainContent: {
    type: String,
    default: "",
  },
  secondaryContent: {
    type: String,
    default: "",
  },
  accentColor: {
    type: String,
    default: "transparent",
  },
  accentIconColor: {
    type: String,
    default: "var(--text-color-900)",
  },
});
</script>

<style></style>
