<script setup>

</script>
<template>
    <div class="container mx-auto my-24 px-5 text-gray-900">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="w-full md:w-1/2">
                <h3 class="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-2">About Chef Breakfast</h3>
                <h2 class="title">25 years of experience in food preparation</h2>
                <p class="py-2">
                    Cooking is the art of cooking. It has a rich centuries-old history, reflecting the most ancient branch of human activity, its material culture, which brought together the experience and skills of cooking methods of different peoples that have come down to our time.
                </p>
                <p class="py-2">
                    Cooking studies the technological processes of preparing high-quality culinary products.
                </p>
                <p class="py-2">
                    The health of people largely depends on the correct, scientifically based, well-organized nutrition. Food should not only quantitatively, but also qualitatively meet the physiological needs and capabilities.
                </p>
                <NuxtLink to="/about" class="text-pink-500 inline-flex items-center mt-4">
                    About us in more detail
                    <IconsArrow class="w-4 h-4 ml-1"/>
                </NuxtLink>
            </div>
            <div class="w-full md:w-1/2 relative max-w-2xl">
                <div class="pr-5 pb-5 sm:pr-10 sm:pb-10 md:pr-20 md:pb-20  z-20">
                    <nuxt-img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_592/v1662956031/CHEF%20BREAKFAST/photo-1532635211-8ec15f2ce05c_v5zx8d.webp"
                        alt="Chef" class="rounded z-20 -hue-rotate-60" width="592" height="887" loading="lazy"/>
                </div>
                <div class="podloga w-full h-full rounded bg-pink-300 absolute bottom-0 right-0 -z-50"></div>
            </div>
        </div>
    </div>
</template>


<style>
.podloga {
  width: 85%;
  height: 90%;
}
</style>