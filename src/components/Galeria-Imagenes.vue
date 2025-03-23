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
  /* Contenedor de navegación */
  .image-navigation {
    display: flex;
    justify-content: space-between; /* Alinea los botones en los lados */
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    pointer-events: none; /* Evita que bloquee la interacción con la imagen */
  }
  
  /* Botones de navegación */
  .nav-btn {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
    pointer-events: auto; /* Permite hacer clic */
  }
  
  .nav-btn:hover {
    background: rgba(255, 255, 255, 0.7);
    color: black;
  }
  
  /* Estilos responsivos para móviles */
  @media (max-width: 768px) {
    .image-navigation {
      position: relative;
      top: auto;
      width: 100%;
      transform: none;
      justify-content: center; /* Centra los botones debajo de la imagen */
      margin-top: 10px;
    }
  
    .nav-btn {
      font-size: 20px;
      padding: 8px;
      margin: 0 10px;
    }
  }
  </style>
  