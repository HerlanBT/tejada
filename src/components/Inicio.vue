<template>
  <div class="contenido-principal">
    <!-- COLUMNA IZQUIERDA: TEXTO Y REDES -->
    <div class="info-redes">
      <h1 class="titulo">UNIDAD EDUCATIVA TEJADA TRIANGULAR</h1>
      <div class="bloque-redes">
        <h2>Nuestras Redes Sociales</h2>
        <div class="redes-sociales">
          <a href="https://www.facebook.com/profile.php?id=61573393153822" target="_blank" class="icono"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/tejadatriangular/" target="_blank" class="icono"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com/@tejadatriangularunidadeducativ?si=9Y611migO1nTM1z2" target="_blank" class="icono"><i class="fab fa-youtube"></i></a>
          <a href="https://www.tiktok.com/@tejadatriangular_colegio?_t=ZM-8umsG7lOgCc&_r=1" target="_blank" class="icono"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>

    <!-- COLUMNA DERECHA: GALERÍA -->
    <div class="gallery-container" :style="{ backgroundImage: `url(${imagenes[activeIndex]?.url})` }">
      <div class="gallery-blur"></div>

      <div class="gallery" ref="gallery">
        <div v-for="(imagen, index) in imagenes" :key="index" class="gallery-item"
          :class="{ active: index === activeIndex }">
          <img :src="imagen.url" :alt="'Imagen ' + (index + 1)" />
        </div>
      </div>

      <div class="nav-buttons">
        <button @click="scrollLeft" class="nav-btn left">‹</button>
        <button @click="scrollRight" class="nav-btn right">›</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const imagenes = ref([]);
const activeIndex = ref(0);  // Índice de la imagen activa

const cargarImagenes = async () => {
  try {
    const response = await fetch("/images/inicio/galeria.json");
    imagenes.value = await response.json();
  } catch (error) {
    console.error("Error al cargar las imágenes:", error);
  }
};

const scrollLeft = () => {
  activeIndex.value = (activeIndex.value - 1 + imagenes.value.length) % imagenes.value.length;
};

const scrollRight = () => {
  activeIndex.value = (activeIndex.value + 1) % imagenes.value.length;
};

const cambiarImagenAutomatica = () => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % imagenes.value.length;
  }, 3000);
};

onMounted(() => {
  cargarImagenes();
  cambiarImagenAutomatica();
});
</script>

<style scoped>
/* Estilos Generales */
.titulo {
  font-size: 2.5rem;
  text-align: center;
  margin: 20px 0;
  color: #333;
  font-family: 'Arial', sans-serif;
}

/* Contenedor Principal */
.contenido-principal {
  display: flex;
  flex-wrap: wrap; /* Permite que en pantallas pequeñas se apilen */
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  gap: 40px;
}

.info-redes {
  flex: 1;
  max-width: 500px;
  padding: 20px;
}

.gallery-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 500px; /* Ajusta altura base */
  max-width: 700px; /* Ajusta tamaño máximo */
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
}

/* Estilo de las redes sociales */
.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icono {
  color: rgb(1, 1, 87);
  font-size: 3rem;
  transition: transform 0.3s ease;
}

.icono:hover {
  transform: scale(1.2);
  color: red;
}

/* Estilo de la galería */
.gallery {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.gallery-item {
  min-width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}

.gallery-item.active {
  opacity: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}

/* Botones de navegación */
.nav-buttons {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 3;
}

.nav-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 24px;
  border-radius: 50%;
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Efecto de desenfoque en la galería */
.gallery-blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

/* Media Queries para hacer la página responsive */

/* En pantallas medianas */
@media (max-width: 768px) {
  .contenido-principal {
    flex-direction: column;
    align-items: center;
  }

  .info-redes, .gallery-container {
    max-width: 100%;
  }

  .gallery-container {
    height: 400px;
  }

  .nav-buttons {
    bottom: 10px;
  }

  .nav-btn {
    padding: 8px;
    font-size: 20px;
  }
}

/* En pantallas pequeñas (móviles) */
@media (max-width: 600px) {
  .gallery-container {
    height: 350px;
  }

  .nav-buttons {
    bottom: 5px;
  }

  .nav-btn {
    padding: 6px;
    font-size: 18px;
  }
}
</style>
