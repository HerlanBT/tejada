<template>
  <section class="advertisements">
    <h2>🎉 Eventos</h2>
    <div class="event-slider">
      <div class="event-buttons">
        <div v-for="evento in eventos" :key="evento.id" class="event-card">
          <div class="image-container">
            <a @click="irAGaleria(evento.id)">
              <img :src="evento.imagen" :alt="evento.nombre" />
              {{ evento.nombre }}
            </a>
            <button @click="irAGaleria(evento.id)">{{ evento.nombre }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const eventos = ref([]);

const cargarEventos = async () => {
  try {
    const response = await fetch('/eventos/eventos.json');
    eventos.value = await response.json();
  } catch (error) {
    console.error('Error al cargar eventos:', error);
  }
};

onMounted(cargarEventos);

const irAGaleria = (eventoId) => {
  router.push(`/galeria/${eventoId}`);
};
</script>

<style scoped>
.advertisements {
  padding: 20px;
  background: linear-gradient(135deg, #f8f8f8, #e6e6e6);
  border-radius: 10px;
  text-align: center;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

/* Contenedor con scroll lateral */
.event-slider {
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  scroll-snap-type: x mandatory;
}

.event-buttons {
  display: flex;
  gap: 20px;
}

/* Cada evento ocupa un espacio fijo */
.event-card {
  flex: 0 0 auto;
  scroll-snap-align: center;
  text-align: center;
}

/* Contenedor de la imagen */
.image-container {
  position: relative;
  width: 100%;
  max-width: 650px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 auto;
}

/* Ajuste de la imagen */
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Estilo del botón */
.image-container button {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  background: rgba(0, 123, 255, 0.8);
  color: white;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
}

.image-container button:hover {
  background: rgba(0, 86, 179, 0.9);
}

/* Personalización del scrollbar */
.event-slider::-webkit-scrollbar {
  height: 10px;
}

.event-slider::-webkit-scrollbar-thumb {
  background: #007bff;
  border-radius: 5px;
}

/* Responsive */
@media (max-width: 768px) {
  h2 {
    font-size: 20px;
  }

  .event-buttons {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    max-width: 100%;
    height: 250px; /* Ajustar altura en pantallas más pequeñas */
  }

  .image-container button {
    font-size: 16px;
    padding: 8px 15px;
  }
}

@media (max-width: 480px) {
  .event-slider {
    padding: 5px;
  }

  .event-card {
    margin-bottom: 15px;
  }

  .image-container {
    height: 200px; /* Aún más pequeña en dispositivos más pequeños */
  }
}
</style>
