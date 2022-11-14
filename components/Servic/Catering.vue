<template>
    <div class="container mx-auto my-24 px-5 text-gray-900">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="w-full md:w-1/2 relative max-w-2xl">
                <div class="pr-5 pb-5 sm:pr-10 sm:pb-10 md:pr-20 md:pb-20  z-20">
                    <nuxt-img
                        src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_592/v1668391799/CHEF%20BREAKFAST/Ceatering_qpmzr0.webp"
                        alt="Chef Our catering" class="rounded z-20 -hue-rotate-60" width="592" height="888" loading="lazy" />
                </div>
                <div class="podloga w-full h-full rounded bg-pink-300 absolute bottom-0 right-0 -z-50"></div>
            </div>
            <div class="w-full md:w-1/2">
                <h3 class="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-2">Super Service from Chef
                    Breakfast</h3>
                <h2 class="title">Our catering</h2>
                <p class="py-2 text-gray-600">
                    We are leaders in event catering, we support the conceptual atmosphere of the event, we form the
                    culture and standards of catering in New York and Los Angeles.
                </p>
                <h4>Why choose our catering service?</h4>
                <p class="py-2 text-gray-600">
                    There is nothing easier and nothing more difficult than to feed the guests yourself. In the modern
                    world, we have passed the period where a home birthday party, all the fuss in the organization is
                    taken over by the hostess of the house, the tradition of going out under the window and burning
                    sparklers is also slowly relegated to the past.
                </p>
                <p class="py-2 text-gray-600">
                    The demands of the time are stylized events with a well-chosen location, conceptual design and
                    quality food. Currently, preference is given to outdoor events, European outdoor banquets, stylized
                    receptions, and off-site restaurants. And if we talk about all kinds of organizations or companies,
                    there is no doubt that they choose turnkey catering. Any event, a master class or a long conference,
                    requires food - a coffee break. And more often - a conceptual buffet.
                </p>
                <NuxtLink to="/about" class="text-pink-500 inline-flex items-center mt-4">
                    Our catering in more detail
                    <IconsArrow class="w-4 h-4 ml-1" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>