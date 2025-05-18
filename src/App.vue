<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

      <nav class=" bg-dark">
        <RouterLink class="btn btn-primary m-3" to="/emberek">emberek</RouterLink>
        <RouterLink class="btn btn-primary m-3" to="/new">új</RouterLink>
      </nav>


  <RouterView />
</template>

<style scoped>

</style>
