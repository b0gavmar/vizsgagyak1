import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const url = "http://localhost:3000";

export const useEmberStore = defineStore("ember", () => {
  const emberek = ref([]);
  const ember = ref({});

  const fetchAll = async () => {
    const resp = await axios.get(url + "/emberek");
    emberek.value = resp.data;

    /*
    fetch(url+"/emberek")
      .then(resp=>resp.json())
      .then(data=>emberek.value = data)
     */
  };

  const getDataById =async(id)=>{
    const resp = await axios.get(url+"/emberek/"+id);
    ember.value = resp.data;
  }

  return { emberek, ember, fetchAll, getDataById };
});
