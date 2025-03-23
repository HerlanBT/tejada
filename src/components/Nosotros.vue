<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <Header />
  <div class="content">
    <div class="table-container animate-fade-in">
      <table class="responsive-table">
        <thead>
          <tr>
            <th colspan="3">Nosotros</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" class="info-row">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus...
              </p>
            </td>
          </tr>
          <tr>
            <td>Nuestro Equipo</td>
            <td>Nuestra Historia</td>
            <td>Nuestra Misión</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet...</td>
            <td>Lorem ipsum dolor sit amet...</td>
            <td>Lorem ipsum dolor sit amet...</td>
          </tr>
        </tbody>
      </table>
      <div class="mobile-content">
        <p><strong>Nuestro Equipo:</strong> Lorem ipsum dolor sit amet...</p>
        <p><strong>Nuestra Historia:</strong> Lorem ipsum dolor sit amet...</p>
        <p><strong>Nuestra Misión:</strong> Lorem ipsum dolor sit amet...</p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 40px 20px;
  background: #f4f7fc;
  font-family: 'Poppins', sans-serif;
}


/* Animación */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

/* Contenedor */
.table-container {
  width: 100%;
  max-width: 1200px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  text-align: center;
}

/* Tabla */
.responsive-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

/* Encabezados */
.responsive-table th {
  background: #007bff;
  color: white;
  font-size: 1.6rem;
  padding: 15px;
  text-transform: uppercase;
}

/* Celdas */
.responsive-table td {
  border: 1px solid #ddd;
  padding: 20px;
  background: #eef2ff;
  font-size: 1.2rem;
}

/* Animación al pasar el mouse */
.responsive-table tr:hover td {
  background: #d0e2ff;
  transition: background 0.3s ease;
}

/* Fila de información destacada */
.info-row {
  background: #cce5ff;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
}

/* Modo móvil */
.mobile-content {
  display: none;
}

@media (max-width: 768px) {
  .table-container {
    padding: 20px;
  }

  .responsive-table {
    display: none;
  }

  .mobile-content {
    display: block;
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .mobile-content {
    font-size: 1rem;
  }
}
</style>
