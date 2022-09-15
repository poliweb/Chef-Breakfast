<template>
    <swiper
    :grabCursor="true" :effect="'creative'" :creativeEffect="{
        prev: {shadow: true, translate: [0, 0, -400]},
        next: {translate: ['100%', 0, 0]}
    }"
    :autoplay="{
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
}"
 :modules="modules" :slides-per-view="1" :speed="800" :navigation="true" :space-between="50" :pagination="{
    dynamicBullets: true,
}" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="Slaider in Slaiders" :key="Slaider.index">
            <section class="text-gray-600 body-font bg-pink-200 bg-cover bg-left bg-center Height-600" :class="Slaider.bgClass" :style="{ backgroundImage: 'url(' + Slaider.bgImage + ')' }">
                <div class="container mx-auto px-5 py-24  flex md:flex-row flex-col items-center h-full">
                    <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
                    </div>
                    <div
                        class="lg:flex-grow md:w-1/2 lg:pl-28 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="animate-title title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 Lora-italic uppercase" :class="Slaider.clorTitle">
                            {{ Slaider.title }}
                        </h1>
                        <p class="animate-description mb-8 leading-relaxed -z-1 text-3xl">{{ Slaider.description }}</p>
                        <div class="flex justify-center">
                            <button
                                class="but btn-primary uppercase">order breakfast</button>
                        </div>
                    </div>
                </div>
            </section>
        </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules/
import {Autoplay, Pagination, Navigation, EffectCreative } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => { };
        const onSlideChange = () => { };
        return {
            onSwiper,
            onSlideChange,
            modules: [ Autoplay, Pagination, Navigation, EffectCreative],
        };
    },
    data(){
        return { 
            Slaiders: [
            {
            title: 'chef breakfast',
            description: 'We make sure every ingredient sent to you meets our high quality standards.',
            clorTitle: 'text-red-700',
            bgClass: 'bg-pink-200/50',
            bgImage: 'https://res.cloudinary.com/poliweb/image/upload/v1661585213/CHEF%20BREAKFAST/Baner1_1_nlxggb.webp'
        },
        {
            title: 'chef`s dessert',
            description: 'We make sure every ingredient sent to you meets our high quality standards.',
            clorTitle: 'text-red-700',
            bgClass: 'bg-pink-200/50',
            bgImage: 'https://res.cloudinary.com/poliweb/image/upload/v1661585212/CHEF%20BREAKFAST/Baner4_4_fzk4iv.webp'
        },
        {
            title: 'Tropicana juice',
            description: 'We make sure every ingredient sent to you meets our high quality standards.',
            clorTitle: 'text-pink-600',
            bgClass: 'bg-red-200',
            bgImage: 'https://res.cloudinary.com/poliweb/image/upload/v1661585218/CHEF%20BREAKFAST/Baner9_9_opvtwb.webp'
        },
        {
            title: 'Chef`s coffee',
            description: 'We make sure every ingredient sent to you meets our high quality standards.',
            clorTitle: 'text-pink-600',
            bgClass: 'bg-blue-200',
            bgImage: 'https://res.cloudinary.com/poliweb/image/upload/v1661585214/CHEF%20BREAKFAST/Baner7_7_kgoynt.webp'
        },
        {
            title: 'Multi juice',
            description: 'We make sure every ingredient sent to you meets our high quality standards.',
            clorTitle: 'text-pink-600',
            bgClass: 'bg-orange-200',
            bgImage: 'https://res.cloudinary.com/poliweb/image/upload/v1661585218/CHEF%20BREAKFAST/Baner10_10_l6nanm.webp'
        }
            ]
        }
    }
};
</script>

<style>
.Height-600 {
    height: 600px;
}

.Lora-italic {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
    font-size: 64px;
    line-height: 82px;

}


.swiper-slide .but,
.swiper-slide .animate-title,
.swiper-slide .animate-img,
.swiper-slide .animate-description {
    animation-name: zoomOut;
    animation-delay: 0.5s;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    opacity: 0;
}

.swiper-slide-active .animate-title {
    opacity: 1;
    animation-name: fadeInLeft;
    animation-delay: 0.5s;
    animation-duration: 1s;
    animation-fill-mode: both;
}

.swiper-slide-active .animate-description {
    opacity: 1;
    animation-name: fadeInRight;
    animation-delay: 0.5s;
    animation-duration: 1.2s;
    animation-fill-mode: both;
}

.swiper-slide-active .but {
    opacity: 1;
    animation-name: fadeInUp;
    animation-delay: 0.8s;
    animation-duration: 1.5s;
    animation-fill-mode: both;
}

.swiper-slide-active .but:nth-child(2) {
    animation-delay: 1.1s;
}

.swiper-slide-active .animate-img {
    opacity: 1;
    animation-name: zoomIn;
    animation-delay: 1s;
    animation-duration: 2s;
    animation-fill-mode: both;
}

.swiper-button-prev {
    color: #ec4899;
}

.swiper-button-next {
    color: #ec4899;
}
.swiper-pagination-bullet-active {
    background-color: #ec4899;
}

</style>