<template>
  <section class="news">
    <h2>📰 Últimas Noticias</h2>

    <!-- Formulario para subir noticia -->
    <form @submit.prevent="subirNoticia">
      <input v-model="nuevaNoticia.titulo" placeholder="Título de la noticia" required />
      <textarea v-model="nuevaNoticia.contenido" placeholder="Contenido de la noticia" required></textarea>
      <input type="file" @change="handleFileChange" placeholder="Imagen de la noticia" />
      <!-- Previsualización de la imagen cargada -->
      <div v-if="nuevaNoticia.imagen" class="preview-container">
        <img :src="nuevaNoticia.imagen" alt="Vista previa de la imagen" class="preview-image">
      </div>
      <button type="submit">Publicar Noticia</button>
    </form>

    <div v-if="loading" class="loading">Cargando noticias...</div>
    <div v-else-if="error" class="error">Error al cargar noticias</div>

    <div v-else>
      <article v-for="noticia in noticias" :key="noticia.id">
        <h3>{{ noticia.titulo }}</h3>
        <p>{{ noticia.contenido }}</p>
        <img v-if="noticia.imagen" :src="noticia.imagen" alt="Imagen de la noticia" />
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

const nuevaNoticia = ref({ titulo: '', contenido: '', imagen: '' });

const fetchNoticias = async () => {
  try {
    const response = await fetch('https://tuapi.com/noticias');
    if (!response.ok) throw new Error('Error al obtener noticias');
    noticias.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      nuevaNoticia.value.imagen = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const subirNoticia = async () => {
  try {
    const response = await fetch('https://tuapi.com/noticias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaNoticia.value),
    });
    if (!response.ok) throw new Error('Error al subir noticia');

    noticias.value.push(nuevaNoticia.value); // Actualiza la lista localmente
    nuevaNoticia.value = { titulo: '', contenido: '', imagen: '' }; // Limpia el formulario
  } catch (err) {
    console.error(err);
  }
};

onMounted(fetchNoticias);
</script>

<style scoped>
.news {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
}

/* Formulario */
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  align-items: center;
}

input,
textarea {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s ease-in-out;
}

textarea {
  height: 100px;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

/* Botón */
button {
  background: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

button:hover {
  background: #0056b3;
}

/* Previsualización de Imagen */
.preview-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-image {
  max-width: 300px;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

/* Cargando / Error */
.loading,
.error {
  font-weight: bold;
  margin: 10px 0;
}

.loading {
  color: #007bff;
}

.error {
  color: red;
}

/* Noticias */
article {
  background: white;
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

article h3 {
  color: #333;
  font-size: 20px;
  margin-bottom: 5px;
}

article p {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

article small {
  color: #777;
  font-size: 14px;
}

/* Imagen en Noticias */
article img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
