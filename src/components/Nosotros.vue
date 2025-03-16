<template class="content">
  <section class="about">
    <h2>Nosotros</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, vehicula pulvinar malesuada massa hendrerit
      quis parturient, primis sociis ligula sollicitudin mattis rhoncus luctus. Dignissim sapien in malesuada platea
      montes neque curabitur sociis facilisis varius, pellentesque non at feugiat fringilla maecenas posuere justo
      egestas, purus ligula vivamus nascetur arcu auctor aliquam potenti sodales. Placerat mus leo orci massa inceptos
      lobortis neque iaculis bibendum, egestas velit fames pharetra suscipit a fusce primis blandit, curabitur eleifend
      urna senectus turpis taciti purus ultricies. Tempor volutpat sollicitudin nunc imperdiet sapien maecenas fermentum
      dui, hendrerit platea metus purus eu arcu elementum, torquent quam fusce tortor rhoncus parturient potenti.</p>
  </section>
  <section class="about">
    <h2>Nuestra Historia</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, vehicula pulvinar malesuada massa hendrerit
      quis parturient, primis sociis ligula sollicitudin mattis rhoncus luctus. Dignissim sapien in malesuada platea
      montes neque curabitur sociis facilisis varius, pellentesque non at feugiat fringilla maecenas posuere justo
      egestas, purus ligula vivamus nascetur arcu auctor aliquam potenti sodales. Placerat mus leo orci massa inceptos
      lobortis neque iaculis bibendum, egestas velit fames pharetra suscipit a fusce primis blandit, curabitur eleifend
      urna senectus turpis taciti purus ultricies. Tempor volutpat sollicitudin nunc imperdiet sapien maecenas fermentum
      dui, hendrerit platea metus purus eu arcu elementum, torquent quam fusce tortor rhoncus parturient potenti..</p>
  </section>
  <section class="about">
    <h2>Nuestro Equipo</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, vehicula pulvinar malesuada massa hendrerit
      quis parturient, primis sociis ligula sollicitudin mattis rhoncus luctus. Dignissim sapien in malesuada platea
      montes neque curabitur sociis facilisis varius, pellentesque non at feugiat fringilla maecenas posuere justo
      egestas, purus ligula vivamus nascetur arcu auctor aliquam potenti sodales. Placerat mus leo orci massa inceptos
      lobortis neque iaculis bibendum, egestas velit fames pharetra suscipit a fusce primis blandit, curabitur eleifend
      urna senectus turpis taciti purus ultricies. Tempor volutpat sollicitudin nunc imperdiet sapien maecenas fermentum
      dui, hendrerit platea metus purus eu arcu elementum, torquent quam fusce tortor rhoncus parturient potenti.</p>
    <p>
      Praesent justo aptent vitae molestie facilisi varius ligula aenean sed dignissim, penatibus orci senectus semper
      libero integer natoque himenaeos tincidunt, non est euismod a vulputate aliquet arcu lacus enim. Pellentesque
      sagittis nec conubia potenti mi velit vulputate ridiculus, torquent eleifend scelerisque id feugiat magnis mus.
      Consequat tellus mollis aliquam nibh curae vestibulum curabitur, etiam suscipit mus suspendisse leo viverra
      pretium, erat potenti arcu enim risus sagittis natoque, lobortis pellentesque a libero cursus sociis. Est fames
      magna turpis malesuada purus velit consequat tincidunt inceptos rhoncus egestas justo orci, duis augue natoque ut
      maecenas cursus sed leo sagittis placerat metus integer.</p>
  </section>
  <section class="about">
    <h2>Nuestros Valores</h2>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur, adipiscing elit eleifend.</li>
      <li>Posuere odio ante fermentum, arcu semper torquent nullam, tristique luctus.</li>
      <li>Leo orci fringilla cubilia viverra, quisque nibh fermentum.</li>
      <li>Litora ligula ante duis gravida, elementum velit consequat.</li>
    </ul>
  </section>
</template>

<style scoped>
.about {
  padding: 20px;
  background: #eef2ff;
  border-radius: 10px;
  margin-bottom: 20px;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
  text-align: left;
  /* Alineación a la izquierda en pantallas grandes */
}

.about p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555;
}

.about ul {
  list-style-type: disc;
  margin-left: 20px;
}

.about ul li {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555;
}

/* Responsivo */
@media (max-width: 768px) {
  .about h2 {
    font-size: 1.75rem;
    text-align: center;
    /* Centrar el título en pantallas medianas */
  }

  .about p,
  .about ul li {
    font-size: 1rem;
  }

  .about {
    padding: 15px;
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .about h2 {
    font-size: 1.5rem;
    text-align: center;
    /* Centrar el título en pantallas pequeñas */
  }

  .about p,
  .about ul li {
    font-size: 0.875rem;
  }

  .about {
    padding: 10px;
  }
}
</style>
