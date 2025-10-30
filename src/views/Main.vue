<template>
  <main>
    <Header @scrollToSection="scrollTo" />

    <!-- INICIO se mantiene fuera del grid -->
    <section ref="inicio" class="inicio">
      <Inicio />
    </section>
    <div class="grid-secciones">
  <div class="contenedor-seccion">
    <section ref="galeria" class="seccion-con-fondo galeria">
      <button class="boton-seccion" @click="irAGaleria">Galería</button>
    </section>
  </div>

  <div class="contenedor-seccion">
    <section ref="nosotros" class="seccion-con-fondo nosotros">
      <button class="boton-seccion" @click="irNosotros">Nosotros</button>
    </section>
  </div>

  <!-- <div class="contenedor-seccion">
    <section class="seccion-con-fondo adicional Noticias">
      <div class="contenido-ajustado">
        <Noticias />
      </div>
    </section>
  </div> -->

    <div class="contenedor-seccion">
    <section ref="nosotros" class="seccion-con-fondo monografias">
      <button class="boton-seccion" @click="irAMonografias">Monografías</button>
    </section>
  </div>

  <div class="contenedor-seccion">
    <section class="seccion-con-fondo adicional">
      <div class="contenido-ajustado">
        <Contacto />
      </div>
    </section>
  </div>

</div>

    <Footer />
  </main>
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
const irAMonografias = () => {
  router.push('/monografias')
}

</script>

<style scoped>
.inicio {
  margin-top: 100px;
}

@media (max-width: 768px) {
  .inicio {
    margin-top: 60px;
  }
}

.grid-secciones {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas en escritorio */
  gap: 20px;
  padding: 40px;
}

/* Cada contenedor mantiene un tamaño fijo */
.contenedor-seccion {
  height: 50vh;
  width: 100%;
  overflow: hidden;
  border-radius: 22px;
}

/* Estilo base para todas las secciones */
.seccion-con-fondo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Se ajusta al contenedor padre */
  width: 100%;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  position: relative;
}

/* Contenido ajustado para Anuncios y Contacto */
.contenido-ajustado {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  
}

/* Fondos personalizados */
.galeria {
  background-image: url('../assets/galeria.jpg');
  background-color: rgba(0, 0, 0, 0.5);
}

.nosotros {
  background-image: url('../assets/nosotros.jpg');
  background-color: rgba(0, 0, 0, 0.5);

}
.monografias {
  background-image: url('../assets/monografia.jpg');
  background-color: rgba(0, 0, 0, 0.5);

}

/* Botón */
.boton-seccion {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
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
  z-index: 10;
}

.boton-seccion:hover {
  transform: translateX(-50%) scale(1.1);
  background: linear-gradient(45deg, #ff5722, #ff9800);
}
.Noticias {
  background-color: rgb(69, 183, 228);
  height: 100%;
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .grid-secciones {
    grid-template-columns: 1fr;
  }

  .contenedor-seccion {
    height: 60vh;
  }
}

</style>
