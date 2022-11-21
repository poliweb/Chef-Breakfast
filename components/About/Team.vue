<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="title">Our stellar team</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Our stellar team is passionate about customer service with great solutions that deliver great
                    results. We promise to demonstrate our commitment to service excellence in food service and proudly
                    carry the banner of the food specialist.
                </p>
            </div>
            <div class="flex flex-wrap -m-4">
                <div v-for="TeamItem in TeamItems" :key="TeamItem.index" class="p-4 lg:w-1/2">
                    <div
                        class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <a :href="TeamItem.bigPhoto" data-fancybox="gallery-Team" :data-caption="TeamItem.name + ' - ' + TeamItem.jobtitle" class="flex-shrink-0 rounded-lg w-48 h-48  sm:mb-0 mb-4 cursor-zoom-in">
                            <nuxt-img :alt="TeamItem.name + ' - ' + TeamItem.jobtitle"
                            class="rounded-lg w-48 h-48 object-cover object-center"
                            :src="TeamItem.photo" width="192" height="192" loading="lazy"/>
                        </a>
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg text-gray-900">{{ TeamItem.name }}</h2>
                            <h3 class="text-gray-500 mb-3">{{ TeamItem.jobtitle }}</h3>
                            <p class="mb-4">
                                {{ TeamItem.description }}
                            </p>
                            <span class="inline-flex">
                                <a :href="TeamItem.Facebook" target="_blank" class="text-pink-500">
                                    <IconsFacebook />
                                </a>
                                <a :href="TeamItem.Twitter" target="_blank" class="ml-2 text-pink-500">
                                    <IconsTwitter />
                                </a>
                                <a :href="TeamItem.Whatsapp" target="_blank" class="ml-2 text-pink-500">
                                    <IconsWhatsapp />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const TeamItems = [
    {
        name: 'Vasil Petrov',
        jobtitle: 'Second chef',
        description: 'Digestion is a complex process that includes a number of interrelated biochemical processes that occur in the body.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_200,w_200/v1668854140/CHEF%20BREAKFAST/Chef/senior_chef_kuammt.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_face/v1668854140/CHEF%20BREAKFAST/Chef/senior_chef_kuammt.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    },
    {
        name: 'Inga Flip',
        jobtitle: 'senior confectioner',
        description: 'Its result is the creation of an energy reserve necessary for the normal functioning of the body.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_200,w_200/v1668854143/CHEF%20BREAKFAST/Chef/Konditer_wss311.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_face/v1668854143/CHEF%20BREAKFAST/Chef/Konditer_wss311.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    },
    {
        name: 'Katrin Krauze',
        jobtitle: 'Confectioner in the hall',
        description: 'For humans, as for all animals, carbohydrates contained in food are the most important source of energy.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,h_200,w_200/v1668854139/CHEF%20BREAKFAST/Chef/konditer_holl_jiqmmn.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_face/v1668854139/CHEF%20BREAKFAST/Chef/konditer_holl_jiqmmn.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    },
    {
        name: 'Semion Shifer',
        jobtitle: 'Barista',
        description: 'They are broken down by the action of pancreatic enzymes glucose-chloride complex and liver - amylase.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,h_200,w_200/v1668854138/CHEF%20BREAKFAST/Chef/barista_cpprsj.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_face/v1668854138/CHEF%20BREAKFAST/Chef/barista_cpprsj.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    },
    {
        name: 'Natali Petrovich',
        jobtitle: 'senior cook',
        description: 'We don it just make delicious foods and drinks, we create a culture of delicious living.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,h_200,w_200/v1668854140/CHEF%20BREAKFAST/Chef/cook_l6a1tz.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_face/v1668854140/CHEF%20BREAKFAST/Chef/cook_l6a1tz.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    },
    {
        name: 'Masha Ivanova',
        jobtitle: 'Bartender',
        description: 'The bartender makes sure that the drinks he serves meet the taste of the client and are prepared in accordance with the style and spirit of the establishment.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,h_200,w_200/v1668854138/CHEF%20BREAKFAST/Chef/barmen_oxptti.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_face/v1668854138/CHEF%20BREAKFAST/Chef/barmen_oxptti.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    },
    {
        name: 'Andriano Manuchi',
        jobtitle: 'The Pizza Specialist',
        description: 'Despite the variety of healthy eating methods, the philosophy of each of them boils down to three main requirements.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,h_200,w_200/v1668854139/CHEF%20BREAKFAST/Chef/picaman_nmk8pz.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,w_1920/v1668854139/CHEF%20BREAKFAST/Chef/picaman_nmk8pz.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    },
    {
        name: 'Vasya Pupkin',
        jobtitle: 'Cook is apprentice',
        description: 'Before going to school to be a cook, I tried to work as a postman. Every day and in any weather, I walked the streets for eight hours.',
        photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,h_200,w_200/v1668854334/CHEF%20BREAKFAST/Chef/cook_apprentice_m2obu4.webp',
        bigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face,w_1920/v1668854334/CHEF%20BREAKFAST/Chef/cook_apprentice_m2obu4.webp',
        Facebook: 'https://www.facebook.com/',
        Twitter: 'https://twitter.com/',
        Whatsapp: 'https://web.whatsapp.com/'
    }
]
</script>

<style lang="scss" scoped>

</style>