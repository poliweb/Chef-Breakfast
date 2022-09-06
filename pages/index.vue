<script setup>
  useHead({
    title: 'Chef Breakfast',
    meta: [
    { name: 'description', content: 'Chef Breakfast. Cafe website template. The template is developed on the Nuxt-3 framework' }
  ],
  })
</script>
<template>
  <div>
    <SlaiderSwiper />
    <div class="container mx-auto my-">
      <h1 class="lora">"Это шрифт" + Lora</h1>
      <ContentDoc path="/about" />
    </div>
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