<template>
    <section class="body-font">
        <div class="container mx-auto my-24 px-5 bg-gray-900/50 rounded-xl relative overflow-hidden min-h-screen">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style="background-image: url(https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1920/v1663998952/CHEF%20BREAKFAST/Food/pexels-photo-8601414_xhgjqh.webp); z-index: -1;">
            </div>
            <!-- Title -->
            <div class="flex flex-col text-center w-full mt-20">
                <h1 class="title-white">Our menu for today</h1>
                <p
                    class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200 animate__animated animate__fadeInRight">
                    Our menu brings together all the very best seasonal ingredients, freshly prepared by our skilled
                    chefs.
                    Click on the menus below for our mouth-watering dishes and come and see us soon.
                    Additional Homestyle Meals may be available each day. If you have any questions about your favorite
                    location's menu today, please give us a call!
                </p>
            </div>
            <!-- end Title -->
            <div class="w-full max-w-xl px-2 py-16 sm:px-0 mx-auto z-30">
                <TabGroup>
                    <TabList class="flex space-x-1 rounded-xl bg-pink-900/50 p-1">
                        <Tab v-for="category in Object.keys(categories)" as="template" :key="category"
                            v-slot="{ selected }">
                            <button :class="[
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-pink-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                            ]">
                                {{ category }}
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2">
                        <TabPanel v-for="(menus, idx) in Object.values(categories)" :key="idx" :class="[
                            'rounded-xl bg-white p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2',
                        ]" class="animate__animated animate__flipInY">
                            <ul>
                                <li v-for="menu in menus" :key="menu.id"
                                    class="relative rounded-md p-3 hover:bg-gray-100">
                                    <div class="flex flex-row justify-between gap-1">
                                        <div class="w-4/5">
                                            <h3 class="text-md font-medium leading-5">
                                                {{ menu.title }}
                                            </h3>
                                            <p class="text-sm text-gray-700">{{ menu.description }}</p>
                                            <ul
                                                class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 ">
                                                <li>Cooking time - {{ menu.cookingTime }}</li>
                                                <li>&middot;</li>
                                                <li>Price - {{ menu.price }} $</li>
                                            </ul>
                                        </div>
                                        <div class="w-20">
                                            <nuxt-img :src="menu.photo" class="rounded-xl" width="80" height="80" />
                                        </div>
                                    </div>

                                    <a :href="menu.BigPhoto" data-fancybox="Menu" :data-caption="menu.title"
                                        :class="['absolute inset-0 rounded-md', 'ring-pink-400 focus:z-10 focus:outline-none focus:ring-2',]" />
                                </li>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
    Breakfast: [
        {
            id: 1,
            title: 'Chef`s coffee',
            description: 'The bitter drink from the chef was loved by visitors no less than the relaxed atmosphere of the cafe.',
            cookingTime: '0.5h',
            price: 2,
            photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_80,w_80/v1663129067/CHEF%20BREAKFAST/Coffee/ChefCoffee.webp',
            BigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_center/v1663129067/CHEF%20BREAKFAST/Coffee/ChefCoffee.webp'
        },
        {
            id: 2,
            title: "Turkish coffee",
            description: 'Excellent Turkish coffee made from the best varieties of coffee beans and spring water. Served with Turkish sweets.',
            cookingTime: '2h ago',
            price: 2,
            photo: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_80,w_80/v1663573066/CHEF%20BREAKFAST/Coffee/photo-1556667356-3452717120a0_hlapyo.webp',
            BigPhoto: 'https://res.cloudinary.com/poliweb/image/upload/g_center/v1663573066/CHEF%20BREAKFAST/Coffee/photo-1556667356-3452717120a0_hlapyo.webp'
        },
        {
            id: 2,
            title: "coffee... now what?",
            description: 'Description of the dish',
            cookingTime: '2h ago',
            price: 2,
            photo: 'https://dummyimage.com/80x80',
            BigPhoto: 'https://dummyimage.com/800x800'
        },
    ],
    Lunch: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            description: 'Description of the dish',
            cookingTime: 'Jan 7',
            price: 16,
            photo: 'https://dummyimage.com/80x80',
            BigPhoto: 'https://dummyimage.com/800x800'
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            description: 'Description of the dish',
            cookingTime: 'Mar 19',
            pricet: 12,
            photo: 'https://dummyimage.com/80x80',
            BigPhoto: 'https://dummyimage.com/800x800'
        },
    ],
    Dinner: [
        {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            description: 'Description of the dish',
            cookingTime: '2d ago',
            price: 5,
            photo: 'https://dummyimage.com/80x80',
            BigPhoto: 'https://dummyimage.com/800x800'
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            description: 'Description of the dish',
            cookingTime: '4d ago',
            price: 2,
            photo: 'https://dummyimage.com/80x80',
            BigPhoto: 'https://dummyimage.com/800x800'
        },
    ],
})
</script>
<style>

</style>