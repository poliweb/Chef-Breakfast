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
  <main>
    <ContentList path="/blog" v-slot="{ list }">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="title">My Blog</h1>
          <div class="flex flex-wrap -m-4">
            <div v-for="article in list" :key="article._path" class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img v-if="article.img" class="lg:h-48 md:h-36 w-full object-cover object-center" :src="article.img"
                  alt="blog">
                <img v-else class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400" alt="blog">
                <div class="p-6">
                  <h3 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">{{
                  article.category }}</h3>
                  <h2 class="title-font text-lg font-medium text-pink-500 mb-3 uppercase">{{ article.title }}</h2>
                  <p class="leading-relaxed mb-3">{{ article.description }}</p>
                  <div class="flex items-center flex-wrap justify-between">
                    <p class="my-4 text-gray-400"><span>Author: {{ article.author }}, {{ convertDate(article.date)
                    }}</span></p>
                    <NuxtLink :to="article._path" class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">Learn
                      More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContentList>
  </main>
</template>

<script>
export default {
 
}
</script>

<style>

</style>