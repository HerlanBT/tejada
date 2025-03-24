<script setup>
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from "@vercel/speed-insights/next"
</script>
 
<template>
  <div>
    <SpeedInsights />
    <Analytics />
    <vue-progress-bar></vue-progress-bar> <!-- Barra de progreso -->
    <router-view></router-view> <!-- Aquí se renderizan las páginas -->
  </div>
</template>
