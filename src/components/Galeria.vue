<template>
  <Header />
  <section class="galeria">
    <h2>📹 Videos de {{ categoria }}</h2>

    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      Cargando videos...
    </div>

    <div v-else-if="error" class="error">⚠️ Error al cargar los videos</div>

    <div v-else class="video-grid">
  <div v-for="video in videos" :key="video.id" class="video-item">
    <h3 class="video-title">{{ video.titulo }}</h3>
    
    <!-- Si el video tiene iframe, renderizarlo con v-html -->
    <div v-if="video.iframe" class="iframe-container" v-html="video.iframe"></div>
    
    <!-- Si el video tiene una URL (mp4, por ejemplo), mostrar con etiqueta <video> -->
    <video v-else-if="video.url" controls class="video-player">
      <source :src="video.url" type="video/mp4">
      Tu navegador no soporta el elemento de video.
    </video>
  </div>
</div>

  </section>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

const route = useRoute();
const categoria = ref(route.params.categoria);
const videos = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchVideos = async () => {
  try {
    const response = await fetch(`/videos/${categoria.value}.json`);
    alert(categoria.value);
    if (!response.ok) throw new Error("Error al obtener videos");
    videos.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchVideos);
</script>

<style scoped>
.galeria {
  font-family: 'Poppins', sans-serif;
  padding: 30px;
  text-align: center;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: auto;
}
h2, .video-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #222;
}
h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  color: #222;
  margin-bottom: 20px;
  font-weight: bold;
}
.video-player {
  width: 560px;
  height: 429px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 10px;
}

.video-item {
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-item:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.video-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
}

.iframe-container {
  width: 560px;
  height: 429px;
  overflow: hidden;
}

.iframe-container iframe {
  width: 560px;
  height: 429px;
  border: none;
}

.loading {
  font-size: 18px;
  color: #ff5733;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 4px solid #ff5733;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error {
  font-size: 18px;
  font-weight: bold;
  color: #d9534f;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
