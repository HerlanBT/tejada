<template>
  <section class="advertisements">
    <h2>📢 Anuncios</h2>

    <!-- Formulario para subir anuncio -->
    <form @submit.prevent="subirAnuncio">
      <input type="text" v-model="nuevoAnuncio.titulo" placeholder="Título del anuncio" required />
      <input type="file" @change="handleFileChange" accept="image/*" required />
      
      <!-- Previsualización de la imagen -->
      <div v-if="nuevoAnuncio.preview" class="preview-container">
        <img :src="nuevoAnuncio.preview" alt="Previsualización" class="preview-image" />
      </div>

      <button type="submit" :disabled="subiendo">Publicar Anuncio</button>
    </form>

    <div v-if="loading" class="loading">Cargando anuncios...</div>
    <div v-else-if="error" class="error">Error al cargar anuncios</div>

    <div v-else>
      <div v-for="anuncio in anuncios" :key="anuncio.id" class="ad-banner">
        <img :src="anuncio.imagen" :alt="anuncio.titulo" v-if="anuncio.imagen" />
        <span v-else>{{ anuncio.titulo }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const anuncios = ref([]);
const loading = ref(true);
const error = ref(null);
const subiendo = ref(false);

const nuevoAnuncio = ref({
  titulo: '',
  imagen: null,
  preview: null
});

const fetchAnuncios = async () => {
  try {
    const response = await fetch('https://tuapi.com/anuncios');
    if (!response.ok) throw new Error('Error al obtener anuncios');
    anuncios.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    nuevoAnuncio.value.imagen = file;

    // Crear una previsualización de la imagen
    const reader = new FileReader();
    reader.onload = (e) => {
      nuevoAnuncio.value.preview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const subirAnuncio = async () => {
  if (!nuevoAnuncio.value.imagen || !nuevoAnuncio.value.titulo) {
    alert('Por favor, selecciona una imagen y un título.');
    return;
  }

  subiendo.value = true;

  const formData = new FormData();
  formData.append('titulo', nuevoAnuncio.value.titulo);
  formData.append('imagen', nuevoAnuncio.value.imagen); // Archivo de imagen

  try {
    const response = await fetch('https://tuapi.com/anuncios', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) throw new Error('Error al subir anuncio');

    // Actualizar lista de anuncios (puedes recargar desde la API)
    fetchAnuncios();

    // Limpiar formulario
    nuevoAnuncio.value = { titulo: '', imagen: null, preview: null };
  } catch (err) {
    console.error(err);
  } finally {
    subiendo.value = false;
  }
};

onMounted(fetchAnuncios);
</script>

<style scoped>
.advertisements {
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
  gap: 10px;
  margin-bottom: 20px;
  padding: 15px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s ease-in-out;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

/* Botón */
button {
  background: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

button:hover:enabled {
  background: #0056b3;
}

/* Previsualización de imagen */
.preview-container {
  margin-top: 10px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f1f1f1;
}

.preview-image {
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

/* Cargando / Error */
.loading, .error {
  font-weight: bold;
  margin: 10px 0;
}

.loading {
  color: #007bff;
}

.error {
  color: red;
}

/* Contenedor de anuncios */
.ad-banner {
  margin-top: 15px;
  width: 100%;
  max-width: 400px;
  height: 200px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 0 auto 15px;
}

.ad-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ad-banner span {
  font-size: 18px;
  font-weight: bold;
  color: #555;
}
</style>
