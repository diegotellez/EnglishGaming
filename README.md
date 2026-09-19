# GrammarQuest — the Realms of English 🗺️✨

Juego web de aventura para aprender inglés, pensado para estudiantes de
**Octavo**. Sin frameworks, sin build: HTML + CSS + JavaScript puro, abre
directo en el navegador o se publica en GitHub Pages en un click.

## Temas cubiertos

- **Present Village** — Present Simple & Present Continuous
- **Past Ruins** — Past Simple & Past Continuous
- **Passive Fortress** — Voz pasiva (presente y pasado)
- **Adjective Gardens** — Comparativos, superlativos y orden de adjetivos
- **Regular Forge** — Verbos regulares y reglas de ortografía del `-ed`
- **Irregular Caves** — Verbos irregulares, como minijuego de memoria (memory match)
- **The Grammar Dragon** — Batalla final: reto mixto de todos los temas, se
  desbloquea al ganar al menos ⭐ en cada reino

## Mecánicas de juego

- Mapa tipo "camino de aventura" con reinos que se van desbloqueando.
- Preguntas de opción múltiple con temporizador, corazones (vidas) y racha
  de combo con bonus de XP.
- Sistema de nivel, experiencia (XP) y monedas, guardado en `localStorage`
  del navegador (el progreso es por dispositivo/navegador).
- Minijuego de memoria (cartas) para los verbos irregulares.
- Batalla final contra "el Dragón de la Gramática" con barra de vida.
- Efectos de sonido sintetizados con Web Audio (sin archivos externos) y
  confeti en Canvas al acertar. Todo funciona offline una vez cargado.

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
