<template>
  <div class="gallery-container">
    <button @click="scrollLeft" class="nav-btn left">‹</button>
    <div class="gallery" ref="gallery">
      <!-- Solo se muestra la imagen activa -->
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
import { ref, onMounted } from "vue";

const gallery = ref(null);
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

// Función para cambiar la imagen automáticamente
const cambiarImagenAutomatica = () => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % imagenes.value.length;
  }, 3000); // Cambia la imagen cada 3 segundos
};

onMounted(() => {
  cargarImagenes();
  cambiarImagenAutomatica();  // Iniciar el cambio automático
});
</script>

<style scoped>
/* Contenedor principal con botones de navegación */
.gallery-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;  /* Se asegura que ocupe el 100% del ancho de la pantalla */
  margin: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  height: 720px;  /* Altura adaptable, puedes ajustarlo según tu diseño */
}


/* Galería centrada */
.gallery {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  scroll-behavior: smooth;
  padding: 20px;
  gap: 15px;
  width: 100%;
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
  height: 100%;  /* Ajustamos para que ocupe toda la altura del contenedor */
  object-fit: cover; /* Las imágenes se recortan para llenar el contenedor manteniendo la proporción */
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
  z-index: 10;
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
