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
        To keep up to date with the latest news and promotions from <span class="bg-pink-500 px-2 text-white">CHEF
          BREAKFAST</span>, sign up for our newsletter. You will receive a 5% discount coupon in your email to use on your
        next order.
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