<script setup>
const features = [
    {
        subtitle: 'Chef Breakfast',
        title: 'Bakery products',
        description: 'Our chef himself selects the highest quality and most delicious products for cooking.',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_208,w_477/v1663048620/CHEF%20BREAKFAST/Food/photo-1608198093002-ad4e005484ec_sw1yab.webp',
        LinkTo: '/'
    },
    {
        subtitle: 'Chef Breakfast',
        title: 'Magic Desserts',
        description: 'Our chef himself selects the highest quality and most delicious products for cooking.',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_208,w_477/v1663048010/CHEF%20BREAKFAST/Food/photo-1578775887804-699de7086ff9_kw75i6.webp',
        LinkTo: '/'
    },
    {
        subtitle: 'Chef Breakfast',
        title: 'Fantastic Ice Cream',
        description: 'Our chef himself selects the highest quality and most delicious products for cooking.',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_208,w_477/v1663046628/CHEF%20BREAKFAST/Food/photo-1633933358116-a27b902fad35_csrbjq.webp',
        LinkTo: '/'
    },
    {
        subtitle: 'Chef Breakfast',
        title: 'Ukrainian borsch',
        description: 'Our chef himself selects the highest quality and most delicious products for cooking.',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_208,w_477/v1663998920/CHEF%20BREAKFAST/Food/pexels-photo-8601388_ddzbee.webp',
        LinkTo: '/blog/ukrainianborsch'
    },
    {
        subtitle: 'Chef Breakfast',
        title: 'Russian pancakes',
        description: 'Our chef himself selects the highest quality and most delicious products for cooking.',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_208,w_477/v1663047725/CHEF%20BREAKFAST/Food/photo-1600326145552-327f74b9c189_jl4c1l.webp',
        LinkTo: '/blog/russianpancakes'
    },
    {
        subtitle: 'Chef Breakfast',
        title: 'Unique Afghan Kebab',
        description: 'Our chef himself selects the highest quality and most delicious products for cooking.',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_208,w_477/v1663047270/CHEF%20BREAKFAST/Food/photo-1555939594-58d7cb561ad1_k9eom3.webp',
        LinkTo: '/blog/home'
    },
]
</script>
<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="title">feature of our kitchen</h2>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Our chef takes over every morning to surprise and
                    enchant every visitor of our establishment with his skill and imagination to create fabulous food
                    from simple products. Our visitors never leave us feeling disappointed and hungry. Harmony and
                    bouquet of taste - the philosophy of our chef.</p>
            </div>
            <div class="flex flex-wrap -m-4">
                <div v-for="feature in features" :key="feature.index" class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative overflow-hidden transformImg rounded">
                        <nuxt-img alt="gallery"
                            class="absolute inset-0 w-full h-full object-cover object-center transition ease-in-out duration-700"
                            :src="feature.imgSrc" width="477" height="208" loading="lazy"/>
                        <NuxtLink :to="feature.LinkTo">
                            <div
                                class="px-8 py-10 relative z-10 w-full min-h-52 border-4 border-pink-200 transition-opacity duration-500 ease-in-out bg-white opacity-0 hover:opacity-100">
                                <h3 class="tracking-widest text-sm title-font font-medium text-pink-300 mb-1">{{
                                feature.subtitle }}
                                </h3>
                                <h2 class="title-font text-2xl font-medium text-pink-500 mb-3 uppercase">{{
                                feature.title }}
                                </h2>
                                <p class="leading-relaxed text-gray-600">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.transformImg:hover img {
    transform: scale(1.2)
}
</style>