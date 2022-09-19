<script setup>
import {convertDate} from '../../utils'
</script>
<template>
    <div class="container mx-auto my-24 px-5">
        <ContentDoc :path="$route.path" v-slot="{ doc }">
            <h1 class="title">{{ doc.title }}</h1>
            <img v-if="doc.img" :src="doc.img" alt="" class="w-full h-80 object-cover object-top rounded">
            <ContentRenderer :value="doc" class="conent-descrip text-gray-600 mx-auto"/>
            <p class="my-4 text-gray-400"><span>by, {{ doc.author }}, {{ convertDate(doc.date)  }}</span></p>
        </ContentDoc>
    </div>
</template>

<style>
.conent-descrip {
    max-width: 1000px;
}

.conent-descrip h3 {
    color: #ec4899;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: 500;

}

.conent-descrip p {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.conent-descrip img {
    border-radius: 0.25rem; /* 4px */
}
</style>