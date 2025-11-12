// 🟣 Normalizador para evitar errores con acentos o mayúsculas
function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
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
          "Usa el maletín con orden: coloca armas grandes abajo y curas arriba. Combina pólvoras (Y / Triángulo) para crear munición y guarda espacio para granadas.",
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
          "Eficiencia y Toque de Seda son ideales para el pico, mientras que Reparación e Irrompibilidad te ayudarán a conservar tus objetos valiosos.",
        imagen: "imagenes/encant.jpg"
      },
      {
        titulo: "Modo supervivencia",
        texto:
          "De noche, los enemigos aparecen con más frecuencia. Construye un refugio antes del anochecer y coloca antorchas alrededor para evitar mobs.",
        imagen: "imagenes/survive.png"
      }
    ]
  },

  "assassin's creed valhalla": {
    logo: "imagenes/aslogo.jpg",
    fondo: "imagenes/asfondo.jpg",
    consejos: [
      {
        titulo: "Aprovecha el sigilo",
        texto:
          "Aunque Valhalla prioriza el combate, el sigilo sigue siendo letal. Activa 'Asesinato avanzado' para eliminar enemigos con un solo golpe si aciertas el QTE (R3).",
        imagen: "imagenes/shh.jpg"
      },
      {
        titulo: "Explora y mejora tu asentamiento",
        texto:
          "Completa incursiones para obtener suministros y mejorar tu asentamiento. Cada mejora desbloquea nuevas misiones, armas y aliados.",
        imagen: "imagenes/asentamiento.jpg"
      },
      {
        titulo: "Combos y habilidades",
        texto:
          "Asigna habilidades en el menú (R2 + botón direccional). Combina ataques ligeros (R1) y pesados (R2) para interrumpir bloqueos enemigos.",
        imagen: "imagenes/combate.jpg"
      }
    ]
  },

  "the last of us part i": {
    logo: "imagenes/logotlou.png",
    fondo: "imagenes/fondotlou.jpg",
    consejos: [
      {
        titulo: "Sigilo ante todo",
        texto:
          "Presiona R1 para escuchar pasos a través de paredes. Muévete agachado (Círculo) y elimina en silencio con Triángulo desde atrás.",
        imagen: "imagenes/tloustealth.jpg"
      },
      {
        titulo: "Crea en el momento justo",
        texto:
          "No craftees todo de golpe. Guarda alcohol y trapos para decidir entre cócteles molotov o botiquines según la situación (mantén R1).",
        imagen: "imagenes/tloucraft.jpg"
      },
      {
        titulo: "Truco de los chasqueadores",
        texto:
          "Lanza botellas o ladrillos con L1 + R1 para distraerlos y luego elimínalos por sorpresa.",
        imagen: "imagenes/clicker.jpg"
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
          "Concéntrate en el último golpe (clic derecho) para oro. No ataques sin visión. Usa el ward (Trinket con número 4) en arbustos cercanos.",
        imagen: "imagenes/farm.jpg"
      },
      {
        titulo: "Aprende tu rol",
        texto:
          "Cada rol tiene su función: top aguanta, jungla controla objetivos, mid aporta daño y bot trabaja en pareja con support. No te salgas de tu función.",
        imagen: "imagenes/roles.jpg"
      },
      {
        titulo: "Trucos de control",
        texto:
          "Usa Alt + clic izquierdo para pings rápidos. Con Shift + habilidad, fuerzas ataque directo. Y con Ctrl + 1,2,3,4 puedes hacer gestos.",
        imagen: "imagenes/pings.jpg"
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
          "Mantén L1 + R1 (o LB + RB) mientras disparas con círculo / B para hacer un tiro con potencia controlada. Ideal para fuera del área.",
        imagen: "imagenes/fifashot.jpg"
      },
      {
        titulo: "Defensa manual",
        texto:
          "Usa Jockey (L2 / LT) para mantener posición y presiona X / A solo cuando estés cerca del rival. Evita el 'carrusel de barridas'.",
        imagen: "imagenes/defensa.jpg"
      },
      {
        titulo: "Trucos de regate",
        texto:
          "Haz movimientos rápidos con el joystick derecho. Por ejemplo: adelante + atrás para un amague, o medio círculo para una bicicleta.",
        imagen: "imagenes/regate.jpg"
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
          "Esquiva justo antes del golpe enemigo (ZR / RT). El tiempo se ralentiza y puedes castigar con combos aéreos (X + A).",
        imagen: "imagenes/witchtime.jpg"
      },
      {
        titulo: "Usa demonios infernales",
        texto:
          "Mantén ZL para invocar demonios gigantes. Pero cuidado, Bayonetta queda vulnerable mientras están activos.",
        imagen: "imagenes/demon.jpg"
      },
      {
        titulo: "Encuentra los versículos ocultos",
        texto:
          "Explora los escenarios y destruye los portales morados: cada uno desbloquea batallas secretas que te dan halos extra.",
        imagen: "imagenes/versiculo.jpg"
      }
    ]
  },

  "five nights at freddy's": {
    logo: "imagenes/fnaf.png",
    fondo: "imagenes/fondofnaf.jpg",
    consejos: [
      {
        titulo: "Ahorra energía",
        texto:
          "Las puertas consumen mucha batería. Solo ciérralas cuando veas animatrónicos en la cámara o al lado del pasillo.",
        imagen: "imagenes/power.jpg"
      },
      {
        titulo: "Escucha los sonidos",
        texto:
          "Freddy y Foxy hacen ruidos característicos antes de moverse. Usa auriculares y reacciona rápido.",
        imagen: "imagenes/sonido.jpg"
      },
      {
        titulo: "Truco de cámaras",
        texto:
          "Alterna rápido entre la cámara 1C (Pirate Cove) y otras zonas para mantener a Foxy controlado y evitar que corra hacia ti.",
        imagen: "imagenes/cam.jpg"
      }
    ]
  }
};

// 🟣 Carga el juego seleccionado desde localStorage
const selectedGame = JSON.parse(localStorage.getItem("selectedGame"));
const nombreNormalizado = normalizarTexto(selectedGame.nombre);

const clave = Object.keys(data).find(
  (k) => normalizarTexto(k) === nombreNormalizado
);

if (!clave) {
  console.error("Juego no encontrado:", selectedGame);
} else {
  const juego = data[clave];

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
