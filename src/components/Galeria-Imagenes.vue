<template>
    <Header />
    <br>
    <br>
    <main>
        <div class="gallery-wrapper">
            <!-- Botones para seleccionar categorías -->
            <div class="category-buttons">
                <button v-for="categoria in categorias" :key="categoria" @click="cargarImagenes(categoria)"
                    :class="{ active: categoriaSeleccionada === categoria }">
                    {{ categoria }}
                </button>
            </div>

            <!-- Contenedor de la galería -->
            <div v-if="imagenes.length > 0" class="gallery-container">
                <!-- Imagen principal con animación de desplazamiento -->
                <div class="main-image">
                    <div class="image-slider" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
                        <img v-for="(imagen, index) in imagenes" :key="imagen.url" :src="imagen.url" :alt="imagen.alt"
                            class="slide-image" />
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
/* Contenedor general */
.gallery-wrapper {
    position: relative;
    margin: 20px auto;
    max-width: 100%;
    padding: 10px;
}

/* Botones de categorías */
.category-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
}

.category-buttons button {
    padding: 10px 20px;
    margin: 5px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    white-space: nowrap;
}

.category-buttons button.active {
    background-color: #42b883;
    color: white;
}

.category-buttons button:hover {
    background-color: #ddd;
}

/* Estilos de la galería */
.gallery-container {
    position: relative;
    overflow: hidden;
}

.main-image {
    position: relative;
    width: 100%;
}

.image-slider {
    display: flex;
    transition: transform 0.5s ease;
}

.slide-image {
    width: 100%;
    object-fit: cover;
    max-height: 500px;
    /* Ajuste de la altura de las imágenes */
}

/* Navegación */
.image-navigation {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    pointer-events: none;
}

.nav-btn {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
    pointer-events: auto;
}

.nav-btn:hover {
    background: rgba(255, 255, 255, 0.7);
    color: black;
}

/* Estilos responsivos */
@media (max-width: 768px) {
    .category-buttons button {
        font-size: 14px;
        padding: 8px 16px;
        margin: 5px 0;
    }

    .main-image {
        height: auto; /* Ajusta la altura para móviles */
    }

    .image-slider {
        display: block;
        transition: none;
    }

    .image-navigation {
        position: relative;
        top: auto;
        margin-top: 10px;
        justify-content: center;
    }

    .nav-btn {
        font-size: 20px;
        padding: 8px;
    }
}

/* Estilos para pantallas grandes (PC) */
@media (min-width: 769px) {
    .main-image {
        height: 500px;
    }

    .image-navigation {
        position: absolute;
        top: 50%;
        margin-top: 0;
        justify-content: space-between;
    }

    .nav-btn {
        font-size: 24px;
        padding: 10px;
    }
}
</style>
