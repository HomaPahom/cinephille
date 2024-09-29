<template>
    <Transition name="upcoming__item">

        <div class="main__upcoming_item" v-if="slideView == i">

            <img :src="getMoviesImg + getMoviesSize + movie.backdrop_path" alt="" class="main__upcoming_item-bg">

            <h1 class="main__upcoming_item-title">{{ movie.title }}</h1>

            <p class="main__upcoming_item-text">{{ movie.overview || 'К данному фильму не добавлено описание' }}</p>

            <BtnMore type="movie" :id="movie.id" />

            <div class="main__upcoming_item-switch" @click="$emit('slideNext')">
                <div class="main__upcoming_item-switch-desc">
                    <p>Следующий</p>

                    <span>{{ nextMovie.title }}</span>
                </div>

                <img :src="getMoviesImg + getMoviesSize + nextMovie.backdrop_path" alt="">
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { computed } from 'vue'

import { useUpcoming } from '@/stores/upComing.js';

const upcomingStore = useUpcoming()

upcomingStore.getConfiguration()


const getMoviesImg = computed(() => upcomingStore.movieUrl)
const getMoviesSize = computed(() => upcomingStore.movieSize)

const props = defineProps({
    movie: {
        typeof: Object
    },
    i: {
        typeof: Number
    },
    slideView: {
        typeof: Number
    },

    nextMovie: {
        typeof: Object
    }
})



</script>
