import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image-edge'],
    css: ['animate.css', '~/assets/css/main.css', '@fancyapps/ui/dist/fancybox.css'],

})
