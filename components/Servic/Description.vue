<script setup>
const Descriptions = [
    { 
        title: 'Being Prompt and Attentive',
        description: 'Being prompt doesn`t mean rushing or hovering, but it does mean taking care of customers`needs in an appropriate time frame',
        img: 'http://via.placeholder.com/160',
        urlLink: '/'
    },
    { 
        title: 'Service with a Smile',
        description: 'In the restaurant industry, good service means a friendly, welcoming service.',
        img: 'https://via.placeholder.com/160/0000FF/808080?Text=Digital.com',
        urlLink: '/'
    },
    { 
        title: 'Being Available',
        description: 'Being close to the client and coming to the rescue in time is already a big part of good service.',
        img: 'https://via.placeholder.com/160/0000FF/808080?Text=Digital.com',
        urlLink: '/'
    },
    { 
        title: 'Being Exceptional',
        description: 'What will set your restaurant apart is the degree to which you are willing to go above and beyond to be exceptional.',
        img: 'https://via.placeholder.com/160/0000FF/808080?Text=Digital.com',
        urlLink: '/'
    }
]
</script>

<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4">
      <div v-for="Description in Descriptions" :key="Description.index" class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-40 h-40 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  bg-indigo-100 text-pink-500 flex-shrink-0">
            <img :src="Description.img" alt="" class="rounded-lg" width="160px" height="160px">
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{{ Description.title }}</h2>
            <p class="leading-relaxed text-base">{{ Description.description }}</p>
            <NuxtLink :to="Description.urlLink" class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style>

</style>