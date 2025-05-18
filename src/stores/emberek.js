import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const url = "http://localhost:3000"

export const useEmberStore = defineStore('ember', () => {
  const emberek = ref([]);

  const fetchAll = async() => {
    const resp = await axios.get(url+"/emberek")
    emberek.value = resp.data
  }

  return { emberek, fetchAll }
})
