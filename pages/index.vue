<script setup>
const title = ref('Hi World')
useHead({

  title: 'Chef Breakfast',
  meta: [
    { name: 'description', content: 'Chef Breakfast. Cafe website template. The template is developed on the Nuxt-3 framework' }
  ],
  script: [
    {
      src: 'js/main.js',
      body: true
    }
  ]
})
</script>
<template>
  <div>
    <SlaiderSwiper />
    <HomeFeature/>
    <HomeAbout/>
    <HomeChefscoffee/>
    <HomePhotoalbum/>
    <TheCalltoaction>
      <template #title>RESERVE A TABLE</template>
      <template #description>
        We are happy to arrange a table reservation for you in our establishment. Send us your name and phone number,
        our manager will contact you to clarify the date and time for booking a table. Our staff works every day to make
        your visit to our cafe pleasant and unforgettable.
      </template>
    </TheCalltoaction>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.lora {
  font-family: Lora;
  font-style: italic;
  font-weight: 700;
  font-size: 35px;
}
.cssh1 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>