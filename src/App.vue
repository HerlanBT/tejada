<script setup>
import { ref, onMounted } from 'vue';
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from "@vercel/speed-insights/vue";

const isLoaded = ref(false);

onMounted(() => {
  // Si el documento ya está cargado, ocultamos el loader
  if (document.readyState === 'complete') {
    isLoaded.value = true;
  } else {
    // Si no, esperamos hasta que termine de cargar todo
    window.onload = () => {
      isLoaded.value = true;
    };
  }
});
</script>

<template>
  <div v-if="!isLoaded" class="loader">
    <div class="spinner"></div>
  </div>

  <div v-else>
    <SpeedInsights />
    <Analytics />
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
