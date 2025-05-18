<script setup>
import { useEmberStore } from "@/stores/emberek";
import { onMounted } from "vue";

const emberStore = useEmberStore();

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
        <p class="card-title">{{ e.nev }}</p>
        <div class="card-body">
          <p class="card-text">{{ e.kor }} év</p>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-primary mx-1">módosít</button>
          <button class="btn btn-danger mx-1">töröl</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
