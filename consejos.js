// 🟣 Normalizador para evitar errores con acentos o mayúsculas
function normalizarTexto(texto) {
  return texto
    .normalize("NFD") // separa los acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
    .replace(/[’']/g, "'") // normaliza comillas raras
    .toLowerCase()
    .trim();
}

// 🔹 Datos de todos los juegos (puedes agregar más)
const data = {
  "god of war: ragnarok": {
    logo: "imagenes/logokratos.png",
    fondo: "imagenes/kratosfondo.jpg",
    consejos: [
      {
        titulo: "Defensa y contraataque: timing perfecto",
        texto:
          "Parry / Block perfecto: bloquea justo antes del impacto (L1). Si lo haces bien, verás un destello dorado y el enemigo quedará aturdido — aprovecha con un ataque fuerte (△) o un ataque rúnico (L1 + R1 / L1 + R2). Esquiva lateralmente (✖✖) para girar alrededor del enemigo y golpear por la espalda.",
        imagen: "imagenes/kratosescudo.jpg"
      },
      {
        titulo: "Aprovecha los ataques elementales",
        texto:
          "Pulsa y mantén R2 para lanzar un ataque cargado con el hacha Leviatán (daño de hielo) o el Blades of Chaos (daño de fuego). Algunos enemigos son débiles a uno de estos elementos: usa el opuesto para maximizar daño.",
        imagen: "imagenes/kratoselemental.jpg"
      },
      {
        titulo: "Usa Atreus inteligentemente",
        texto:
          "Pulsa ⬜ para hacer que Atreus dispare flechas a distancia. Es ideal para distraer enemigos mientras recargas ataques rúnicos o curas con L3 + R3 (Furia espartana). También puede activar runas o romper escudos etéreos.",
        imagen: "imagenes/atreus.webp"
      },
      {
        titulo: "Secretos y mejoras ocultas",
        texto:
          "Completa las pruebas de Muspelheim para conseguir las mejores armaduras. En Niflheim, puedes farmear niebla para crear encantamientos únicos. Los cofres legendarios dorados contienen runas poderosas: búscalos en zonas altas y usa el hacha lanzada para activar los sellos.",
        imagen: "imagenes/cofre.jpeg"
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
          "Apunta a la cabeza con L2 + R2, y cuando el enemigo quede tambaleando, acércate y pulsa ✖ para una patada que derriba a varios. Luego, remátalos en el suelo con cuchillo (L1 + R2).",
        imagen: "imagenes/disparo.webp"
      },
      {
        titulo: "Administra tu inventario",
        texto:
          "Usa el maletín con orden: coloca armas grandes abajo y curas arriba. Combina pólvoras (Y en PC, ✖ en consola) para crear munición y guarda espacio para granadas de mano.",
        imagen: "imagenes/inventario.png"
      },
      {
        titulo: "Truco del comerciante",
        texto:
          "Vende las gemas solo cuando completes un tesoro completo (combina rubíes, zafiros, etc.). Ganarás hasta el doble de pesetas.",
        imagen: "imagenes/buho.jpg"
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
          "Salta (A) y presiona A nuevamente justo cuando estés sobre un objeto rosa para hacer Parry. Esto recarga una carta de energía y te permite usar ataques EX con B.",
        imagen: "imagenes/parry.webp"
      },
      {
        titulo: "Elige bien tus armas",
        texto:
          "El Chaser (autoapunta) es ideal para jefes móviles, mientras que el Spread (disparo corto) es brutal a corta distancia. Cámbialos según el enemigo (LB o L1).",
        imagen: "imagenes/cup2.jpg"
      },
      {
        titulo: "Modo oculto experto",
        texto:
          "Completa el juego una vez y desbloquearás el Modo Experto, donde los jefes atacan más rápido. Usa Charms como Smoke Bomb (esquiva invencible) para sobrevivir.",
        imagen: "imagenes/cup3.jpg"
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
          "Salta (A) y presiona A nuevamente justo cuando estés sobre un objeto rosa para hacer Parry. Esto recarga una carta de energía y te permite usar ataques EX con B.",
        imagen: "imagenes/parry.webp"
      },
      {
        titulo: "Elige bien tus armas",
        texto:
          "El Chaser (autoapunta) es ideal para jefes móviles, mientras que el Spread (disparo corto) es brutal a corta distancia. Cámbialos según el enemigo (LB o L1).",
        imagen: "imagenes/cup2.jpg"
      },
      {
        titulo: "Modo oculto experto",
        texto:
          "Completa el juego una vez y desbloquearás el Modo Experto, donde los jefes atacan más rápido. Usa Charms como Smoke Bomb (esquiva invencible) para sobrevivir.",
        imagen: "imagenes/cup3.jpg"
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
          "Aprende las combinaciones básicas: madera → tabla → palos → herramientas. Dominar el orden te ahorra tiempo al empezar un nuevo mundo.",
        imagen: "imagenes/craft.jpg"
      },
      {
        titulo: "Elige bien tus encantamientos",
        texto:
          "No todos los encantamientos sirven igual para cada herramienta.Por ejemplo, Eficiencia y Toque de Seda son ideales para el pico, mientras que Reparación y Irrompibilidad te ayudarán a conservar tus objetos valiosos.",
        imagen: "imagenes/encant.jpg"
      },
      {
        titulo: "Modo supervivencia",
        texto:
          "De noche, los enemigos aparecen con más frecuencia.Construye un refugio antes del anochecer y coloca antorchas alrededor para evitar que los mobs se acerquen.",
        imagen: "imagenes/survive.png"
      }
    ]
  },
  "Assassin’s Creed Valhalla": {
    logo: "imagenes/aslogo.jpg",
    fondo: "imagenes/asfondo.jpg",
    consejos: [
      {
        titulo: "Aprovecha el sigilo",
        texto:
          "AAunque Valhalla prioriza el combate, el sigilo sigue siendo una herramienta letal.Activa la opción “Asesinato avanzado” en el menú de dificultad para poder eliminar enemigos de un solo golpe si aciertas el QTE.",
        imagen: "imagenes/shh.jpg"
      },
      {
        titulo: "Elige bien tus encantamientos",
        texto:
          "No todos los encantamientos sirven igual para cada herramienta.Por ejemplo, Eficiencia y Toque de Seda son ideales para el pico, mientras que Reparación y Irrompibilidad te ayudarán a conservar tus objetos valiosos.",
        imagen: "imagenes/encant.jpg"
      },
      {
        titulo: "Modo supervivencia",
        texto:
          "De noche, los enemigos aparecen con más frecuencia.Construye un refugio antes del anochecer y coloca antorchas alrededor para evitar que los mobs se acerquen.",
        imagen: "imagenes/survive.png"
      }
    ]
  }
  
};

// 🟣 Carga el juego seleccionado desde localStorage
const selectedGame = JSON.parse(localStorage.getItem("selectedGame"));
const nombreNormalizado = normalizarTexto(selectedGame.nombre);

// Buscar el juego en el objeto de datos (sin importar acentos o comillas)
const clave = Object.keys(data).find(
  (k) => normalizarTexto(k) === nombreNormalizado
);

if (!clave) {
  console.error("Juego no encontrado:", selectedGame);
} else {
  const juego = data[clave];

  // Fondo oscurecido y centrado
  document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${juego.fondo})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  document.getElementById("logoJuego").src = juego.logo;
  document.getElementById("gameTitle").textContent = clave;

  const contenedor = document.getElementById("consejosContainer");
  contenedor.innerHTML = "";

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
