<template>
    <section class="text-gray-100 body-font bg-gray-900/60 relative">
        <div class="absolute inset-0 bg-no-repeat bg-cover -z-10" style="background-image: url(https://res.cloudinary.com/poliweb/image/upload/v1663918065/CHEF%20BREAKFAST/pexels-photo-678414_dhdjdz.webp)"></div>
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="title-white">Feedback from our visitors</h1>
            </div>
            <swiper :slides-per-view="1" :space-between="50" :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }" :navigation="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="(Swiperitem, index) in Swiperitems" :key="index">
                    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center cursor-col-resize">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="inline-block w-8 h-8 text-pink-500 mb-8" viewBox="0 0 975.036 975.036">
                            <path
                                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                            </path>
                        </svg>
                        <p class="leading-relaxed text-lg">{{ Swiperitem.description }}</p>
                        <nuxt-img alt="testimonial" class="w-20 h-20 mt-8 mb-4 object-cover object-center rounded-full inline-block border-2 border-pink-200 bg-gray-100" :src="Swiperitem.avatar" width="80" height="80" loading="lazy"/>
                        <h2 class="text-gray-100 font-medium title-font tracking-wider text-sm">
                            <span class="bg-pink-500 px-2 py-1">{{ Swiperitem.name }}</span>
                        </h2>
                        <p class="text-gray-300"> {{ Swiperitem.job }} </p>
                    </div>
                </swiper-slide>
            </swiper>
    
        </div>
    </section>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Import Swiper styles
  import 'swiper/css'

  import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper)
      };
      const onSlideChange = () => {
        console.log('slide change')
      }
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay, Navigation],
      }
    },
    data() {
        return {
            StyleBg: '',
            Swiperitems: [
                {
                    name: 'Leanna Graham',
                    description: 'Dramatically disseminate focused catalysts for change whereas parallel web-readiness. Continually productize vertical web services after alternative e-business. Intrinsicly reinvent vertical imperatives vis-a-vis resource maximizing total linkage. Competently iterate cross-media web services rather than world-class data. Professionally extend B2B channels whereas.',
                    job: 'e-enable strategic applications',
                    avatar: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_100,w_100/v1656294252/samples/people/Gearl__2Tv7_kozb3s.webp'
                },
                {
                    name: 'Ervin Howell',
                    description: 'Monotonectally re-engineer interactive supply chains whereas client-focused process improvements. Globally mesh market positioning leadership rather than quality bandwidth. Authoritatively visualize cross functional schemas after go forward applications. Quickly simplify end-to-end growth strategies rather than premier niches. Credibly fashion resource-leveling growth.',
                    job: 'synergize scalable supply-chains',
                    avatar: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_faces,h_100,w_100/v1656294243/samples/people/Men__2aKnjMbP_u6gutj.webp'
                },
                {
                    name: 'Patricia Lebsack',
                    description: 'Distinctively evolve cooperative infomediaries for performance based applications. Uniquely seize cross-platform markets after economically sound action items. Assertively brand compelling communities with goal-oriented benefits. Authoritatively deliver market positioning web services and client-focused meta-services. Interactively cultivate multimedia based experiences rather than.',
                    job: 'transition cutting-edge web services',
                    avatar: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_100,w_100/v1656294240/samples/people/Gearl__v7EOw5SA4_xkx7yu.webp'
                },
                {
                    name: 'Kurtis Weissnat',
                    description: 'Assertively fashion just in time ideas and intermandated leadership. Phosfluorescently repurpose user-centric functionalities whereas resource-leveling solutions. Distinctively disintermediate cooperative channels without 24/7 functionalities. Interactively fashion cross-unit e-services through resource sucking e-services. Dramatically architect global mindshare via tactical quality vectors',
                    job: 'generate enterprise e-tailers',
                    avatar: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_100,w_100/v1656294250/samples/people/Men__2Tv7_xyqo2p.webp'
                }
            ]
        }
    }
  }
</script>
  