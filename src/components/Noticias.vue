<template>
  <section class="news">
    <h2>📰 Últimas Noticias</h2>

    <div v-if="loading" class="loading">Cargando noticias...</div>
    <div v-else-if="error" class="error">Error al cargar noticias</div>
    
    <div v-else>
      <article v-for="noticia in noticias" :key="noticia.id">
        <h3>{{ noticia.titulo }}</h3>
        <p>{{ noticia.contenido }}</p>
        <small>🕒 {{ noticia.fecha }}</small>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const noticias = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchNoticias = async () => {
  try {
    const response = await fetch('https://tuapi.com/noticias'); // URL temporal
    if (!response.ok) throw new Error('Error al obtener noticias');
    noticias.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchNoticias);
</script>

<style scoped>
.news {
  padding: 20px;
  background: linear-gradient(135deg, #eef2ff, #d1e0ff);
  border-radius: 10px;
  text-align: center;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

article {
  background: white;
  padding: 15px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

article:hover {
  transform: translateY(-5px);
}

.loading, .error {
  font-weight: bold;
  color: #ff5733;
}
</style>
