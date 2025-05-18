<script setup>
import { useToast } from 'vue-toastification';
import { useEmberStore } from '@/stores/emberek';
import { ref } from 'vue'

const emberstore = useEmberStore()

const newEmber = ref({
  "id": emberstore.getNextId(),
  "nev": "",
  "kor": "",
  "nem": "",
})

</script>

<template>
  <div class="container">
    <label for="nev" class="form-label">Név</label>
    <input type="text" name="nev" id="nev" class="form-control" v-model="newEmber.nev">

    <label for="kor" class="form-label">Kor</label>
    <input type="text" name="kor" id="kor" class="form-control" v-model="newEmber.kor">

    <label for="nem" class="form-label">Nem</label>
    <input type="text" name="nrm" id="nem" class="form-control">

    <button class="btn btn-primary mt-2">Hozzáad</button>
  </div>
</template>
