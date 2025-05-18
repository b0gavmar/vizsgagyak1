<template>
    <div class="container pt-2">
        <label for="nev" class="form-label">Név</label>
        <input type="text" class="form-control" v-model="currentEmber.nev" id="nev" name="nev"></input>
        kor: <input type="number" min="1" max="120" class="form-control" v-model="currentEmber.kor"></input>
        nem: <select min="1" max="120" class="form-select" v-model="currentEmber.nem" @change="nemvaltas()">
            <option v-for="nem in nemek" :value="nem"> {{ nem =="ferfi" ? "Férfi": "Nő" }}</option>
        </select>
        
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useEmberStore } from "@/stores/emberek";
import { useToast } from "vue-toastification";

const route = useRoute();
const toast = useToast();
const emberStore = useEmberStore()

const currentEmber = ref({
    "id" : "",
    "nev": "",
    "kor": "",
    "nem": ""
});

const nemek = ref([
    "ferfi", "no"
])

const nemvaltas = () =>{
    toast.success("Sikeres nemváltás")
}

onMounted(async()=>{
    await emberStore.getDataById(route.params.emberid);
    currentEmber.value = emberStore.ember;
})


</script>

<style scoped></style>
