<script setup>

// ===========================
  useHead({
    title: 'Services Chef Breakfast',
    meta: [
    { name: 'description', content: 'Site Chef Breakfast. Cafe website template. The template is developed on the Nuxt-3 framework' }
  ],
  })
</script>
<template>
  <div>
    <ServicDescription />
    <ServicOurservice />
    <ServicCatering />
    <Subscribe class="bg-pink-100">
      <template #title>Subsribe To Newsletter</template>
      <template #description>
        We are happy to arrange a table reservation for you in our establishment. Send us your name and phone number,
        our manager will contact you to clarify the date and time for booking a table. Our staff works every day to make
        your visit to our cafe pleasant and unforgettable.
      </template>
    </Subscribe>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>