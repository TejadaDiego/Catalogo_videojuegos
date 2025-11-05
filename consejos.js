// 🔹 Datos de todos los juegos (puedes agregar más)
const data = {
  "god of war: ragnarok": {
    logo: "imagenes/logokratos.png",
    fondo: "imagenes/kratosfondo.jpg",
    consejos: [
      {
        titulo: "Domina el combate cuerpo a cuerpo",
        texto: "Usa los combos del hacha Leviatán y las cuchillas del caos según el tipo de enemigo para maximizar el daño.",
        imagen: "imagenes/kratosescudo.jpg"
      },
      {
        titulo: "Explora todo Midgard",
        texto: "Hay muchos cofres ocultos y desafíos que te darán materiales para mejorar tus armas y armaduras.",
        imagen: "imagenes/kratos2.jpg"
      },
      {
        titulo: "Aprovecha los parrys",
        texto: "Bloquear en el momento justo puede salvarte de recibir grandes cantidades de daño.",
        imagen: "imagenes/kratos3.jpg"
      }
    ]
  },

  "dead space": {
    logo: "imagenes/logodeadspace.png",
    fondo: "imagenes/fondodeadspace.jpg",
    consejos: [
      {
        titulo: "Apunta a las extremidades, no a la cabeza.",
        texto: "Los necromorfos solo mueren si les cortas las extremidades. Dispara a brazos y piernas para detenerlos más rápido.",
        imagen: "imagenes/deadspace1.jpg"
      },
      {
        titulo: "Ahorra munición.",
        texto: "Cada bala cuenta. Si un enemigo está en el suelo, remátalo con pisotones para no gastar balas.",
        imagen: "imagenes/deadspace2.jpg"
      },
      {
        titulo: "Escucha los sonidos.",
        texto: "El audio te avisa de enemigos antes de verlos. Usa auriculares para una experiencia más inmersiva.",
        imagen: "imagenes/deadspace3.jpg"
      }
    ]
  }
};

// 🔸 Selecciona el juego que quieras mostrar
const juegoActual = "god of war: ragnarok"; // cambia aquí por "dead space" u otro

// 🔸 Aplica los datos al HTML
const juego = data[juegoActual];
document.body.style.backgroundImage = `url(${juego.fondo})`;
document.getElementById("logoJuego").src = juego.logo;
document.getElementById("gameTitle").textContent = juegoActual;

// 🔸 Contenedor principal
const contenedor = document.getElementById("consejosContainer");
contenedor.innerHTML = ""; // limpia antes de agregar

juego.consejos.forEach(c => {
  const bloque = document.createElement("div");
  bloque.classList.add("consejo-bloque");

  bloque.innerHTML = `
    <img src="${c.imagen}" alt="Imagen del consejo">
    <div class="texto">
      <h2>${c.titulo}</h2>
      <p>${c.texto}</p>
    </div>
  `;

  contenedor.appendChild(bloque);
});
