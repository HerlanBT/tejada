<template>
  <header class="header">
    <div class="logo">
      <img src="/logo-colegio.png" alt="Logo Colegio">
      <h1>Unidad Educativa Tejada Triangular</h1>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <nav :class="{ 'active': isMenuOpen }">
      <ul class="nav-links">
        <!-- Modificación en el botón Inicio -->
        <li>
          <a href="#" @click.prevent="goToHome">Inicio</a>
        </li>
        <li><a href="#" @click.prevent="$emit('scrollToSection', 'nosotros')">Nosotros</a></li>
        <li><a href="#" @click.prevent="$emit('scrollToSection', 'anuncios')">Eventos</a></li>

        <li><a href="#" @click.prevent="$emit('scrollToSection', 'contacto')">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

// Emitir el evento para desplazar a una sección específica
defineEmits(["scrollToSection"]);

// Usamos Vue Router para verificar la ruta actual
const router = useRouter();

const goToHome = () => {
  if (router.currentRoute.value.path === '/') {
    // Si ya estamos en la página principal, hacemos scroll hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Si no estamos en la página principal, redirigimos
    router.push('/');
  }
}
</script>

<style src="../assets/Header.css"></style>
