<template>
  <div class="contenido-principal">
    <!-- Columna izquierda: Info y redes -->
    <div class="info-redes">
      <h1 class="titulo">UNIDAD EDUCATIVA TEJADA TRIANGULAR</h1>
      <div class="bloque-redes">
        <h2><strong>Nuestras Redes Sociales</strong></h2>
        <div class="redes-sociales">
          <a href="https://www.facebook.com/profile.php?id=61573393153822" target="_blank" class="icono"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/tejadatriangular/" target="_blank" class="icono"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com/@tejadatriangularunidadeducativ?si=9Y611migO1nTM1z2" target="_blank" class="icono"><i class="fab fa-youtube"></i></a>
          <a href="https://www.tiktok.com/@tejadatriangular_colegio?_t=ZM-8umsG7lOgCc&_r=1" target="_blank" class="icono"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
      <div class="logo">
        <img src="/public/LogoTejada.png" alt="Logo" />
      </div>
    </div>

    <!-- Columna derecha: Galería -->
    <div class="gallery-container" :style="{ backgroundImage: `url(${imagenes[activeIndex]?.url})` }">
      <div class="gallery-blur"></div>
      <div class="gallery" ref="gallery">
        <div v-for="(imagen, index) in imagenes" :key="index" class="gallery-item" :class="{ active: index === activeIndex }">
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
import { ref, onMounted } from 'vue';

const imagenes = ref([]);
const activeIndex = ref(0);

const cargarImagenes = async () => {
  try {
    const res = await fetch('/images/inicio/galeria.json');
    imagenes.value = await res.json();
  } catch (e) {
    console.error('Error al cargar imágenes:', e);
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
/* Contenedor general */
.contenido-principal {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 40px;
  gap: 30px;
}

/* Columna de texto y redes */
.info-redes {
  display: block;
  justify-content: center;
  
  max-width: 350px;
  padding: 10px;
}

.titulo {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 15px;
  color: #ffffff;
  background-color: #4c00ff;
  border-radius:12px ;
}
.logo{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.logo img {
  max-width: 250px; /* o el tamaño que prefieras */
  width: 100%;
  height: auto;
}
.bloque-redes {
  background-color: pink;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.bloque-redes:hover {
  background-color: #87cefa;
}

.bloque-redes h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icono {
  color: #010157;
  font-size: 2rem;
  transition: transform 0.3s ease;
}

.icono:hover {
  transform: scale(1.2);
  color: red;
}

/* Columna de galería */
.gallery-container {
  flex: 1 1 65%;
  position: relative;
  height: 600px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.gallery {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.gallery-item {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.gallery-item.active {
  opacity: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Botones navegación */
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
  padding: 10px;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Desenfoque galería */
.gallery-blur {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

/* Responsive */
@media (max-width: 768px) {
.contenido-principal{
  justify-content: center;
  display: block;
}
}

@media (max-width: 500px) {
  .gallery-container {
    height: 300px;
  }

  .nav-btn {
    font-size: 18px;
    padding: 6px;
  }
}
.gallery-item {
  z-index: 3;
}

.gallery-blur {
  z-index: 1;
}

</style>
