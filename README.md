# GrammarQuest — los Reinos del Inglés 🗺️✨

Juego web de aventura para aprender inglés, pensado para estudiantes de
**Octavo**. Sin frameworks, sin build: HTML + CSS + JavaScript puro, abre
directo en el navegador o se publica en GitHub Pages en un click. El menú
y toda la navegación están en español; las preguntas quedan en inglés
porque son el contenido que se está enseñando.

La app tiene cuatro apartados, accesibles desde la barra inferior:

- **🗺️ Temas** — cada tema gramatical es su propia tarjeta independiente,
  **todos jugables desde el principio** (sin desbloqueo progresivo).
- **🌐 Online** — jugar en equipo con un código, en tiempo real.
- **🎒 Tienda** — gastar las monedas ganadas en personalizar al héroe.
- **🧠 Coach** — un panel que analiza tus respuestas reales y una guía de
  dudas de inglés (ver más abajo).

## El personaje en 2D, estilo cartoon vintage

Arriba de "Temas" y de "Tienda" hay una ilustración del héroe dibujada en
SVG con estética "rubber-hose" (los dibujos animados de los años 30:
contornos negros gruesos, guantes blancos, fondo crema con viñeta). La
cara del personaje es el emoji que elegiste; el sombrero, el vehículo y
la comida que tengas equipados aparecen como accesorios junto a él, y el
color del cuerpo cambia según el personaje elegido en la Tienda. Tiene
una animación de rebote constante y salta si le haces click/tap.

Nota: esto es un homenaje **al estilo** de animación de los años 30 (el
mismo que usa el videojuego Cuphead), dibujado desde cero para este
proyecto — no reproduce el personaje ni la marca de Cuphead, que son
propiedad de Studio MDHR.

No depende de ninguna librería externa (es SVG + CSS puro), así que
siempre funciona, incluso sin conexión, y es mucho más liviano que un
motor 3D.

## Temas cubiertos (apartado "Temas")

Todos disponibles desde el principio:

- **Aldea del Presente** — Present Simple & Present Continuous
- **Ruinas del Pasado** — Past Simple & Past Continuous
- **Fortaleza Pasiva** — Voz pasiva (presente y pasado)
- **Jardín de Adjetivos** — Comparativos, superlativos y orden de adjetivos
- **Forja Regular** — Verbos regulares y reglas de ortografía del `-ed`
- **Cuevas Irregulares** — Verbos irregulares, como minijuego de memoria (memory match)
- **El Dragón Gramatical** — Batalla final: reto mixto de todos los temas

## Coach (apartado "Coach")

Un panel de rendimiento que usa los datos reales de cada partida (no una
IA generativa — más detalle abajo):

- **Rendimiento por tema**: barra de % de aciertos por cada uno de los 6
  temas, calculada sobre todas las preguntas respondidas (quiz individual,
  memoria de irregulares, batalla final y reto Online).
- **Recomendación**: cuando hay suficientes datos (3+ respuestas en un
  tema), señala el tema más débil con un consejo corto y un botón para
  practicarlo directamente.
- **Últimos errores**: las últimas preguntas falladas, con tu respuesta y
  la respuesta correcta lado a lado.
- **Pregúntale a tu Coach**: un buscador que responde dudas de inglés
  (tiempos verbales, voz pasiva, adjetivos, artículos, preposiciones de
  tiempo, pronombres, etc.) usando una guía de ~20 consejos ya escritos.

**Importante — qué es y qué no es esta "IA":** no está conectado a
ningún modelo de lenguaje ni a internet. El "rendimiento" es 100% datos
reales de tus respuestas; la "ayuda" es una búsqueda por palabras clave
sobre una guía fija (`FAQ_TIPS` en `game.js`). Esto es deliberado: para
un chat de inglés realmente abierto (que entienda cualquier pregunta)
haría falta conectar una IA real (por ejemplo la API de Claude), lo cual
requiere un servidor propio que guarde la clave de API de forma segura —
nunca debe ponerse una clave de API directamente en el código de una
página web pública, porque cualquiera podría copiarla y usarla. Ese
backend no está incluido en este proyecto estático; si más adelante
quieres ese chat "de verdad", es la siguiente pieza a construir aparte.

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

- Cada tema es una tarjeta independiente, todas disponibles desde el
  inicio (sin desbloqueo progresivo).
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
el principio (los personajes iniciales funcionan así). El color del
cuerpo del personaje 2D para cada `id` de personaje está en `CHAR_TINTS`.

## Personalizar la guía del Coach

Los consejos que aparecen al recomendar un tema están en `TOPIC_TIPS`
(uno por tema). La guía de búsqueda de dudas está en `FAQ_TIPS`: un
arreglo de `{id, title, keywords, body}` — agrega tantas entradas como
quieras, con las palabras clave en español que un estudiante podría
escribir.
