<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="title">Reserve a table</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We are happy to arrange a table reservation for you in our
                    establishment. Send us your name and phone number, our manager will contact you to clarify the date and time for
                    booking a table. Our staff works every day to make your visit to our cafe pleasant and unforgettable.</p>
            </div>
            <div
                class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" id="full-name" name="full-name"
                        class="w-full bg-pink-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative flex-grow w-full">
                    <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                        class="w-full bg-pink-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button
                    class="btn-primary">Order</button>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>