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

  const editDataById = async (id,ujadatok) => {
    await axios.put(url + "/emberek/" + id,ujadatok);
  };

  const newData = async (ujember) => {
    await axios.post(url + "/emberek/", ujember);
  };

  const getNextId = () => {
    if (emberek.value.length === 0) return 1;
    const maxId = Math.max(...emberek.value.map((e) => e.id));
    return maxId + 1;
  };

  return { emberek, ember, fetchAll, getDataById, editDataById , newData, getNextId};
});
