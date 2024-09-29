import { defineStore } from 'pinia'

import { apiKey, getUrl } from '../url'
import axios from 'axios'



export const useUpcoming = defineStore({

    id: 'Upcoming',

    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        
        movieUrl: null,
        movieSize: null,
        upcoming: null
    }),

    actions: {
        async getUpcoming() {
            try {
                let res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU`)
                this.upcoming = res.data.results


            } catch (error) {
                console.error('Произошла ошибка в получении предстоящих фильмов', error);
            }
        },

        async getConfiguration() {
            try {
                let res = await axios.get(`${getUrl}?api_key=${apiKey}&language=ru-RU`)
                this.movieUrl = res.data.images.base_url
                this.movieSize = res.data.images.backdrop_sizes[3]
            } catch (error) {
                console.error('Произошла ошибка в получении предстоящих фильмов', error);
            }
        }
    },

    getters: {}
})