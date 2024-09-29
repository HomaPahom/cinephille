<template>
  <div class="main__intro">
    <img
      v-lazy="getMoviesImg + getMoviesSize + item.poster_path"
      alt=""
      class="main__intro_bg"
    />
    <div class="main__intro_inner">
      <div class="main__intro_inner-left">
        <h1>{{ item.title || item.name }}</h1>
        <p>{{ item.overview || "Нет описания" }}</p>

        <p class="main__intro_inner-desc">
          <span>{{ getYear }} {{ getGenres }}</span>
          <span>{{ hours }}h {{ minutes }}m</span>
        </p>
        
        <trailer />
      </div>
      <div class="main__intro_inner-right">
        <img v-lazy="getMoviesImg + getMoviesSize + item.poster_path" alt="" />
      </div>

      <div class="main__intro_actors">
        <h2 class="main__intro_actors-title">В главных ролях</h2>
        <Actors :type="type" :id="item.id" count="6"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUpcoming } from "@/stores/upComing.js";
const upcomingStore = useUpcoming();
const getMoviesImg = computed(() => upcomingStore.movieUrl);
const getMoviesSize = computed(() => upcomingStore.movieSize);

const props = defineProps({
  type: String,
  item: Object,
});

const getYear = computed(
  () =>
    new Date(props.item.release_date).getFullYear() ||
    new Date(props.item.first_air_date).getFullYear()
);

const getGenres = computed(() =>
  props.item.genres.reduce((acc, item) => acc + `, ${item.name}`, "")
);

const hours = computed(
  () =>
    Math.floor(props.item.runtime / 60) ||
    Math.floor(props.item.number_of_episodes / 60)
);
const minutes = computed(
  () => props.item.runtime % 60 || props.item.number_of_episodes % 60
);
</script>
