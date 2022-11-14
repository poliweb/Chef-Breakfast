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
        title: 'Menu',
        url: '/404'
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
    <header  id="navbar" class="body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center scroll-container">
            <NuxtLink to="/" class="flex title-font font-medium items-center mb-4 md:mb-0">
                <TheLogo class="fill-white w-12 h-12 text-white p-2 bg-pink-500 rounded-full scroll-logo"/>
                <div class="flex-col ml-3">
                    <h2 class="text-xl font-medium leading-5 uppercase text-gray-900 scroll-logo-title">Chef Breakfast</h2>
                    <span class="text-sm font-light leading-4 tracking-wider text-gray-800 scroll-logo-subtitle">caffe bistro master</span>
                </div>
            </NuxtLink>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center scroll-nav-color">
                <NuxtLink v-for="MenuLink in MenuLinks" :key="MenuLink.index" :to="MenuLink.url"
                    class="mr-5 hover:text-pink-500 scroll-nav-a">{{ MenuLink.title }}
                </NuxtLink>
            </nav>
            <a href="tel:+0123456789"
                class="inline-flex items-center bg-pink-200 border-0 py-1 px-5  text-base mt-4 md:mt-0 focus:outline-none hover:bg-pink-300 hover:shadow-lg hover:shadow-pink-500/50 rounded-full text-pink-700 transition ease-in-out">
                CallMy
                <IconsPhonearrow class="w-4 h-4 ml-1"/>
            </a>
        </div>
    </header>
    <div id="assistantNavbar" class=""></div>
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


/* For scroll css */
.navbar__scrolled {
	position: fixed;
	width: 100%;
	background-color: #ec4899;
	animation-name: fadeInDown;
	animation-duration: 0.5s;
	z-index: 200;
}

.navbar__scrolled .scroll-container {
 padding-top: 5px;
 padding-bottom: 5px;
}

.navbar__scrolled  .scroll-logo {
    background-color: #fbcfe8;
    fill: #ec4899;
}

.navbar__scrolled .scroll-logo-title {
 color: #fff;
}

.navbar__scrolled .scroll-logo-subtitle {
    color: #fce7f3;
}

.navbar__scrolled .scroll-nav-color {
    color: #ffffff;
}

.navbar__scrolled .router-link-active {
    color: #1e050f;
}

.navbar__scrolled .scroll-nav-a:hover {
    color: #1e050f;
}

.assistantNavbar__scrolled {
/* 	padding-top: 80px; */
	height: 88px;
}
</style>