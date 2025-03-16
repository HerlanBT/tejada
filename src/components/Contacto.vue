<template>
  <section class="location">
    <h2>📍 ¡Estamos Aquí!</h2>

    <p class="highlight">Calle 10 s/n Zona Villa Tejada Triangular La Paz, Bolivia</p>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.2585783313617!2d-68.16036712351787!3d-16.524365256985522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf716fc54fc1%3A0xe88d61d47721baad!2sUnidad%20Educativa%20Tejada%20Triangular!5e0!3m2!1ses-419!2sbo!4v1741923494882!5m2!1ses-419!2sbo"
        class="responsive-map"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.location {
  padding: 20px;
  background: linear-gradient(135deg, #4A90E2, #56CCF2);
  border-radius: 12px;
  text-align: center;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 26px;
  margin-bottom: 10px;
}

.highlight {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.map-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.responsive-map {
  width: 100%;
  max-width: 800px;
  height: 400px;
  border-radius: 12px;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

/* 📱 Ajustes para móviles */
@media (max-width: 768px) {
  .responsive-map {
      height: 300px;
  }
}

@media (max-width: 480px) {
  h2 {
      font-size: 22px;
  }
  .highlight {
      font-size: 16px;
  }
  .responsive-map {
      height: 250px;
  }
}
</style>
