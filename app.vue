<script setup>
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
  script: [
    {
      src: '/js/main.js',
      body: true
    },
  ]
})

const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })

// console.log('✋ Hi!  This Project from PoliWeb Developer. ⛔This project is not in production yet ')
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#ec4899"/>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active {
  animation: backInDown;
  animation-duration: 2s;
  transition: all 2s;
}
.page-leave-active {
  animation: backOutDown;
  animation-duration: 1.5s;
  transition: all 1.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
