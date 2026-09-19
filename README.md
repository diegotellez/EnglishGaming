# GrammarQuest — El Gran Espectáculo del Inglés 🎪✨

Juego web de aventura para aprender inglés, pensado para estudiantes de
**Octavo**. Sin frameworks, sin build: HTML + CSS + JavaScript puro, abre
directo en el navegador o se publica en GitHub Pages en un click. El menú
y toda la navegación están en español; las preguntas quedan en inglés
porque son el contenido que se está enseñando.

La app tiene cinco apartados, accesibles desde la barra inferior:

- **🎬 Temas** — cada tema gramatical es su propia tarjeta independiente,
  **todos jugables desde el principio** (sin desbloqueo progresivo).
- **🔤 Traductor** — traduce palabras o frases cortas inglés↔español.
- **🌐 Online** — jugar en equipo con un código, en tiempo real.
- **🎩 Tienda** — gastar las monedas ganadas en personalizar al héroe.
- **🧠 Coach** — panel de resultados reales (rendimiento por tema y
  últimos errores).

## El look: cartoon vintage de los años 30

Toda la app (colores, tipografía, botones, y el personaje) sigue una
sola estética "rubber-hose": el estilo de animación de los años 30
(contornos de tinta negra gruesos, papel crema con viñeta y grano,
guantes blancos, colores de cartel de circo — rojo, mostaza, verde
azulado). El título usa la tipografía "Alfa Slab One" (cartel vintage) y
el resto del texto "Nunito" para que siga siendo legible.

El héroe es una ilustración en **SVG 2D** (no 3D, no depende de ninguna
librería externa): contornos gruesos, guantes blancos, fondo crema con
viñeta. La cara es el emoji que elegiste; el sombrero, el vehículo y la
comida equipados aparecen como accesorios junto a él. Tiene una
animación de rebote constante y salta si le haces click/tap.

Cada uno de los 16 personajes de la Tienda tiene, además de su propio
color de cuerpo, un rasgo visual propio que lo distingue: el unicornio
tiene cuerno, el elfo y el lobo tienen orejas puntiagudas, el robot
antena, el dragón alas, el rey corona y capa, el vampiro cuello de capa,
la hada alas de hada, el ninja bandana, etc. — no son 16 cuerpos
dibujados desde cero, sino el mismo cuerpo base con un accesorio de
firma por personaje (ver `CHAR_TINTS`/`charAccentSlots` en `game.js`).

Nota: esto es un homenaje **al estilo** de animación de los años 30 (el
mismo que usa el videojuego Cuphead), construido desde cero para este
proyecto con nombres e ilustraciones originales — no reproduce ningún
personaje, logo ni marca de Cuphead, que son propiedad de Studio MDHR.
Se pidió que los personajes se vieran exactamente como los de una
referencia (tarjetas de personajes con avión/vehículo tipo "aviator
card"); mantuve el mismo lenguaje visual (contorno grueso, guantes
blancos, vehículo/prop junto al personaje) pero con diseños propios, no
copias de esa ilustración específica — que también parece pertenecer a
otro estudio, con sus propios derechos.

## Logo

`GrammarQuest` tiene un logo propio (insignia con rueda de colores
alternados arriba + nombre en dos tonos abajo) entregado como imagen
aparte — no forma parte todavía de las pantallas del juego. Si te gusta,
dime y lo integro en la pantalla de bienvenida.

## Temas cubiertos (apartado "Temas")

Todos disponibles desde el principio, cada uno como su propia atracción
del espectáculo:

- **El Carnaval del Presente** — Present Simple & Present Continuous
- **El Cine Mudo del Pasado** — Past Simple & Past Continuous
- **El Teatro de Marionetas** — Voz pasiva (presente y pasado)
- **El Circo de los Adjetivos** — Comparativos, superlativos y orden de adjetivos
- **La Fábrica de Tinta** — Verbos regulares y reglas de ortografía del `-ed`
- **El Tren Fantasma** — Verbos irregulares, como minijuego de memoria (memory match)
- **El Profesor Tinta** — Batalla final: reto mixto de todos los temas

## Coach (apartado "Coach")

Panel de **resultados**, sin buscador ni chat — solo datos reales de
cada partida:

- **Rendimiento por tema**: barra de % de aciertos por cada uno de los 6
  temas, calculada sobre todas las preguntas respondidas (quiz individual,
  memoria de irregulares, batalla final y reto Online).
- **Recomendación**: cuando hay suficientes datos (3+ respuestas en un
  tema), señala el tema más débil con un consejo corto y un botón para
  practicarlo directamente.
- **Últimos errores**: las últimas preguntas falladas, con tu respuesta y
  la respuesta correcta lado a lado.

## Traductor (apartado "Traductor")

Traductor simple de palabras o frases cortas, en cualquier dirección
(inglés→español o español→inglés, con un botón para invertir). Usa
[MyMemory](https://mymemory.translated.net/), un servicio de traducción
gratuito que no requiere clave de API — por eso sí se puede llamar
directo desde el navegador, a diferencia del chat con IA (ver abajo).
Necesita internet, y como cualquier traductor automático puede fallar
con modismos o frases largas/ambiguas. También incluye una lista rápida
con verbos irregulares del juego para probar con un toque.

No pude verificar una traducción real de punta a punta desde este
entorno de desarrollo (bloquea las llamadas salientes a ese servicio),
así que pruébenlo ustedes en un navegador normal antes de darlo por
sentado en clase.

## Sobre el pedido de un chat con IA (Gemini)

Se pidió un chat con una IA real (tipo Gemini) dentro de "Temas". No lo
construí todavía porque requiere una decisión que solo tú puedes tomar:
conectar una IA real necesita una **clave de API** y, más importante, un
**servidor propio** que la guarde — nunca se debe poner una clave de API
directamente en el código de una página web pública (como esta, en
GitHub Pages), porque cualquiera que abra el código fuente podría
copiarla y usarla a tu costa. Sin ese backend no hay forma segura de
ofrecer un chat con Gemini/Claude/ChatGPT desde este proyecto tal como
está (HTML+JS estático, sin servidor). Es la pieza pendiente: falta que
consigas una clave de Gemini gratis en
[aistudio.google.com/apikey](https://aistudio.google.com/apikey) y me la
pases — con eso armo un backend chico (Cloudflare Workers, gratis) que
la esconda, con herramientas (function calling) hechas a la medida de
GrammarQuest, y lo conecto al chat en "Temas".

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
- Batalla final contra "El Profesor Tinta" con barra de vida.
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
style.css       Todos los estilos (tema cartoon vintage: papel crema y tinta)
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
el principio (los personajes iniciales funcionan así). El color de
cuerpo y el rasgo distintivo del personaje 2D para cada `id` de
personaje están en `CHAR_TINTS` y `charAccentSlots()`.

## Personalizar los consejos del Coach

El consejo que aparece al recomendar un tema está en `TOPIC_TIPS` (uno
por tema) en `game.js`. También queda ahí `FAQ_TIPS`, una guía más
amplia de ~20 dudas comunes de inglés (sin usarse en la interfaz por
ahora) por si más adelante se conecta una IA real y sirve como base de
respaldo.
