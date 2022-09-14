<script setup>
const MenuLinks = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Services',
        url: '/services'
    },
    {
        title: 'Blog',
        url: '/blog'
    },
    {
        title: 'About Us',
        url: '/about'
    },
    {
        title: 'Contact Us',
        url: '/contacts'
    }
]
</script>
<template>
    <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <NuxtLink to="/" class="flex title-font font-medium items-center mb-4 md:mb-0">
                <TheLogo class="fill-white w-12 h-12 text-white p-2 bg-pink-500 rounded-full" />
                <div class="flex-col ml-3">
                    <h2 class="text-xl font-medium leading-5 uppercase text-gray-900">Chef Breakfast</h2>
                    <span class="text-sm font-light leading-4 tracking-wider text-gray-800">caffe bistro master</span>
                </div>
            </NuxtLink>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <NuxtLink v-for="MenuLink in MenuLinks" :key="MenuLink.index" :to="MenuLink.url"
                    class="mr-5 hover:text-pink-700">{{ MenuLink.title }}
                </NuxtLink>
            </nav>
            <button
                class="inline-flex items-center bg-pink-200 border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0 text-pink-700">
                CallMy
                <IconsPhonearrow class="w-5 h-5 ml-1"/>
            </button>
        </div>
    </header>
</template>


<style>
.span-tracking-wide {
    letter-spacing: 0.06em;
}
.lora-logo {
    font-family: 'Lora';
    font-weight: 700;
}

.span-tracking-wide {
    letter-spacing: 0.2em;
}

.router-link-active {
    color:#ec4899;
}

.router-link-active:hover {
    color:#ec4899;
}
</style>