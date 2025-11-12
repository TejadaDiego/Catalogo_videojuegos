// 🟣 Normalizador para evitar errores con acentos o mayúsculas
function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .toLowerCase()
    .trim();
}

// 🔹 Datos de todos los juegos
const data = {
  "god of war: ragnarok": {
    logo: "imagenes/logokratos.png",
    fondo: "imagenes/kratosfondo.jpg",
    consejos: [
      {
        titulo: "Defensa y contraataque: timing perfecto",
        texto:
          "Bloquea justo antes del impacto (L1). Si lo haces bien, verás un destello dorado y el enemigo quedará aturdido.",
        imagen: "imagenes/kratosescudo.jpg"
      },
      {
        titulo: "Ataques elementales",
        texto:
          "Usa el hacha Leviatán para ataques de hielo o las Espadas del Caos para fuego. Alterna según la debilidad enemiga.",
        imagen: "imagenes/kratoselemental.jpg"
      }
    ]
  },

  "resident evil 4 remake": {
    logo: "imagenes/logoresi.png",
    fondo: "imagenes/fondore.jpg",
    consejos: [
      {
        titulo: "Dispara, patea, remata",
        texto:
          "Apunta a la cabeza y patea cuando el enemigo se tambalee. Luego remátalo con el cuchillo.",
        imagen: "imagenes/disparo.webp"
      },
      {
        titulo: "Inventario eficiente",
        texto:
          "Organiza tus objetos en el maletín y combina pólvoras para fabricar munición.",
        imagen: "imagenes/inventario.png"
      }
    ]
  },

  "cuphead": {
    logo: "imagenes/logocup.png",
    fondo: "imagenes/fondocup.jpg",
    consejos: [
      {
        titulo: "Domina el Parry",
        texto:
          "Salta y presiona A nuevamente sobre objetos rosas para recargar energía y evitar daño.",
        imagen: "imagenes/parry.webp"
      },
      {
        titulo: "Elige bien tus armas",
        texto:
          "Cambia entre disparos según el jefe: Chaser para distancia y Spread para corto alcance.",
        imagen: "imagenes/cup2.jpg"
      }
    ]
  },

  "minecraft": {
    logo: "imagenes/miencraftlogo.png",
    fondo: "imagenes/minelogo.jpg",
    consejos: [
      {
        titulo: "Domina el crafteo",
        texto:
          "Aprende combinaciones básicas: madera → tabla → palos → herramientas.",
        imagen: "imagenes/craft.jpg"
      },
      {
        titulo: "Elige tus encantamientos",
        texto:
          "Eficiencia y Toque de Seda para pico; Reparación e Irrompibilidad para objetos valiosos.",
        imagen: "imagenes/encant.jpg"
      }
    ]
  },

  "assassin's creed valhalla": {
    logo: "imagenes/aslogo.jpg",
    fondo: "imagenes/asfondo.jpg",
    consejos: [
      {
        titulo: "Usa el sigilo",
        texto:
          "Activa 'Asesinato avanzado' para eliminar enemigos de un golpe con el timing correcto.",
        imagen: "imagenes/shh.jpg"
      },
      {
        titulo: "Mejora tu asentamiento",
        texto:
          "Completa incursiones para obtener suministros y desbloquear nuevas misiones y armas.",
        imagen: "imagenes/asentamiento.jpg"
      }
    ]
  },

  "the last of us part i": {
    logo: "imagenes/logotlou.png",
    fondo: "imagenes/fondotlou.jpg",
    consejos: [
      {
        titulo: "Sigilo primero",
        texto:
          "Presiona R1 para escuchar pasos y elimina en silencio con Triángulo.",
        imagen: "imagenes/tloustealth.jpg"
      },
      {
        titulo: "Crafteo estratégico",
        texto:
          "Guarda materiales clave para decidir entre cócteles o botiquines.",
        imagen: "imagenes/tloucraft.jpg"
      }
    ]
  },

  "league of legends": {
    logo: "imagenes/lol.png",
    fondo: "imagenes/fondolol.jpg",
    consejos: [
      {
        titulo: "Farmea sin morir",
        texto:
          "Concéntrate en el último golpe y usa wards para visión. Evita sobreextenderte.",
        imagen: "imagenes/farm.jpg"
      },
      {
        titulo: "Aprende tu rol",
        texto:
          "Cada rol tiene su función: top aguanta, jungla controla, mid daña, bot coopera.",
        imagen: "imagenes/roles.jpg"
      }
    ]
  },

  "fifa 23": {
    logo: "imagenes/fifalogo.png",
    fondo: "imagenes/fifafondo.jpg",
    consejos: [
      {
        titulo: "Tiros potentes",
        texto:
          "Mantén L1 + R1 mientras disparas para un tiro controlado y preciso.",
        imagen: "imagenes/fifashot.jpg"
      },
      {
        titulo: "Defensa manual",
        texto:
          "Usa L2 para jockey y X solo al estar cerca del rival. Evita barridas innecesarias.",
        imagen: "imagenes/defensa.jpg"
      }
    ]
  },

  "bayonetta 3": {
    logo: "imagenes/bayo.png",
    fondo: "imagenes/fondobayo.jpg",
    consejos: [
      {
        titulo: "Witch Time perfecto",
        texto:
          "Esquiva justo antes del golpe enemigo para ralentizar el tiempo y castigar con combos.",
        imagen: "imagenes/witchtime.jpg"
      },
      {
        titulo: "Usa demonios infernales",
        texto:
          "Mantén ZL para invocar demonios gigantes, pero cuida tu vulnerabilidad.",
        imagen: "imagenes/demon.jpg"
      }
    ]
  },

  "five nights at freddy's": {
    logo: "imagenes/fnaf.png",
    // ✅ Cambiamos fondo a URL funcional si tu archivo local falla
    fondo: "https://upload.wikimedia.org/wikipedia/en/3/3d/Five_Nights_at_Freddy%27s_cover_art.jpg",
    consejos: [
      {
        titulo: "Ahorra energía",
        texto:
          "Las puertas consumen batería. Úsalas solo cuando haya peligro real.",
        imagen: "imagenes/power.jpg"
      },
      {
        titulo: "Escucha los sonidos",
        texto:
          "Freddy y Foxy hacen ruidos antes de moverse. Usa audífonos y reacciona rápido.",
        imagen: "imagenes/sonido.jpg"
      }
    ]
  }
};

