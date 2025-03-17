<script setup>
import { Analytics } from "@vercel/analytics/react"
import Main from './views/Main.vue';
</script>
<template>
  <div>
    <router-view></router-view> <!-- Aquí se renderizan las páginas -->
  </div>
</template>
