<script setup>
import { convertDate } from '../../utils'
useHead({
    title: 'My Blog',
    meta: [
        { name: 'description', content: 'This Blog from Chef Breakfast. Blog about delicious and healthy food. Recipes from our chef .' }
    ],
})

</script>
<template>
    <div class="container mx-auto my-24 px-5">
        <h1 class="title">My Blog</h1>
        <main>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="border-b border-pink-200 mb-8">
        <h2 class="title-font text-2xl font-medium text-pink-500 mb-3 uppercase">{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p class="my-4 text-gray-500"><span>Author: {{ article.author }}, {{ convertDate(article.date)  }}</span></p>
        <NuxtLink :to="article._path">Learn More</NuxtLink>
      </div>
    </ContentList>
  </main>
    </div>
</template>

<script>
export default {
 
}
</script>

<style>

</style>