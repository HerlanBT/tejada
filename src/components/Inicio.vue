<template>
  <div 
    class="gallery-container" 
    :style="{ backgroundImage: `url(${imagenes[activeIndex]?.url})` }"
  >
    <div class="gallery-blur"></div> <!-- Capa difuminada -->
    
    <button @click="scrollLeft" class="nav-btn left">‹</button>
    
    <div class="gallery" ref="gallery">
      <div 
        v-for="(imagen, index) in imagenes" 
        :key="index" 
        class="gallery-item" 
        :class="{ active: index === activeIndex }">
        <img :src="imagen.url" :alt="'Imagen ' + (index + 1)" />
      </div>
    </div>
    
    <button @click="scrollRight" class="nav-btn right">›</button>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from "vue";

const imagenes = ref([]);
const activeIndex = ref(0);  // Índice de la imagen activa

// Cargar imágenes desde un JSON
const cargarImagenes = async () => {
  try {
    const response = await fetch("/images/inicio/galeria.json");
    imagenes.value = await response.json();
  } catch (error) {
    console.error("Error al cargar las imágenes:", error);
  }
};

// Función para cambiar la imagen activa hacia la izquierda
const scrollLeft = () => {
  activeIndex.value = (activeIndex.value - 1 + imagenes.value.length) % imagenes.value.length;
};

// Función para cambiar la imagen activa hacia la derecha
const scrollRight = () => {
  activeIndex.value = (activeIndex.value + 1) % imagenes.value.length;
};

// Cambio automático de imágenes
const cambiarImagenAutomatica = () => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % imagenes.value.length;
  }, 3000); // Cada 3 segundos
};

// ** Computed Property para el efecto difuminado **
const backgroundStyle = computed(() => {
  if (!imagenes.value.length) return {}; // Si no hay imágenes, no hacer nada
  return {
    backgroundImage: `url(${imagenes.value[activeIndex.value].url})`,
  };
});

onMounted(() => {
  cargarImagenes();
  cambiarImagenAutomatica();
});
</script>


<style scoped>
/* Contenedor principal */
.gallery-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  height: 720px;
  background-size: cover;
  background-position: center;
}

/* Capa difuminada */
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

/* Galería */
.gallery {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  scroll-behavior: smooth;
  padding: 20px;
  width: 100%;
  height: 100%;
  z-index: 2;
}

/* Ítems de la galería */
.gallery-item {
  min-width: 100%;
  height: 100%;  /* Establecemos altura al 100% */
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
}

/* Imagen activa */
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
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 24px;
  border-radius: 50%;
  z-index: 3;
}

.left {
  left: 5px;
}

.right {
  right: 5px;
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}


/* Responsive: ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  .gallery-container {
    height: 400px;  /* Ajustamos la altura en pantallas más pequeñas */
  }

  .gallery-item img {
    object-fit: cover; /* Asegura que las imágenes se ajusten al contenedor */
  }

  .nav-btn {
    display: block;
  }
}

/* Responsive: en móviles, se ajustan los botones de navegación */
@media (max-width: 600px) {
  .gallery-container {
    height: 300px;  /* Ajustamos la altura en móviles */
  }

  .nav-btn {
    padding: 8px;
    font-size: 20px;  /* Ajustamos el tamaño de los botones */
  }
}
</style>
