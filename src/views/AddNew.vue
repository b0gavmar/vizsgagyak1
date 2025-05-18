<script setup>
import { useToast } from 'vue-toastification';
import { useEmberStore } from '@/stores/emberek';
import { ref } from 'vue'

const emberstore = useEmberStore()
const toast = useToast();

const newEmber = ref({
  id: "",
  nev: "",
  kor: "",
  nem: "",
})

const error = ref(false)

const hozzaad = async ()=>{
  if(newEmber.value.nev.trim() !== "" && newEmber.value.kor !== "" && newEmber.value.nem.trim() !== ""){
    error.value = false;
    newEmber.value.id = ""+await emberstore.getNextId();
    await emberstore.newData(newEmber.value);
    toast.success("sikeres hozzáadás")
    console.table(newEmber.value)
  }
  else{
    error.value = true
  }

}

</script>

<template>
  <div class="container">
    <label for="nev" class="form-label">Név</label>
    <input type="text" name="nev" id="nev" class="form-control" v-model="newEmber.nev">

    <label for="kor" class="form-label">Kor</label>
    <input type="number" name="kor" id="kor" class="form-control" v-model="newEmber.kor">

    <label for="nem" class="form-label">Nem</label>
    <input type="text" name="nrm" id="nem" class="form-control" v-model="newEmber.nem">

    <button class="btn btn-primary mt-2" @click="hozzaad()">Hozzáad</button>
    <div class="text-danger border" v-if="error === true">Töltön ki mindent</div>
  </div>
</template>
