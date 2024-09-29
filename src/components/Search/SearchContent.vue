<template>


    <router-link :to="`${item.media_type}/${item.id}`" class="main__search_list-item">

        <img v-lazy="getMoviesImg + getMoviesSize + item.backdrop_path" alt="" class="main__search_list-item-img">
        <h2 class="main__search_list-item-title">{{ item.name || item.title }}</h2>

    </router-link>
</template>

<script setup>

import { computed } from 'vue';
import { useUpcoming } from '@/stores/upComing.js';
const upcomingStore = useUpcoming()
const getMoviesImg = computed(() => upcomingStore.movieUrl)
const getMoviesSize = computed(() => upcomingStore.movieSize)
upcomingStore.getConfiguration()

const props = defineProps({
    item: Object,
})





</script>