const games = [
  { nombre: "God of War: Ragnarök", genero: "Acción", plataforma: "PlayStation", imagen: "https://i.imgur.com/fLUGXgC.jpg" },
  { nombre: "Resident Evil 4 Remake", genero: "Terror", plataforma: "Multiplataforma", imagen: "https://i.imgur.com/YqQ6dPp.jpg" },
  { nombre: "Cuphead", genero: "Plataformas", plataforma: "PC / Xbox", imagen: "https://i.imgur.com/SsY0L4Z.jpg" },
  { nombre: "Minecraft", genero: "Estrategia", plataforma: "Multiplataforma", imagen: "https://i.imgur.com/ywY3cHk.jpg" },
  { nombre: "Assassin’s Creed Valhalla", genero: "Aventura", plataforma: "Multiplataforma", imagen: "https://i.imgur.com/nz8kGkT.jpg" },
  { nombre: "The Last of Us Part I", genero: "Aventura", plataforma: "PlayStation", imagen: "https://i.imgur.com/d48oG1W.jpg" },
  { nombre: "League of Legends", genero: "Estrategia", plataforma: "PC", imagen: "https://i.imgur.com/0p4yLzk.jpg" },
  { nombre: "FIFA 23", genero: "Deportes", plataforma: "Multiplataforma", imagen: "https://i.imgur.com/suZxblb.jpg" },
  { nombre: "Bayonetta 3", genero: "Acción", plataforma: "Nintendo Switch", imagen: "https://i.imgur.com/9uh9F9B.jpg" },
  { nombre: "Five Nights at Freddy’s", genero: "Terror", plataforma: "PC / Consolas", imagen: "https://i.imgur.com/VrR2hwK.jpg" }
];

const catalog = document.getElementById('gameCatalog');
const filterGenre = document.getElementById('filterGenre');
const sortOrder = document.getElementById('sortOrder');

function mostrarJuegos(lista) {
  catalog.innerHTML = '';
  lista.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');
    card.innerHTML = `
      <img src="${game.imagen}" alt="${game.nombre}">
      <div class="game-info">
        <h3>${game.nombre}</h3>
        <p>${game.genero} | ${game.plataforma}</p>
      </div>
    `;

    // 👉 Cuando se hace clic, se guarda la info y se redirige
    card.addEventListener('click', () => {
      localStorage.setItem('selectedGame', JSON.stringify(game));
      window.location.href = 'consejos.html';
    });

    catalog.appendChild(card);
  });
}

function filtrarYOrdenar() {
  let lista = [...games];
  const genero = filterGenre.value;
  const orden = sortOrder.value;

  if (genero !== 'all') {
    lista = lista.filter(g => g.genero === genero);
  }

  lista.sort((a, b) => {
    if (orden === 'az') return a.nombre.localeCompare(b.nombre);
    else return b.nombre.localeCompare(a.nombre);
  });

  mostrarJuegos(lista);
}

filterGenre.addEventListener('change', filtrarYOrdenar);
sortOrder.addEventListener('change', filtrarYOrdenar);

mostrarJuegos(games);
