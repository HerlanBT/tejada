<template>
  <div>
    <h1>UNIDAD EDUCATIVA TEJADA TRIANGULAR</h1>
  </div>
  <div 
    class="gallery-container" 
    :style="{ backgroundImage: `url(${imagenes[activeIndex]?.url})` }"
  >
    <div class="gallery-blur"></div> <!-- Capa difuminada -->
    
    <div class="gallery" ref="gallery">
      <div 
        v-for="(imagen, index) in imagenes" 
        :key="index" 
        class="gallery-item" 
        :class="{ active: index === activeIndex }">
        <img :src="imagen.url" :alt="'Imagen ' + (index + 1)" />
      </div>
    </div>
    
    <div class="nav-buttons">
      <button @click="scrollLeft" class="nav-btn left">‹</button>
      <button @click="scrollRight" class="nav-btn right">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

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
  width: 100%;
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

@media (max-width: 768px) {
  .gallery-container {
    height: 400px;
  }

  .gallery-item img {
    object-fit: cover;
  }

  .nav-buttons {
    bottom: 10px;
  }

  .nav-btn {
    padding: 8px;
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .gallery-container {
    height: 300px;
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
