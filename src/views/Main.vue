<template>
  <main>
    <Header @scrollToSection="scrollTo" />
   
    <section ref="inicio">
      <Inicio />
    </section>
    <section ref="galeria">
      <button @click="irAGaleria">Galería</button>
    </section>
    <section ref="nosotros">
      <!-- ponemos botones -->
      <button @click="irNosotros">Nosotros</button>
    </section>
    <section ref="anuncios">
      <Noticias />
    </section>
    <section ref="contacto">
      <Contacto />
    </section>
  </main>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Inicio from "../components/Inicio.vue";
import Noticias from '../components/Anuncios.vue';
import Contacto from '../components/Contacto.vue';

// Referencias a las secciones
const inicio = ref(null);
const nosotros = ref(null);
const anuncios = ref(null);
const contacto = ref(null);

const router = useRouter();

// Función para hacer scroll
const scrollTo = (sectionName) => {
  const sections = { inicio, nosotros, anuncios, contacto };
  const sectionRef = sections[sectionName];

  if (sectionRef?.value) {
    sectionRef.value.scrollIntoView({ behavior: "smooth" });
  }
};

// Función para ir a la galería
const irAGaleria = () => {
  router.push('/galeria');
};
const irNosotros = () => {
  router.push('/nosotros');
};
</script>
<style src="../assets/main.css""></style>