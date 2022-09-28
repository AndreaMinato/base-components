import type { Directive } from "vue";

export const WithTheme: Directive = {
  mounted(el, binding) {
    el.classList.add("default__theme");
    const value = binding.value;
    if (!value || typeof value !== "object") {
      console.warn("Please use an object for the theme");
      return;
    }
    if (value) {
      for (const key in value) {
        if (key.startsWith("--")) {
          el.style.setProperty(`${key}`, value[key]);
        }
      }
    }
  },
  updated(el, binding) {
    const value = binding.value;
    if (!value || typeof value !== "object") {
      console.warn("Please use an object for the theme");
      return;
    }
    if (value) {
      for (const key in value) {
        if (key.startsWith("--")) {
          el.style.setProperty(`${key}`, value[key]);
        }
      }
    }
  },
};
