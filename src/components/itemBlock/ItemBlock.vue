<template>
  <div class="main__info" :class="{ active: open }">
    <div class="main__info_block" v-if="current">
      <img
        src="@/assets/images/close.svg"
        alt=""
        class="main__info_close"
        @click="$emit('close')"
      />

      <div class="main__info_right">
        <img
          :src="getMoviesImg + getMoviesSize + current.backdrop_path"
          alt=""
          class="main__info_right-img"
        />
      </div>

      <div class="main__info_left">
        <h2 class="main__info_left-title">
          {{ current.title || current.name }}
        </h2>
        <p class="main__info_left-text">
          {{ current.overview || "Нет описания" }}
        </p>
        <p class="main__info_left-desc">
          <span>{{ getYear }} {{ getGenres }}</span>
          <span>{{ hours }}h {{ minutes }}m</span>
        </p>

        <Actors :type="type" :id="current.id" count="4" />
        <BtnMore :type="type" :id="current.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useUpcoming } from "@/stores/upComing.js";
const upcomingStore = useUpcoming();
const getMoviesImg = computed(() => upcomingStore.movieUrl);
const getMoviesSize = computed(() => upcomingStore.movieSize);

const props = defineProps(["open", "current", "type"]);

const getYear = computed(
  () =>
    new Date(props.current.release_date).getFullYear() ||
    new Date(props.current.first_air_date).getFullYear()
);

const getGenres = computed(() =>
  props.current.genres.reduce((acc, item) => acc + `, ${item.name}`, "")
);

const hours = computed(
  () =>
    Math.floor(props.current.runtime / 60) ||
    Math.floor(props.current.number_of_episodes / 60)
);
const minutes = computed(
  () => props.current.runtime % 60 || props.current.number_of_episodes % 60
);
</script>
