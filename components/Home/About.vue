<script setup>

</script>
<template>
    <div class="container mx-auto my-24 px-5 text-gray-900">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="w-full md:w-1/2">
                <h3 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">About Chef Breakfast</h3>
                <h2 class="title">25 years of experience in food preparation</h2>
                <p class="py-2">When you take your seat, your table can be your waiter, sommelier or even your dining companion – and it
                    will be normal to order and pay via a screen in all but high-end dining outfits.
                </p>
                <p class="py-2">
                    The interface will allow you to customise your order beyond foodstuff to include supplements and friendly gut
                    bacteria. There are points to quick-charge your personal device while you dine and your table acts as a surrogate
                    device should your dining companion be late and you find yourself unable to sit with your own thoughts for more than
                    five minutes.
                </p>
                <NuxtLink to="/about" class="text-pink-500 inline-flex items-center mt-4">Read More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </NuxtLink>
            </div>
            <div class="w-full md:w-1/2 relative max-w-2xl">
                <div class="pr-20 pb-20  z-20">
                    <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1000/v1662956031/CHEF%20BREAKFAST/photo-1532635211-8ec15f2ce05c_v5zx8d.webp"
                    alt="Chef" class="rounded z-20">
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