// 🟣 Cargar juego seleccionado
const selectedGame = JSON.parse(localStorage.getItem("selectedGame"));

// Si no se seleccionó ningún juego, redirigir
if (!selectedGame) {
  console.warn("No se seleccionó ningún juego. Redirigiendo al catálogo...");
  window.location.href = "P-Principal.html";
}

// Normalizar nombre del juego
const nombreNormalizado = normalizarTexto(selectedGame.nombre);

// Buscar el juego en el objeto `data`
const clave = Object.keys(data).find(
  (k) => normalizarTexto(k) === nombreNormalizado
);

if (!clave) {
  console.error("Juego no encontrado:", selectedGame);
  document.getElementById("consejosContainer").innerHTML =
    "<p style='color:white;text-align:center;font-size:1.2rem;'>Juego no encontrado. Regresa al catálogo.</p>";
} else {
  const juego = data[clave];

  // Aplicar fondo dinámico
  document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${juego.fondo})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  // Mostrar logo y título
  document.getElementById("logoJuego").src = juego.logo;
  document.getElementById("gameTitle").textContent = clave;

  // Contenedor de consejos
  const contenedor = document.getElementById("consejosContainer");
  contenedor.innerHTML = "";

  // Renderizar consejos
  juego.consejos.forEach((c) => {
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
}
