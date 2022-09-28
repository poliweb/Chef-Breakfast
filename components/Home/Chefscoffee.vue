<script setup>
const coffeeAssortments = [
    {
        title: 'Evening Express',
        description: 'Coffee beans from sunny plantations and quality roasting',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1000/v1663128608/CHEF%20BREAKFAST/Coffee/photo-1523179985834-1363f5c47d84_ojolge.webp',
        LinkTo: '/'
    },
    {
        title: 'Joy of the day',
        description: 'Coffee beans from sunny plantations and quality roasting',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1000/v1663128730/CHEF%20BREAKFAST/Coffee/photo-1575236331597-6108c662da93_vmqn26.webp',
        LinkTo: '/about'
    },
    {
        title: 'Stranger',
        description: 'Coffee beans from sunny plantations and quality roasting',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1000/v1663128697/CHEF%20BREAKFAST/Coffee/photo-1570749960335-08b0b98c26d0_b0hqqo.webp',
        LinkTo: '/blog/turkishcoffee'
    },
    {
        title: 'Lunar encounter',
        description: 'Coffee beans from sunny plantations and quality roasting',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1000/v1663128562/CHEF%20BREAKFAST/Coffee/photo-1582010622410-3060ca20ab10_qrqzxc.webp',
        LinkTo: '/'
    },
    {
        title: 'Dawn in the desert',
        description: 'Coffee beans from sunny plantations and quality roasting',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1000/v1663128375/CHEF%20BREAKFAST/Coffee/photo-1581842843064-bb0953f1b35f_lfw8zq.webp',
        LinkTo: '/'
    },
    {
        title: 'Coffee paradise',
        description: 'Coffee beans from sunny plantations and quality roasting',
        imgSrc: 'https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1000/v1663129067/CHEF%20BREAKFAST/Coffee/photo-1554285833-5eb928f2d4c1_vwacqv.webp',
        LinkTo: '/'
    }
]
</script>
<template>
    <div class="container mx-auto my-24 px-5">
        <h3 class="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-2">Сoffee you won't forget</h3>
        <h1 class="title">Chef`s Coffee</h1>
        <p class="py-2">The bitter drink from the chef was loved by visitors no less than the relaxed atmosphere of the
            cafe.</p>
        <div class="flex flex-col md:flex-row gap-8 my-20">
            <div class="w-full md:w-1/3 -hue-rotate-60 hover:hue-rotate-15 transition duration-500 ease-in-ou bg-cover bg-center rounded"
                style="background-image: url(https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_1000/v1663128175/CHEF%20BREAKFAST/Coffee/photo-1606791405792-1004f1718d0c_ufu5wj.webp)">

            </div>
            <div class="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="coffeeAssortment in coffeeAssortments" :key="coffeeAssortment.index"
                    class="relative overflow-hidden">
                    <img :src="coffeeAssortment.imgSrc" alt="" class="rounded">
                    <div
                        class="absolute top-0 left-0 bottom-0 right-0 p-4 hover:backdrop-opacity-20 hover:backdrop-invert hover:bg-pink-100/70 transition duration-700 ease-in-out coffeeDescription">
                        <div class="flex flex-col place-content-center h-full">
                            <h3 class="text-pink-500 text-2xl font-semibold transition duration-500 ease-in-out">
                                {{ coffeeAssortment.title }}
                            </h3>
                            <p class="text-gray-900 transition duration-700 ease-in-out">
                                {{ coffeeAssortment.description }}
                            </p>
                            <NuxtLink :to="coffeeAssortment.LinkTo"
                                class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 transition duration-1000 ease-in-out">
                                Learn More
                                <IconsArrow class="w-4 h-4 ml-1" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.coffeeDescription h3,
.coffeeDescription p,
.coffeeDescription a{
    opacity: 0;
    transform: translateY(15rem);

}


.coffeeDescription:hover h3,
.coffeeDescription:hover p,
.coffeeDescription:hover a {
    opacity: 1;
    transform: translateY(0px);
}

</style>