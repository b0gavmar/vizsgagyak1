<script setup>
import { useEmberStore } from "@/stores/emberek";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const emberStore = useEmberStore();
const router = useRouter();
const toast = useToast();

const modosit = (emberid)=>{
  router.push("/emberek/"+emberid)
}

const torol = async(emberid)=>{
  await emberStore.deleteData(emberid);
  toast.success("sikeres torles")
}

onMounted(() => {
  emberStore.fetchAll();
});
</script>

<template>
  <div class="about">
    <h1>Emberek</h1>
  </div>
  <div class="container">
    <div class="row">
      <div
        class="card col-12 col-md-6 col-lg-4 col-xl-3"
        v-for="e in emberStore.emberek"
        :key="e.id"
      >
        <p class="card-title fs-2 fw-bold">{{ e.nev }}</p>
        <div class="card-body">
          <p class="card-text">{{ e.kor }} év</p>
          <p class="card-text">Neme: {{ e.nem }}</p>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-primary mx-1" @click="modosit(e.id)">módosít</button>
          <button class="btn btn-danger mx-1" @click="torol(e.id)">töröl</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
