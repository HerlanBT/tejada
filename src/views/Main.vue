<script setup>
import { ref } from "vue";
import Noticias from '../components/Noticias.vue';
import Anuncios from '../components/Anuncios.vue';
import Nosotros from '../components/Nosotros.vue';
import Contacto from '../components/Contacto.vue';
import Inicio from "../components/Inicio.vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
// Referencias a las secciones
const inicio = ref(null);
const noticias = ref(null);
const anuncios = ref(null);
const nosotros = ref(null);
const contacto = ref(null);

// Función para hacer scroll
function scrollTo(sectionName) {
  const sections = { inicio, noticias, anuncios, nosotros, contacto };
  const sectionRef = sections[sectionName];

  if (sectionRef?.value) {
    sectionRef.value.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <main>
    <Header @scrollToSection="scrollTo" />
    <br><br><br><br>
    <section ref="inicio"><Inicio /></section>
    <section ref="nosotros"><Nosotros /></section>
    <!-- <section ref="noticias"><Noticias /></section> -->
    <section ref="anuncios"><Anuncios /></section>
    <section ref="contacto"><Contacto /></section>
    <Footer />
    
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

</style>
