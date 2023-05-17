import { createSSRApp } from "vue";

export function createApp() {
  const temp = `<div><button @click="count++">{{ count }}</button></div>`;

  return createSSRApp({
    data: () => ({ count: 1 }),
    template: temp,
  });
}
