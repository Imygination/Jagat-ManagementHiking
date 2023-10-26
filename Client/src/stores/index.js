import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://ch1news.gemaramadhan.online'

export const useIndexStore = defineStore('index', {
  state: () => ({
    mountain: {},
    pos: [],
    weather: ''
  }),
  getters: {
    center() {
      return {
        lat: Number(this.mountain.lat),
        lng: Number(this.mountain.lon)
      }
    }
  },
  actions: {
    async showResult(query) {
      try {
        const { data } = await axios.get(`${baseUrl}/result${query.slice(5)}`)
        this.mountain = data.mountain
        this.pos = data.mountain.Pos
        this.weather = data.weather
        console.log(data, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        this.router.push({ name: 'result' })
      } catch (error) {
        console.log(error)
        const errors = error.response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errors
        })
      }
    }
  }
})
