<template>
  <main>
    <Header @scrollToSection="scrollTo" />

    <section ref="inicio">
      <Inicio />
    </section>

    <section ref="galeria" class="seccion-con-fondo galeria">
      <button class="boton-seccion" @click="irAGaleria">Galería</button>
    </section>

    <section ref="nosotros" class="seccion-con-fondo nosotros">
      <button class="boton-seccion" @click="irNosotros">Nosotros</button>
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

const inicio = ref(null);
const nosotros = ref(null);
const anuncios = ref(null);
const contacto = ref(null);

const router = useRouter();

const scrollTo = (sectionName) => {
  const sections = { inicio, nosotros, anuncios, contacto };
  const sectionRef = sections[sectionName];

  if (sectionRef?.value) {
    sectionRef.value.scrollIntoView({ behavior: "smooth" });
  }
};

const irAGaleria = () => {
  router.push('/galeria');
};
const irNosotros = () => {
  router.push('/nosotros');
};
</script>

<style scoped>
/* ✅ Fondo con imagen para secciones */
.seccion-con-fondo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Ajusta la altura según necesites */
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}

/* 🔥 Fondo personalizado para cada sección */
.galeria {
  background-image: url('../assets/galeria.jpg'); /* Cambia la ruta por tu imagen */
  background-color: rgba(0, 0, 0, 0.5); /* Oscurece la imagen para mejor visibilidad */
}

.nosotros {
  background-image: url('../assets/nosotros.jpg');
  background-color: rgba(0, 0, 0, 0.5);
}

/* ✨ Botón estilizado */
.boton-seccion {
  background: linear-gradient(45deg, #ff9800, #ff5722);
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 🌟 Efecto hover */
.boton-seccion:hover {
  transform: scale(1.1);
  background: linear-gradient(45deg, #ff5722, #ff9800);
}
</style>
