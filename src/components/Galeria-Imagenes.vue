<template>
    <Header />
    
    <main>
      <div class="gallery-wrapper">
        <!-- Botones para seleccionar categorías -->
        <div class="category-buttons">
          <button 
            v-for="categoria in categorias" 
            :key="categoria" 
            @click="cargarImagenes(categoria)"
            :class="{ active: categoriaSeleccionada === categoria }"
          >
            {{ categoria }}
          </button>
        </div>
  
        <!-- Contenedor de la galería -->
        <div v-if="imagenes.length > 0" class="gallery-container">
          <!-- Imagen principal con animación de desplazamiento -->
          <div class="main-image">
            <div class="image-slider" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
              <img 
                v-for="(imagen, index) in imagenes" 
                :key="imagen.url" 
                :src="imagen.url" 
                :alt="imagen.alt"
                class="slide-image"
              />
            </div>
          </div>
  
          <!-- Navegación -->
          <div class="image-navigation">
            <button @click="scrollLeft" class="nav-btn left">‹</button>
            <button @click="scrollRight" class="nav-btn right">›</button>
          </div>
  
        </div>
  
        <!-- Mensaje si no hay imágenes -->
        <p v-else class="no-images">No hay imágenes disponibles.</p>
      </div>
    </main>
  
    <Footer />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  const categorias = ["Biología", "Física", "Química", "Computación"];
  const categoriaSeleccionada = ref("");
  const imagenes = ref([]);
  const activeIndex = ref(0);
  
  // Cargar las imágenes según la categoría seleccionada
  const cargarImagenes = async (categoria) => {
    categoriaSeleccionada.value = categoria;
    imagenes.value = []; // Limpiar las imágenes antes de cargar nuevas
  
    try {
      const response = await fetch(`/data/${categoria.toLowerCase()}.json`);
      if (!response.ok) throw new Error("Error al cargar las imágenes");
  
      imagenes.value = await response.json();
      activeIndex.value = 0;
    } catch (error) {
      console.error("Error:", error);
      imagenes.value = [];
    }
  };
  
  // Funciones para cambiar la imagen activa
  const scrollLeft = () => {
    if (activeIndex.value > 0) {
      activeIndex.value--;
    }
  };
  
  const scrollRight = () => {
    if (activeIndex.value < imagenes.value.length - 1) {
      activeIndex.value++;
    }
  };
  
  // Cargar las imágenes por defecto al montar el componente
  cargarImagenes("Biología");
  </script>
  
  <style scoped>
  .gallery-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;
    padding-top: 60px; /* Deja espacio para el Header */
  }
  
  main {
    flex: 1;
    padding: 20px;
    padding-top: 80px;
  }
  
  .category-buttons {
    margin-bottom: 15px;
  }
  
  .category-buttons button {
    background: #2b3ee9;
    color: white;
    padding: 10px 15px;
    margin: 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  .category-buttons button.active,
  .category-buttons button:hover {
    background: #8B0000;
  }
  
  /* Contenedor de la galería */
  .gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 800px;
    margin: auto;
  }
  
  /* Slider de imágenes */
  .main-image {
    position: relative;
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    border-radius: 10px;
  }
  
  .image-slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide-image {
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 10px;
  }
  
  /* Navegación */
  .image-navigation {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .nav-btn {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .nav-btn:hover {
    background: rgba(255, 255, 255, 0.7);
    color: black;
  }
  
  /* Mensaje si no hay imágenes */
  .no-images {
    font-size: 18px;
    color: red;
    margin-top: 20px;
  }
  
  /* Estilos Responsivos */
  @media (max-width: 768px) {
    .slide-image {
      max-height: 300px;
    }
  
    .nav-btn {
      font-size: 20px;
      padding: 8px;
    }
  
    .category-buttons button {
      padding: 8px 12px;
      margin: 4px;
    }
  }
  
  @media (max-width: 480px) {
    .category-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .category-buttons button {
      width: 100%;
      text-align: center;
    }
  }
  </style>
  