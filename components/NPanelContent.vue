<template>
  <Teleport to="#panel-overlay">
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="ease-in-out duration-500"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="ease-in-out duration-500"
      leave-to-class="opacity-0"
    >
      <div
        @click="$emit('close')"
        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity pointer-events-auto"
        aria-hidden="true"
        v-show="show"
      ></div>
    </Transition>
  </Teleport>

  <Teleport to="#panel-content">
    <Transition
      enter-from-class="transform transition translate-x-full"
      enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      enter-to-class="transform transition translate-x-0"
      leave-from-class="transform transition translate-x-0"
      leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      leave-to-class="transform transition translate-x-full"
    >
      <div class="w-screen max-w-md pointer-events-auto" v-show="show">
        <div class="h-full flex flex-col panel__tempestive shadow-xl">
          <div class="min-h-0 flex-shrink-0 flex flex-col py-6">
            <div class="px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium" id="slide-over-title">
                  {{ title }}
                </h2>
                <div class="ml-3 h-7 flex items-center">
                  <button
                    @click="$emit('close')"
                    type="button"
                    class="rounded-md text-nuboj-400 hover:text-nuboj-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close panel</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex-1 px-4 sm:px-6 overflow-x-auto">
            <!-- Replace with your content -->
            <slot>
              <div class="absolute inset-0 px-4 sm:px-6">
                <div
                  class="h-full border-2 border-dashed border-gray-200"
                  aria-hidden="true"
                ></div>
              </div>
            </slot>
            <!-- /End replace -->
          </div>
          <div class="flex-shrink-0 px-4 py-4 flex justify-end">
            <NButton @click="$emit('close')" type="button" variant="outline">
              Cancel
            </NButton>
            <NButton @click="$emit('save')" class="ml-4" type="submit">
              Save
            </NButton>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import NButton from "./NButton.vue";
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Panel title",
  },
});

defineEmits(["close", "save"]);
</script>
