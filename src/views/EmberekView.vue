<template>
  <div class="about">
    <h1>Emberek</h1>
  </div>
  <div></div>
</template>

<style scoped></style>

<script setup>
import { useEmberStore } from "@/stores/emberek";
import { onMounted } from "vue";

const emberStore = useEmberStore();

onMounted(() => {
  emberStore.fetchAll();
});
</script>
