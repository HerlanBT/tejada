<template>
  <header class="header">
    <div class="logo">
      <a href="#" @click.prevent="goToHome"><img src="/logo-colegio.png" alt="Logo Colegio"></a>
      <h1>Unidad Educativa Tejada Triangular</h1>
    </div>

    <div class="hamburger" @click="toggleMenu" v-if="isInicio">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <nav :class="{ 'active': isMenuOpen }">
      <ul class="nav-links" v-if="isInicio">
        <li><a href="#" @click.prevent="goToHome">Inicio</a></li>
        <li><a href="#" @click.prevent="irNosotros">Nosotros</a></li>
        <li><a href="#" @click.prevent="$emit('scrollToSection', 'anuncios')">Eventos</a></li>
        <li><a href="#" @click.prevent="$emit('scrollToSection', 'contacto')">Contacto</a></li>
        <li><a href="#" @click.prevent="irAGaleria">Galería</a></li>
      </ul>

      <!-- ✅ Mostrar solo el botón "Volver" si no estamos en Inicio -->
      <button v-else @click="goToHome" class="back-button">Volver a la Página Principal</button>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// Estado del menú hamburguesa
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const router = useRouter();

// Emitimos el evento para desplazarse a una sección
defineEmits(["scrollToSection"]);

// ✅ Verificar si la ruta actual es la página de inicio
const isInicio = computed(() => router.currentRoute.value.path === "/");

const goToHome = () => {
  router.push("/");
};

// Función para navegar a la galería
const irAGaleria = () => {
  router.push("/galeria");
};
const irNosotros = () => {
  router.push('/nosotros');
};
</script>

<style src="../assets/Header.css"></style>

<style scoped>

.back-button {
  background-color: #04b8ff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.back-button:hover {
  background-color: #ff416c;
}
</style>
