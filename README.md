# GrammarQuest — los Reinos del Inglés 🗺️✨

Juego web de aventura para aprender inglés, pensado para estudiantes de
**Octavo**. Sin frameworks, sin build: HTML + CSS + JavaScript puro, abre
directo en el navegador o se publica en GitHub Pages en un click. El menú
y toda la navegación están en español; las preguntas quedan en inglés
porque son el contenido que se está enseñando.

La app tiene tres apartados, accesibles desde la barra inferior:

- **🗺️ Temas** — cada tema gramatical es su propia tarjeta independiente
  (modo individual).
- **🌐 Online** — jugar en equipo con un código, en tiempo real.
- **🎒 Tienda** — gastar las monedas ganadas en personalizar al héroe.

## El personaje en 3D

Arriba de "Temas" y de "Tienda" hay un escenario 3D (con
[Three.js](https://threejs.org/)) donde el héroe gira sobre una
plataforma mostrando lo que tiene equipado: sombrero, vehículo y comida
aparecen junto a él en la escena. Se puede arrastrar con el dedo/mouse
para girarlo. Al comprar o equipar algo nuevo en la Tienda, el cambio se
ve ahí mismo al instante.

Si el navegador no soporta WebGL o la librería no llega a cargar (por
ejemplo, por un firewall muy restrictivo), el escenario cae de forma
automática a una versión plana (el avatar y sus accesorios como emoji
grandes) — el juego sigue funcionando igual, solo sin el giro 3D.

## Temas cubiertos (apartado "Temas")

- **Aldea del Presente** — Present Simple & Present Continuous
- **Ruinas del Pasado** — Past Simple & Past Continuous
- **Fortaleza Pasiva** — Voz pasiva (presente y pasado)
- **Jardín de Adjetivos** — Comparativos, superlativos y orden de adjetivos
- **Forja Regular** — Verbos regulares y reglas de ortografía del `-ed`
- **Cuevas Irregulares** — Verbos irregulares, como minijuego de memoria (memory match)
- **El Dragón Gramatical** — Batalla final: reto mixto de todos los temas, se
  desbloquea al ganar al menos ⭐ en cada reino

## Modo Online (apartado "Online")

Permite jugar en equipo (hasta ~4 jugadores recomendado) usando un
**código de equipo**, sin necesidad de un servidor propio:

1. Un jugador pulsa **"Crear equipo nuevo"** (o escribe un código
   personalizado, por ejemplo el nombre del equipo) y comparte ese código
   con sus compañeros — de viva voz, por WhatsApp, o escrito en el pizarrón.
2. Los demás escriben el mismo código y pulsan **"Unirme con este código"**.
3. En el lobby se ve la lista de compañeros conectados (con su personaje y
   accesorios equipados). El anfitrión elige el tema y pulsa **"Comenzar
   reto de equipo"**.
4. Todos responden las mismas 8 preguntas a su propio ritmo; una barra de
   progreso **compartida** se llena con las respuestas correctas de todo
   el equipo. Al terminar todos, se muestra el resultado conjunto.

Detalles técnicos: usa [PeerJS](https://peerjs.com/) (WebRTC) cargado
desde jsDelivr — es decir, los navegadores se conectan **directamente
entre sí** (peer-to-peer), sin pasar por un backend propio. Esto significa:

- Se necesita conexión a internet, y funciona mejor en redes normales.
  Algunas redes escolares muy restrictivas bloquean las conexiones
  directas (WebRTC); si eso pasa, el modo Online puede fallar al conectar
  — en ese caso, toca jugar en modo individual (apartado "Temas").
- No hay una cuenta ni un servidor que mantener: el código de equipo es
  temporal y solo existe mientras el anfitrión sigue conectado.
- No pude probar una conexión real entre dos dispositivos distintos desde
  este entorno de desarrollo (bloquea el tráfico saliente necesario), así
  que vale la pena que lo prueben ustedes con dos navegadores/dispositivos
  reales antes de usarlo en clase.

## Tienda y personalización (apartado "Tienda")

Las monedas que se ganan respondiendo correctamente (o completando el
memory de verbos irregulares) se gastan en 4 categorías de artículos:

- **Personajes** — avatares alternativos (unicornio, robot, dinosaurio, dragón, alien, rey...).
- **Sombreros** — gorra, corona, casco, birrete, lentes de sol...
- **Vehículos** — auto deportivo, patrulla, tanque, helicóptero, cohete...
- **Comida** — pizza, taco, helado, hamburguesa...

Lo que el jugador equipa se ve junto a su nombre en el HUD, en el mapa y,
sobre todo, en la lista de compañeros del **lobby Online** — así que la
personalización tiene un uso real dentro de los modos de juego, no es
solo decorativa.

## Mecánicas de juego

- Mapa tipo "camino de aventura" con reinos que se van desbloqueando.
- Preguntas de opción múltiple con temporizador, corazones (vidas) y racha
  con bonus de XP.
- Sistema de nivel, experiencia (XP) y monedas, guardado en `localStorage`
  del navegador (el progreso es por dispositivo/navegador).
- Minijuego de memoria (cartas) para los verbos irregulares.
- Batalla final contra "el Dragón Gramatical" con barra de vida.
- Efectos de sonido sintetizados con Web Audio (sin archivos externos) y
  confeti en Canvas al acertar. El modo individual funciona offline una
  vez cargado; el modo Online necesita internet.

## Cómo jugarlo

### Opción 1: abrir el archivo directo

Abre `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox,
Safari). No requiere servidor ni instalación.

### Opción 2: GitHub Pages (recomendado para compartir con estudiantes)

1. En este repositorio ve a **Settings → Pages**.
2. En "Build and deployment" elige **Deploy from a branch**, branch
   `main`, carpeta `/ (root)`.
3. Guarda. En unos minutos el juego queda disponible en
   `https://diegotellez.github.io/EnglishGaming/`.

## Estructura del proyecto

```
index.html      Documento completo (para abrir directo o publicar en Pages)
artifact.html   Misma UI, como fragmento (usado para probarlo como Claude Artifact)
style.css       Todos los estilos (tema oscuro tipo arcade de fantasía)
game.js         Lógica del juego + banco de preguntas y verbos irregulares
```

## Personalizar el banco de preguntas

Todas las preguntas viven en `game.js`, en el objeto `QUESTIONS` (por
tema) y en `IRREGULAR_PAIRS` / `IRREGULAR_MCQ` para los verbos
irregulares. Cada pregunta de opción múltiple sigue este formato:

```js
q("She ___ to school every day.", ["walk","walks","walking","walked"], 1)
```

El último número es el índice (empezando en 0) de la opción correcta.
Puedes agregar tantas preguntas como quieras a cada arreglo — el juego
elige 8 al azar en cada intento, así que un banco más grande da más
variedad.

## Personalizar la tienda

Los artículos de la tienda viven en `game.js`, en el objeto `SHOP`
(categorías `personajes`, `sombreros`, `vehiculos`, `comida`). Cada
artículo es `{id, icon, name, price}` — `price: 0` lo deja gratis desde
el principio (los personajes iniciales funcionan así).
