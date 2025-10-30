<template>
    <Header />
    <main class="container">
        <h1>📚 Monografías 2025</h1>

        <div class="grid">
            <div v-for="pdf in pdfs" :key="pdf" class="card">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="icon-svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 20h9M3 20h9m-9 0a2 2 0 012-2h12a2 2 0 012 2V8a2 2 0 00-2-2h-3.5a2 2 0 01-1.6-.8L12 2H5a2 2 0 00-2 2v16z" />
                    </svg>
                </div>

                <h2>{{ limpiarNombre(pdf) }}</h2>

            <RouterLink
  class="button"
  :to="{ path: '/visor', query: { file: pdf } }"
>
  Ver PDF
</RouterLink>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const archivos = import.meta.glob('../pdf/monografias-2025/*.pdf', { eager: true })
const pdfs = Object.keys(archivos).map(path => path.split('/').pop())

const limpiarNombre = (nombre) => {
    return nombre
        .replace(/monografias-2025-/i, '')
        .replace(/\.pdf$/i, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    background: linear-gradient(to bottom, #eef4ff, #ffffff);
    padding: 2rem 1rem;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, sans-serif;
}

h1 {
    color: #1e3a8a;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
}

/* GRID */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.2rem;
    max-width: 1100px;
    margin: 0 auto;
}

/* CARD */
.card {
    background: white;
    border-radius: 1.2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* ICON */
.icon {
    background: #dbeafe;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.icon-svg {
    width: 32px;
    height: 32px;
    color: #2563eb;
}

/* TEXT */
h2 {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin: 0.5rem 0;
    word-wrap: break-word;
    max-width: 90%;
}

/* BUTTON */
.button {
    margin-top: 0.8rem;
    display: inline-block;
    background: #2563eb;
    color: white;
    font-weight: 500;
    text-decoration: none;
    padding: 0.4rem 1rem;
    border-radius: 0.6rem;
    transition: background 0.3s;
}

.button:hover {
    background: #1d4ed8;
}
</style>
