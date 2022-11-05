<script setup>
const Descriptions = [
    {
        title: 'Being Prompt and Attentive',
        description: 'Being prompt doesn`t mean rushing or hovering, but it does mean taking care of customers`needs in an appropriate time frame',
        img: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_160,w_160/v1665974127/CHEF%20BREAKFAST/Waiter/waiter7_lgpof5.webp',
        urlLink: '/'
    },
    {
        title: 'Service with a Smile',
        description: 'In the restaurant industry, good service means a friendly, welcoming service.',
        img: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_160,w_160/v1665974126/CHEF%20BREAKFAST/Waiter/waiter6_nupbcj.webp',
        urlLink: '/'
    },
    {
        title: 'Being Available',
        description: 'Being close to the client and coming to the rescue in time is already a big part of good service.',
        img: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_160,w_160/v1665974133/CHEF%20BREAKFAST/Waiter/waiter4_iyhj5x.webp',
        urlLink: '/'
    },
    {
        title: 'Being Exceptional',
        description: 'What will set your restaurant apart is the degree to which you are willing to go above and beyond to be exceptional.',
        img: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_160,w_160/v1665974124/CHEF%20BREAKFAST/Waiter/waiter2_ge3rqh.webp',
        urlLink: '/'
    }
]
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="title">restaurant service concept</h2>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">A restaurant is a service establishment whose objective is to prepare and sell food and drinks to satisfy customers. Also, a restaurant is responsible for offering other amenities to customers, such as table service, home delivery service, optimal payment methods, and more.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-for="Description in Descriptions" :key="Description.index" class="p-4 lg:w-1/2 md:w-full">
          <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col description">
            <div
              class="w-40 h-40 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  bg-indigo-100 text-pink-500 flex-shrink-0 rounded overflow-hidden">
              <nuxt-img :src="Description.img" :alt="Description.title" class="rounded transition duration-700 ease-in-out" width="160" height="160" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{{ Description.title }}</h2>
              <p class="leading-relaxed text-base">{{ Description.description }}</p>
              <NuxtLink :to="Description.urlLink" class="mt-3 text-pink-500 hover:text-pink-700 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-4 h-4 ml-2" viewBox="0 0 24 24">
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
.description:hover img {
  transform: scale(1.3);
}
</style>