<template class="content">
  <div class="table-container">
    <table class="responsive-table">
      <thead>
        <tr>
          <th colspan="3">Nosotros</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="3" class="info-row">
            <p>Nuestro colegio es una institución educativa con más de 20 años de experiencia en la formación de jóvenes.</p>
          </td>
        </tr>
        <tr>
          <td data-label="Nuestro Equipo">Nuestro Equipo</td>
          <td data-label="Nuestra Historia">Nuestra Historia</td>
          <td data-label="Nuestra Misión">Nuestra Misión</td>
        </tr>
        <tr>
          <td data-label="Nuestro Equipo">
            Contamos con un equipo altamente capacitado y comprometido con la excelencia.
          </td>
          <td data-label="Nuestra Historia">
            Desde nuestros inicios, hemos trabajado con pasión y determinación.
          </td>
          <td data-label="Nuestra Misión">
            Buscamos brindar soluciones innovadoras y de alta calidad.
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Contenido en formato de columna para pantallas pequeñas -->
    <div class="mobile-content">
      <p><strong>Nuestro colegio</strong>: Una institución educativa con más de 20 años de experiencia en la formación de jóvenes.</p>
      <p><strong>Nuestro Equipo</strong>: Contamos con un equipo altamente capacitado y comprometido con la excelencia.</p>
      <p><strong>Nuestra Historia</strong>: Desde nuestros inicios, hemos trabajado con pasión y determinación.</p>
      <p><strong>Nuestra Misión</strong>: Buscamos brindar soluciones innovadoras y de alta calidad.</p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos generales */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background: #f4f7fc;
}

/* Contenedor de la tabla */
.table-container {
  width: 100%;
  max-width: 1400px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
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
  font-size: 1.5rem;
  padding: 20px;
  text-transform: uppercase;
}

/* Celdas */
.responsive-table td {
  border: 1px solid #ddd;
  padding: 18px;
  background: #eef2ff;
  font-size: 1.125rem;
}

/* Hover */
.responsive-table tr:hover td {
  background: #d0e2ff;
  transition: background 0.3s ease;
}

/* Fila con información destacada */
.info-row {
  background: #cce5ff;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
}

/* Estilos para el contenido móvil (sin tabla) */
.mobile-content {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .table-container {
    width: 100%;
    padding: 10px;
  }

  /* Oculta la tabla en pantallas pequeñas */
  .responsive-table {
    display: none;
  }

  /* Muestra el contenido en columna para pantallas pequeñas */
  .mobile-content {
    display: block;
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  /* En pantallas más pequeñas, ajustar aún más el tamaño de la fuente */
  .mobile-content {
    font-size: 1rem;
  }
}
</style>
