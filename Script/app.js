const INTERVALO = 5000;

const imagenes = [
  { url: "img/1.jpg", nombre: "God of War: Ragnarök", descripcion: "Una épica aventura entre dioses y mortales." },
  { url: "img/2.webp", nombre: "Resident Evil 4 Remake", descripcion: "Revive el clásico survival horror en 4K." },
  { url: "img/3.avif", nombre: "Cuphead", descripcion: "Arte clásico y dificultad infernal." },
  { url: "img/4.webp", nombre: "Minecraft", descripcion: "Construye, explora y sobrevive sin límites." },
  { url: "img/5.jpg", nombre: "Assassin’s Creed Valhalla", descripcion: "Conquista Inglaterra como un vikingo." },
  { url: "img/6.jpg", nombre: "The Last of Us Part I", descripcion: "La emoción y el drama hechos videojuego." },
  { url: "img/7.jpeg", nombre: "League of Legends", descripcion: "Domina la Grieta del Invocador." },
  { url: "img/8.jpg", nombre: "FIFA 23", descripcion: "El fútbol más realista jamás creado." },
  { url: "img/9.jpg", nombre: "Bayonetta 3", descripcion: "Brujas, demonios y acción intensa." },
  { url: "img/10.webp", nombre: "Five Nights at Freddy’s", descripcion: "Sobrevive la noche más aterradora." }
];

// Elementos del carrusel
let actual = 0;
const atras = document.getElementById('atras');
const adelante = document.getElementById('adelante');
const imagen = document.getElementById('img');
const texto = document.getElementById('texto');
const puntos = document.getElementById('puntos');

// Render principal del carrusel
function renderCarrusel() {
  imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="${imagenes[actual].nombre}">`;
  texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3><p>${imagenes[actual].descripcion}</p>`;
  puntos.innerHTML = imagenes.map((_, i) => `<p class="${i === actual ? 'bold' : ''}">•</p>`).join('');
}

function siguiente() {
  actual = (actual + 1) % imagenes.length;
  renderCarrusel();
}
function anterior() {
  actual = (actual - 1 + imagenes.length) % imagenes.length;
  renderCarrusel();
}

adelante.onclick = siguiente;
atras.onclick = anterior;
renderCarrusel();

let auto = setInterval(siguiente, INTERVALO);
imagen.onmouseenter = () => clearInterval(auto);
imagen.onmouseleave = () => (auto = setInterval(siguiente, INTERVALO));

// === GENERAR TARJETAS DE LOS JUEGOS ===
const catalogo = document.querySelector('.catalogo-juegos');
imagenes.forEach(j => {
  const card = document.createElement('section');
  card.className = 'steam-card';
  card.innerHTML = `
    <img src="${j.url}" alt="${j.nombre}">
    <h2>${j.nombre}</h2>
    <p>${j.descripcion}</p>
    <ul class="steam-info">
      <li><b>Modo:</b> Un jugador / Multijugador</li>
      <li><b>Género:</b> Acción / Aventura</li>
    </ul>
    <div class="steam-tags"><span>2025</span><span>HD</span><span>Épico</span></div>
  `;
  catalogo.appendChild(card);
});
