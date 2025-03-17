
<script setup>
import { Analytics } from '@vercel/analytics/vue';
</script>
 
<template>

  <div>
    <Analytics />
    <router-view></router-view> <!-- Aquí se renderizan las páginas -->
  </div>
</template>