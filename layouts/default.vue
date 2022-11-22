<script setup>
// https://fancyapps.com/docs/ui/installation
import {
    Fancybox
} from "@fancyapps/ui/src/Fancybox/Fancybox.js"

Fancybox.bind("[data-fancybox]", {
    // Your options go here
})
useHead({
  htmlAttrs: {
      lang: 'en',
    },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:wght@100;300;400;500;700;900&display=swap'
    }
  ],
})
</script>

<template>
  <div>
    <TheHeader />
      <slot />
    <TheFooter />
  </div>
</template>

<style>
.wrapper-enter-active {
  animation: finished 2.5s reverse;
}

.wrapper-leave-active {
  animation: finished 2.5s;
}

@keyframes finished {
  0% {
    opacity: 1;
    top: 0;
  }

  50% {
    opacity: 1;
    top: 0;
  }

  60% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
    top: -100vh;
  }
}
</style>