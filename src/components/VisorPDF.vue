<template>
  <Header />

  <div class="visor-container">
    <div class="top-bar">
      <button class="back-btn" @click="volver">← Volver a monografías</button>
    </div>

    <iframe
      v-if="pdfUrl"
      :src="pdfUrl"
      class="pdf-frame"
      title="Visor PDF"
    ></iframe>

    <div v-else class="loading-text">Cargando documento...</div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './Header.vue'
import Footer from './Footer.vue'

const route = useRoute()
const router = useRouter()
const pdfUrl = ref('')

const volver = () => router.back()

onMounted(() => {
  const fileName = route.query.file
  if (!fileName) {
    alert('No se especificó ningún PDF.')
    return
  }

  // ✅ Ruta correcta a tu carpeta /public/pdf/
  pdfUrl.value = `/pdf/monografias-2025/${fileName}#toolbar=0&navpanes=0&scrollbar=0`
})
</script>

<style scoped>
.visor-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9fafb;
  min-height: 100vh;
  padding: 6rem 1rem 2rem;
}

/* 🔹 Barra superior */
.top-bar {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

/* 🔹 Botón volver */
.back-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back-btn:hover {
  background: #1e40af;
}

/* 🔹 PDF responsive */
.pdf-frame {
  width: 100%;
  max-width: 1000px;
  height: 90vh;
  border: none;
  border-radius: 0.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 🔹 Texto de carga */
.loading-text {
  font-size: 1rem;
  color: #555;
  margin-top: 2rem;
}

/* 🔹 Responsive */
@media (max-width: 768px) {
  .pdf-frame {
    height: 80vh;
  }
}
</style>
