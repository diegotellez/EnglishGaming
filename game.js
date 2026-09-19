/* ============================================================
   GrammarQuest — los Reinos del Inglés
   Motor del juego + banco de preguntas. Sin build, un solo archivo.
   Las preguntas del quiz quedan en inglés (es lo que se enseña);
   todo el menú y la navegación están en español.
   ============================================================ */
(function(){
"use strict";

/* ---------------- contenido: reinos y preguntas ---------------- */

const REALMS = [
  {key:'present',    name:'Aldea del Presente',  icon:'🏘️', color:'#33E4C2', desc:'Presente simple y continuo'},
  {key:'past',        name:'Ruinas del Pasado',   icon:'🏛️', color:'#FFC857', desc:'Pasado simple y continuo'},
  {key:'passive',     name:'Fortaleza Pasiva',    icon:'🏰', color:'#9B6BFF', desc:'Voz pasiva'},
  {key:'adjectives',  name:'Jardín de Adjetivos', icon:'🌺', color:'#FF6B8B', desc:'Comparativos y superlativos'},
  {key:'regular',     name:'Forja Regular',       icon:'⚒️', color:'#7DB2FF', desc:'Verbos regulares (-ed)'},
  {key:'irregular',   name:'Cuevas Irregulares',  icon:'🔮', color:'#FF9E4A', desc:'Verbos irregulares — memoria'},
];

function q(text, options, answerIndex){ return {text, options, a:answerIndex}; }

const QUESTIONS = {
  present: [
    q("She ___ to school every day.", ["walk","walks","walking","walked"], 1),
    q("Look! It ___ outside right now.", ["rain","rains","is raining","rained"], 2),
    q("My brother ___ football on Saturdays.", ["play","plays","is playing","played"], 1),
    q("Shh, I ___ TV at the moment.", ["watch","watches","am watching","watched"], 2),
    q("Water ___ at 100°C.", ["boil","boils","is boiling","boiled"], 1),
    q("They ___ dinner right now.", ["have","has","are having","had"], 2),
    q("___ you like pizza?", ["Do","Does","Are","Is"], 0),
    q("He ___ mathematics.", ["don't like","doesn't likes","doesn't like","not likes"], 2),
    q("We usually ___ up at 7 a.m.", ["get","gets","getting","got"], 0),
    q("Right now, the children ___ in the park.", ["play","plays","are playing","played"], 2),
    q("My mom never ___ coffee.", ["drink","drinks","is drinking","drank"], 1),
    q("Listen! Someone ___ at the door.", ["knock","knocks","is knocking","knocked"], 2),
    q("The sun ___ in the east.", ["rise","rises","is rising","rose"], 1),
    q("___ she work on weekends?", ["Do","Does","Is","Are"], 1),
    q("I ___ for my English exam right now.", ["study","studies","am studying","studied"], 2),
    q("Cats ___ mice.", ["chase","chases","is chasing","chased"], 0),
    q("My dad ___ his own restaurant.", ["own","owns","is owning","owned"], 1),
    q("We ___ (not) understand this exercise at the moment.", ["don't","doesn't","aren't","isn't"], 2),
  ],
  past: [
    q("Yesterday, I ___ my grandmother.", ["visit","visits","visited","was visiting"], 2),
    q("While I ___ home, it started to rain.", ["walk","walked","was walking","am walking"], 2),
    q("She ___ to the party last night.", ["didn't went","didn't go","doesn't go","not went"], 1),
    q("They ___ a movie when the power went out.", ["watched","were watching","watch","are watching"], 1),
    q("___ you finish your homework?", ["Did","Do","Was","Were"], 0),
    q("He ___ a new phone last week.", ["buyed","bought","buys","was buy"], 1),
    q("We ___ at the beach all day yesterday.", ["was","were","are","be"], 1),
    q("What ___ you doing at 8 p.m. last night?", ["did","was","were","do"], 2),
    q("I ___ that movie twice already.", ["seen","saw","see","was seeing"], 1),
    q("The children ___ in the garden when it began to rain.", ["played","were playing","play","are playing"], 1),
    q("She ___ breakfast this morning.", ["didn't ate","didn't eat","doesn't eat","not ate"], 1),
    q("Where ___ you go on vacation last year?", ["did","do","was","were"], 0),
    q("He ___ for an hour before dinner yesterday.", ["run","ran","was run","runned"], 1),
    q("My parents ___ married in 1995.", ["get","got","were get","getting"], 1),
    q("While she was cooking, the phone ___.", ["ring","rang","was ring","rings"], 1),
    q("I ___ time to call you yesterday.", ["didn't had","didn't have","don't have","not had"], 1),
    q("At 6 p.m. yesterday, we ___ dinner.", ["cooked","were cooking","cook","cooks"], 1),
    q("He ___ his leg while he was skiing.", ["broke","break","was break","breaked"], 0),
  ],
  passive: [
    q("Active: 'Cats chase mice.' Passive: 'Mice ___ by cats.'", ["chase","are chased","is chased","chased"], 1),
    q("Active: 'They clean the office every day.' Passive: 'The office ___ every day.'", ["is cleaned","are cleaned","cleans","was cleaned"], 0),
    q("Active: 'Shakespeare wrote Hamlet.' Passive: 'Hamlet ___ by Shakespeare.'", ["was written","is written","wrote","were written"], 0),
    q("Active: 'The chef is cooking the meal.' Passive: 'The meal ___ by the chef.'", ["is cooked","was cooked","is being cooked","cooks"], 2),
    q("This bridge ___ in 1990.", ["was built","is built","built","were built"], 0),
    q("English ___ in many countries.", ["speaks","is spoken","was spoken","spoke"], 1),
    q("The letter ___ yesterday.", ["sent","was sent","is sent","sends"], 1),
    q("My bike ___ last night.", ["was stolen","is stolen","stole","steals"], 0),
    q("Which sentence is passive?", ["The dog bit the man.","The man was bitten by the dog.","The man bites the dog.","The man is biting the dog."], 1),
    q("The homework ___ by the students every week.", ["does","is done","was done","did"], 1),
    q("The windows ___ during the storm.", ["broke","were broken","break","are breaking"], 1),
    q("Active: 'Someone stole my wallet.' Passive: 'My wallet ___.'", ["was stolen","is stolen","stole","steals"], 0),
    q("Rice ___ in many parts of Asia.", ["grows","is grown","grew","was grown"], 1),
    q("The results ___ every Friday.", ["announce","are announced","announced","is announced"], 1),
    q("Which sentence is passive?", ["Someone cleans this room daily.","This room is cleaned daily.","This room cleans daily.","This room cleaning daily."], 1),
    q("The cake ___ by my sister an hour ago.", ["made","was made","is made","makes"], 1),
  ],
  adjectives: [
    q("This book is ___ than that one. (interesting)", ["more interesting","interestinger","most interesting","interesting"], 0),
    q("Mount Everest is ___ mountain in the world. (tall)", ["taller","the taller","the tallest","tallest"], 2),
    q("She is ___ student in the class. (good)", ["the best","the goodest","gooder","best"], 0),
    q("My car is ___ than yours. (fast)", ["fastest","more fast","faster","the fastest"], 2),
    q("This is ___ day of my life. (bad)", ["the worst","worse","the more bad","badder"], 0),
    q("He is ___ than his brother. (tall)", ["tall","taller","the tallest","more tall"], 1),
    q("Choose the correct adjective order.", ["a wooden beautiful old house","a beautiful old wooden house","an old beautiful wooden house","a beautiful wooden old house"], 1),
    q("She has ___ money than I do. (little)", ["less","the least","littler","more little"], 0),
    q("This is ___ restaurant in town. (expensive)", ["more expensive","the most expensive","expensiver","most expensive"], 1),
    q("Choose the correct adjective order.", ["a red big round ball","a round red big ball","a big round red ball","a big red round ball"], 2),
    q("My sister is ___ than me. (young)", ["younger","the youngest","more young","young"], 0),
    q("This exercise is ___ than the last one. (easy)", ["easyer","more easy","easier","the easiest"], 2),
    q("That was ___ joke I've ever heard. (funny)", ["the funniest","funnier","more funny","the more funny"], 0),
    q("Choose the correct sentence.", ["She bought a nice small Italian leather bag.","She bought a leather nice small Italian bag.","She bought an Italian small nice leather bag.","She bought a small nice Italian leather bag."], 0),
    q("This soup is ___ than the one I made. (salty)", ["saltier","more salty","the saltiest","saltyer"], 0),
  ],
  regular: [
    q("What is the past simple of 'walk'?", ["walkd","walked","walking","welk"], 1),
    q("What is the past simple of 'stop'?", ["stoped","stopped","stopping","stops"], 1),
    q("What is the past simple of 'study'?", ["studyed","studied","studies","studing"], 1),
    q("What is the past simple of 'like'?", ["liked","likeed","likd","likeing"], 0),
    q("What is the past simple of 'play'?", ["plaied","played","plaid","playd"], 1),
    q("What is the past simple of 'plan'?", ["planed","planned","planing","plans"], 1),
    q("What is the past simple of 'carry'?", ["carryed","carried","carring","carries"], 1),
    q("What is the past simple of 'dance'?", ["danceed","danced","dansed","dancing"], 1),
    q("What is the past simple of 'clean'?", ["cleand","cleaned","cleaning","cleans"], 1),
    q("What is the past simple of 'travel'?", ["traveled","travelled","travled","travelt"], 1),
    q("Which of these verbs is REGULAR?", ["go","want","see","take"], 1),
    q("What is the past simple of 'cry'?", ["cryed","cried","cries","crying"], 1),
    q("What is the past simple of 'want'?", ["wantted","wanted","wantt","wanting"], 1),
    q("What is the past simple of 'watch'?", ["watchd","watched","watching","watchs"], 1),
    q("Which of these verbs is REGULAR?", ["eat","help","write","break"], 1),
  ],
};

const IRREGULAR_PAIRS = [
  ["go","went"],["see","saw"],["eat","ate"],["have","had"],["do","did"],
  ["make","made"],["take","took"],["come","came"],["give","gave"],["know","knew"],
  ["get","got"],["write","wrote"],["read","read"],["speak","spoke"],["buy","bought"],
  ["bring","brought"],["think","thought"],["find","found"],["tell","told"],["break","broke"],
  ["begin","began"],["drink","drank"],["drive","drove"],["fly","flew"],["run","ran"],
  ["sing","sang"],["swim","swam"],["wear","wore"],["win","won"],["feel","felt"],
];

const IRREGULAR_MCQ = [
  q("What is the past simple of 'go'?", ["goed","went","gone","going"], 1),
  q("What is the past simple of 'see'?", ["seed","seen","saw","sees"], 2),
  q("What is the past simple of 'eat'?", ["eated","ate","eaten","eats"], 1),
  q("What is the past simple of 'have'?", ["haved","has","had","having"], 2),
  q("What is the past simple of 'take'?", ["taked","took","taken","takes"], 1),
  q("What is the past simple of 'give'?", ["gived","gave","given","gives"], 1),
  q("What is the past simple of 'write'?", ["writed","wrote","written","writes"], 1),
  q("What is the past simple of 'buy'?", ["buyed","bought","buys","buying"], 1),
  q("What is the past simple of 'think'?", ["thinked","thought","thinks","thinking"], 1),
  q("What is the past simple of 'break'?", ["breaked","broke","broken","breaks"], 1),
  q("What is the past simple of 'drink'?", ["drinked","drank","drunk","drinks"], 1),
  q("What is the past simple of 'run'?", ["runned","ran","run","running"], 1),
];

/* ---------------- tienda: personajes, sombreros, vehículos, comida ---------------- */

const SHOP = {
  personajes: [
    {id:'wizard', icon:'🧙‍♀️', name:'Hechicera', price:0},
    {id:'hero', icon:'🦸', name:'Héroe', price:0},
    {id:'ninja', icon:'🥷', name:'Ninja', price:0},
    {id:'elf', icon:'🧝', name:'Elfo', price:0},
    {id:'vampire', icon:'🧛', name:'Vampiro', price:0},
    {id:'villain', icon:'🦹', name:'Villano', price:0},
    {id:'fairy', icon:'🧚', name:'Hada', price:0},
    {id:'dragonhero', icon:'🐲', name:'Jinete de Dragón', price:0},
    {id:'unicorn', icon:'🦄', name:'Unicornio', price:150},
    {id:'robot', icon:'🤖', name:'Robot', price:150},
    {id:'genie', icon:'🧞', name:'Genio', price:200},
    {id:'dino', icon:'🦖', name:'Dinosaurio', price:200},
    {id:'zombie', icon:'🧟', name:'Zombi', price:180},
    {id:'wolf', icon:'🐺', name:'Lobo', price:220},
    {id:'alien', icon:'👽', name:'Alien', price:250},
    {id:'king', icon:'🤴', name:'Rey', price:280},
  ],
  sombreros: [
    {id:'cap', icon:'🧢', name:'Gorra', price:40},
    {id:'sunglasses', icon:'🕶️', name:'Lentes de sol', price:45},
    {id:'party', icon:'🎉', name:'Gorro de fiesta', price:50},
    {id:'tophat', icon:'🎩', name:'Sombrero de copa', price:60},
    {id:'helmet', icon:'⛑️', name:'Casco', price:70},
    {id:'grad', icon:'🎓', name:'Birrete', price:90},
    {id:'military', icon:'🪖', name:'Casco militar', price:100},
    {id:'crown', icon:'👑', name:'Corona', price:250},
  ],
  vehiculos: [
    {id:'truck', icon:'🚚', name:'Camión', price:100},
    {id:'car', icon:'🚗', name:'Auto deportivo', price:120},
    {id:'patrol', icon:'🚓', name:'Patrulla', price:130},
    {id:'pickup', icon:'🛻', name:'Camioneta', price:140},
    {id:'racecar', icon:'🏎️', name:'Auto de carreras', price:220},
    {id:'tank', icon:'🛡️', name:'Tanque', price:200},
    {id:'heli', icon:'🚁', name:'Helicóptero', price:240},
    {id:'rocket', icon:'🚀', name:'Cohete', price:260},
  ],
  comida: [
    {id:'apple', icon:'🍎', name:'Manzana', price:15},
    {id:'cookie', icon:'🍪', name:'Galleta', price:15},
    {id:'fries', icon:'🍟', name:'Papas fritas', price:20},
    {id:'donut', icon:'🍩', name:'Dona', price:20},
    {id:'taco', icon:'🌮', name:'Taco', price:25},
    {id:'icecream', icon:'🍦', name:'Helado', price:25},
    {id:'pizza', icon:'🍕', name:'Pizza', price:30},
    {id:'burger', icon:'🍔', name:'Hamburguesa', price:30},
  ],
};
const SHOP_TABS = [
  {key:'personajes', label:'Personajes', icon:'🧙'},
  {key:'sombreros', label:'Sombreros', icon:'🎩'},
  {key:'vehiculos', label:'Vehículos', icon:'🚗'},
  {key:'comida', label:'Comida', icon:'🍕'},
];

/* ---------------- estado / guardado ---------------- */

const SAVE_KEY = 'grammarquest_save_v2';
const AVATARS = SHOP.personajes.filter(p=>p.price===0).map(p=>p.icon);

function defaultState(){
  return {
    name:'', avatar:AVATARS[0], level:1, xp:0, coins:0,
    stars:{present:0,past:0,passive:0,adjectives:0,regular:0,irregular:0},
    bossCleared:false, muted:false, started:false,
    inventory:{personajes:[], sombreros:[], vehiculos:[], comida:[]},
    equipped:{personaje:null, sombreros:null, vehiculos:null, comida:null},
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const merged = Object.assign(defaultState(), parsed);
    merged.inventory = Object.assign(defaultState().inventory, parsed.inventory||{});
    merged.equipped = Object.assign(defaultState().equipped, parsed.equipped||{});
    merged.stars = Object.assign(defaultState().stars, parsed.stars||{});
    return merged;
  }catch(e){ return defaultState(); }
}
function saveState(){
  try{ localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }catch(e){ /* modo privado, etc */ }
}
let state = loadState();

function isOwned(cat, item){ return item.price===0 || state.inventory[cat].includes(item.id); }
function equippedItem(cat){
  const id = state.equipped[cat];
  if(!id) return null;
  return SHOP[cat].find(i=>i.id===id) || null;
}
function gearIcons(){
  return [equippedItem('sombreros'), equippedItem('vehiculos'), equippedItem('comida')]
    .filter(Boolean).map(i=>i.icon).join(' ');
}
function myProfile(){
  return { name: state.name || 'Héroe', avatar: state.avatar, gear: gearIcons() };
}

/* ---------------- audio (sintetizado, sin archivos) ---------------- */

let actx = null;
function tone(freq, dur, type, gain){
  if(state.muted) return;
  try{
    if(!actx) actx = new (window.AudioContext||window.webkitAudioContext)();
    if(actx.state === 'suspended') actx.resume();
    const osc = actx.createOscillator();
    const g = actx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    g.gain.value = gain||0.06;
    osc.connect(g); g.connect(actx.destination);
    const t0 = actx.currentTime;
    g.gain.setValueAtTime(g.gain.value, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
    osc.start(t0); osc.stop(t0+dur+0.02);
  }catch(e){}
}
const sfx = {
  correct(){ tone(880,.12,'triangle',.07); setTimeout(()=>tone(1180,.14,'triangle',.06),90); },
  wrong(){ tone(180,.22,'sawtooth',.06); },
  click(){ tone(520,.05,'square',.03); },
  win(){ [660,880,1100,1320].forEach((f,i)=>setTimeout(()=>tone(f,.18,'triangle',.06), i*90)); },
  hurt(){ tone(140,.3,'sawtooth',.07); },
  buy(){ tone(700,.08,'square',.05); setTimeout(()=>tone(1000,.1,'square',.05),70); },
};

/* ---------------- fx: confeti ---------------- */

const canvas = document.getElementById('fx-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function resizeCanvas(){ canvas.width = innerWidth; canvas.height = innerHeight; }
addEventListener('resize', resizeCanvas); resizeCanvas();
function burst(x,y,colors,count){
  if(reduceMotion) return;
  colors = colors || ['#9B6BFF','#33E4C2','#FFC857','#FF6B8B'];
  for(let i=0;i<(count||26);i++){
    particles.push({
      x,y, vx:(Math.random()-.5)*7, vy:-Math.random()*7-2,
      g:0.28, life:60+Math.random()*20, c:colors[i%colors.length],
      s:3+Math.random()*3, rot:Math.random()*Math.PI, vr:(Math.random()-.5)*.4,
    });
  }
  if(!fxLoop) runFx();
}
let fxLoop = false;
function runFx(){
  fxLoop = true;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.vy += p.g; p.x += p.vx; p.y += p.vy; p.life -= 1; p.rot += p.vr;
    ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
    ctx.fillStyle = p.c; ctx.globalAlpha = Math.max(0, p.life/70);
    ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*1.6);
    ctx.restore();
  });
  particles = particles.filter(p=>p.life>0 && p.y < canvas.height+40);
  if(particles.length){ requestAnimationFrame(runFx); } else { fxLoop=false; ctx.clearRect(0,0,canvas.width,canvas.height); }
}
function burstCenter(colors){ burst(innerWidth/2, innerHeight*0.35, colors, 60); }

/* ---------------- toast ---------------- */
function toast(msg){
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 2000);
}

/* ---------------- xp / recompensas ---------------- */
function xpForLevel(lvl){ return lvl*120; }
function grantXp(amount){
  state.xp += amount;
  let leveled = false;
  while(state.xp >= xpForLevel(state.level)){
    state.xp -= xpForLevel(state.level);
    state.level += 1; leveled = true;
  }
  if(leveled){ toast('⭐ ¡Subiste de nivel! Ahora eres nivel '+state.level); sfx.win(); burstCenter(); }
  saveState(); renderHud();
}
function grantCoins(n){ state.coins += n; saveState(); renderHud(); }

/* ---------------- referencias DOM ---------------- */
const $ = sel => document.querySelector(sel);
const hud = $('#hud');
const tabbar = $('#tabbar');
const screens = {
  welcome: $('#screen-welcome'),
  map: $('#screen-map'),
  quiz: $('#screen-quiz'),
  memory: $('#screen-memory'),
  shop: $('#screen-shop'),
  online: $('#screen-online'),
};
let overlay = null;

function showScreen(name){
  Object.values(screens).forEach(s=>s.hidden = true);
  screens[name].hidden = false;
  window.scrollTo({top:0, behavior: reduceMotion ? 'auto' : 'smooth'});
  [...tabbar.children].forEach(b=>b.classList.toggle('active', b.dataset.tab===name));
  setHeroStageVisible(name === 'map' || name === 'shop');
}

function renderHud(){
  if(!state.started){ hud.hidden = true; tabbar.hidden = true; return; }
  hud.hidden = false;
  tabbar.hidden = false;
  $('#hud-avatar').textContent = state.avatar;
  $('#hud-name').textContent = state.name || 'Héroe';
  $('#hud-level').textContent = 'Nv '+state.level;
  const pct = Math.min(100, Math.round((state.xp / xpForLevel(state.level))*100));
  $('#hud-xpfill').style.width = pct+'%';
  $('#hud-coins').textContent = state.coins;
  $('#hud-gear').textContent = gearIcons();
  $('#hud-mute').textContent = state.muted ? '🔇' : '🔊';
}

/* ---------------- escenario 3D del personaje ---------------- */
let three = null;
const heroStageEl = $('#hero-stage');

function webglSupported(){
  try{
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
  }catch(e){ return false; }
}

function makeEmojiTexture(emoji, size){
  size = size || 128;
  const c = document.createElement('canvas'); c.width = c.height = size;
  const cx = c.getContext('2d');
  cx.clearRect(0,0,size,size);
  cx.font = Math.floor(size*0.75)+'px "Segoe UI Emoji","Noto Color Emoji",system-ui,sans-serif';
  cx.textAlign = 'center'; cx.textBaseline = 'middle';
  cx.fillText(emoji, size/2, size/2 + size*0.05);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function initHeroStage(){
  const canvas = $('#hero-canvas');
  if(typeof THREE === 'undefined' || !webglSupported()){
    heroStageEl.classList.add('stage-fallback');
    $('#hero-fallback').hidden = false;
    return;
  }
  try{
    const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio||1));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
    camera.position.set(0, 1.35, 5.3);
    camera.lookAt(0, 0.9, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.85));
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(2,4,3);
    scene.add(dir);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.6, 0.18, 48),
      new THREE.MeshStandardMaterial({color:0x7C4DFF, emissive:0x3a1f8f, emissiveIntensity:0.5, metalness:0.3, roughness:0.4})
    );
    platform.position.y = -0.75;
    scene.add(platform);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.62, 0.03, 8, 60),
      new THREE.MeshBasicMaterial({color:0xFFC857})
    );
    ring.rotation.x = Math.PI/2; ring.position.y = -0.65;
    scene.add(ring);

    const group = new THREE.Group();
    scene.add(group);

    function billboard(size){
      const spr = new THREE.Sprite(new THREE.SpriteMaterial({transparent:true}));
      spr.scale.set(size,size,1);
      return spr;
    }
    const avatarSprite = billboard(2.1); avatarSprite.position.set(0,0.55,0);
    const hatSprite = billboard(1.0); hatSprite.position.set(0,1.7,0.05);
    const vehicleSprite = billboard(1.4); vehicleSprite.position.set(1.2,-0.2,-0.25);
    const foodSprite = billboard(0.65); foodSprite.position.set(-1.15,0.0,0.15);
    group.add(avatarSprite, hatSprite, vehicleSprite, foodSprite);

    three = {renderer, scene, camera, group, avatarSprite, hatSprite, vehicleSprite, foodSprite, dragging:false, lastX:0, rotY:0.5};

    canvas.addEventListener('pointerdown', e=>{ three.dragging = true; three.lastX = e.clientX; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointerup', ()=>{ three.dragging = false; });
    canvas.addEventListener('pointercancel', ()=>{ three.dragging = false; });
    canvas.addEventListener('pointermove', e=>{
      if(!three.dragging) return;
      const dx = e.clientX - three.lastX; three.lastX = e.clientX;
      three.rotY += dx*0.012;
    });

    updateHeroStage();
    resizeHeroStage();
    requestAnimationFrame(animateHeroStage);
  }catch(e){
    three = null;
    heroStageEl.classList.add('stage-fallback');
    $('#hero-fallback').hidden = false;
  }
}

function resizeHeroStage(){
  if(!three) return;
  const canvas = three.renderer.domElement;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if(!w || !h) return;
  three.renderer.setSize(w, h, false);
  three.camera.aspect = w/h;
  three.camera.updateProjectionMatrix();
}
addEventListener('resize', resizeHeroStage);

function animateHeroStage(){
  if(!three) return;
  requestAnimationFrame(animateHeroStage);
  if(heroStageEl.hidden) return;
  if(!three.dragging && !reduceMotion){ three.rotY += 0.006; }
  three.group.rotation.y = three.rotY;
  three.renderer.render(three.scene, three.camera);
}

function updateHeroStage(){
  $('#hero-fallback-avatar').textContent = state.avatar;
  $('#hero-fallback-gear').textContent = gearIcons();
  if(!three) return;
  three.avatarSprite.material.map = makeEmojiTexture(state.avatar, 160);
  three.avatarSprite.material.needsUpdate = true;

  const hat = equippedItem('sombreros');
  three.hatSprite.visible = !!hat;
  if(hat){ three.hatSprite.material.map = makeEmojiTexture(hat.icon, 120); three.hatSprite.material.needsUpdate = true; }

  const veh = equippedItem('vehiculos');
  three.vehicleSprite.visible = !!veh;
  if(veh){ three.vehicleSprite.material.map = makeEmojiTexture(veh.icon, 140); three.vehicleSprite.material.needsUpdate = true; }

  const food = equippedItem('comida');
  three.foodSprite.visible = !!food;
  if(food){ three.foodSprite.material.map = makeEmojiTexture(food.icon, 100); three.foodSprite.material.needsUpdate = true; }
}

function setHeroStageVisible(show){
  heroStageEl.hidden = !show;
  if(show) requestAnimationFrame(resizeHeroStage);
}

/* ---------------- pantalla de bienvenida ---------------- */
function initWelcome(){
  const grid = $('#avatar-grid');
  grid.innerHTML = '';
  AVATARS.forEach(av=>{
    const b = document.createElement('button');
    b.className = 'avatar-pick'+(av===state.avatar?' selected':'');
    b.textContent = av;
    b.setAttribute('aria-label','Elegir personaje '+av);
    b.onclick = ()=>{ state.avatar = av; sfx.click();
      [...grid.children].forEach(c=>c.classList.remove('selected'));
      b.classList.add('selected');
      updateHeroStage();
    };
    grid.appendChild(b);
  });
  const nameInput = $('#name-input');
  nameInput.value = state.name || '';
  $('#start-btn').onclick = ()=>{
    state.name = (nameInput.value||'Héroe').trim().slice(0,18) || 'Héroe';
    state.started = true;
    saveState(); sfx.click();
    renderHud();
    renderMap();
    showScreen('map');
  };
}

/* ---------------- pestañas inferiores ---------------- */
function initTabbar(){
  tabbar.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.onclick = ()=>{
      sfx.click();
      cancelActiveQuiz();
      const tab = btn.dataset.tab;
      if(tab === 'map'){ renderMap(); showScreen('map'); }
      else if(tab === 'shop'){ renderShop(); showScreen('shop'); }
      else if(tab === 'online'){ renderOnline(); showScreen('online'); }
    };
  });
}
function cancelActiveQuiz(){
  if(quizCtx && quizCtx.timer){ clearInterval(quizCtx.timer); }
}

/* ---------------- mapa de reinos ("Temas") ---------------- */
function starsHtml(count){
  let h = '';
  for(let i=0;i<3;i++) h += `<span class="star ${i<count?'on':''}">★</span>`;
  return h;
}
function renderMap(){
  const wrap = $('#map-path');
  wrap.innerHTML = '';
  let prevDone = true;
  REALMS.forEach(r=>{
    const unlocked = prevDone;
    const stars = state.stars[r.key]||0;
    const card = document.createElement('button');
    card.className = 'mode-card'+(unlocked?'':' locked')+(stars>0?' done':'');
    card.style.setProperty('--mode-color', r.color);
    if(!unlocked){ card.disabled = true; card.setAttribute('aria-disabled','true'); }
    card.innerHTML = `
      <div class="mode-icon">${unlocked? r.icon : '🔒'}</div>
      <div class="mode-name">${r.name}</div>
      <div class="mode-desc">${r.desc}</div>
      <div class="realm-stars">${starsHtml(stars)}</div>`;
    if(unlocked){ card.onclick = ()=>{ sfx.click(); openRealm(r.key); }; }
    wrap.appendChild(card);
    prevDone = stars > 0;
  });

  const allCleared = REALMS.every(r => (state.stars[r.key]||0) > 0);
  const bossBox = $('#boss-node');
  bossBox.className = 'boss-node'+(allCleared?' ready':'');
  bossBox.innerHTML = allCleared
    ? `<div style="font-size:40px;">🐉</div><h3>El Dragón Gramatical</h3><p class="footer-note" style="font-size:12.5px;">¡Enfréntate al reto final mixto!</p>
       <button class="btn btn-gold btn-block" id="boss-btn">${state.bossCleared? 'Jugar otra vez' : 'Iniciar batalla final'}</button>`
    : `<div style="font-size:36px; opacity:.5;">🐉</div><h3 style="color:var(--ink-dim);">El Dragón Gramatical</h3><p class="footer-note">Gana al menos una estrella en cada reino para desbloquear la batalla final.</p>`;
  if(allCleared){ $('#boss-btn').onclick = ()=>{ sfx.click(); startBoss(); }; }
}

function openRealm(key){
  if(key === 'irregular'){ startMemory(); return; }
  startQuiz(key);
}

/* ---------------- motor de preguntas ---------------- */
let quizCtx = null;

function sample(arr, n){
  const copy = arr.slice();
  for(let i=copy.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [copy[i],copy[j]]=[copy[j],copy[i]]; }
  return copy.slice(0, Math.min(n, copy.length));
}

function startQuiz(realmKey){
  const realm = REALMS.find(r=>r.key===realmKey);
  const pool = sample(QUESTIONS[realmKey], 8);
  quizCtx = {
    realmKey, realmName: realm.name, color:realm.color, questions:pool,
    idx:0, correctCount:0, lives:3, combo:0, timer:null, timeLeft:20,
    isBoss:false, isOnline:false, xpEarned:0, coinsEarned:0,
  };
  renderQuizChrome();
  askQuestion();
  showScreen('quiz');
}

function startBoss(){
  const mixed = [];
  Object.keys(QUESTIONS).forEach(k=>{ mixed.push(...sample(QUESTIONS[k], 2).map(x=>({...x, topic:k}))); });
  mixed.push(...sample(IRREGULAR_MCQ, 3).map(x=>({...x, topic:'irregular'})));
  quizCtx = {
    realmKey:'boss', realmName:'El Dragón Gramatical', color:'#FF6B8B',
    questions: sample(mixed, mixed.length),
    idx:0, correctCount:0, lives:3, combo:0, timer:null, timeLeft:20,
    isBoss:true, isOnline:false, hp:100, xpEarned:0, coinsEarned:0,
  };
  renderQuizChrome();
  askQuestion();
  showScreen('quiz');
}

function buildTopicPool(topicKey, count){
  if(topicKey === 'mixed'){
    const mixed = [];
    Object.keys(QUESTIONS).forEach(k=>{ mixed.push(...sample(QUESTIONS[k], 2).map(x=>({...x, topic:k}))); });
    mixed.push(...sample(IRREGULAR_MCQ, 2).map(x=>({...x, topic:'irregular'})));
    return sample(mixed, count);
  }
  return sample(QUESTIONS[topicKey], count);
}

function renderQuizChrome(){
  $('#quiz-dragon').hidden = !quizCtx.isBoss;
  $('#quiz-teambar-wrap').hidden = !quizCtx.isOnline;
  if(quizCtx.isBoss){ updateDragonHp(); }
  if(quizCtx.isOnline){ renderTeamBar(); }
}
function updateDragonHp(){
  $('#dragon-hpfill').style.width = Math.max(0,quizCtx.hp)+'%';
  $('#dragon-hplabel').textContent = 'Vida del dragón: '+Math.max(0,quizCtx.hp)+'%';
}

function renderHearts(){
  const wrap = $('#quiz-hearts'); wrap.innerHTML = '';
  for(let i=0;i<3;i++){
    const s = document.createElement('span');
    s.className = 'heart'+(i<quizCtx.lives? '':' lost');
    s.textContent = '❤️';
    wrap.appendChild(s);
  }
}
function renderDots(){
  const wrap = $('#quiz-dots'); wrap.innerHTML = '';
  quizCtx.questions.forEach((_,i)=>{
    const d = document.createElement('span');
    d.className = 'pdot'+(i===quizCtx.idx?' cur':(i<quizCtx.idx?' done':''));
    wrap.appendChild(d);
  });
}

function askQuestion(){
  clearInterval(quizCtx.timer);
  if(quizCtx.idx >= quizCtx.questions.length || quizCtx.lives<=0){
    finishQuiz();
    return;
  }
  const item = quizCtx.questions[quizCtx.idx];
  renderHearts(); renderDots();
  $('#quiz-topic').textContent = quizCtx.isBoss ? (REALMS.find(r=>r.key===item.topic)?.name || item.topic) : quizCtx.realmName;
  $('#quiz-question').textContent = item.text;
  $('#combo-chip').hidden = quizCtx.combo < 2;
  $('#combo-chip').textContent = '🔥 Racha x'+quizCtx.combo;

  const optWrap = $('#quiz-options');
  optWrap.innerHTML = '';
  const letters = ['A','B','C','D'];
  item.options.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.className = 'option-btn';
    b.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    b.onclick = ()=> answerQuestion(i, item, b, optWrap);
    optWrap.appendChild(b);
  });

  quizCtx.timeLeft = 20;
  updateTimerRing();
  quizCtx.timer = setInterval(()=>{
    quizCtx.timeLeft -= 1;
    updateTimerRing();
    if(quizCtx.timeLeft <= 0){
      clearInterval(quizCtx.timer);
      answerQuestion(-1, item, null, optWrap);
    }
  }, 1000);
}

function updateTimerRing(){
  const circle = $('#timer-ring-fg');
  const circumference = 2*Math.PI*20;
  const pct = Math.max(0, quizCtx.timeLeft/20);
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference*(1-pct);
  circle.style.stroke = pct < 0.25 ? 'var(--rose)' : 'var(--teal)';
  $('#timer-num').textContent = Math.max(0,quizCtx.timeLeft);
}

function answerQuestion(choice, item, btn, optWrap){
  clearInterval(quizCtx.timer);
  const buttons = [...optWrap.children];
  buttons.forEach(b=>b.disabled = true);
  const correct = choice === item.a;
  buttons[item.a].classList.add('correct');
  if(!correct && choice>=0 && btn) btn.classList.add('wrong');
  buttons.forEach((b,i)=>{ if(i!==item.a && i!==choice) b.classList.add('dim'); });

  if(correct){
    quizCtx.correctCount += 1;
    quizCtx.combo += 1;
    const speedBonus = Math.max(0, quizCtx.timeLeft) >= 12 ? 5 : 0;
    const comboBonus = quizCtx.combo >= 3 ? 5 : 0;
    const gained = 10 + speedBonus + comboBonus;
    quizCtx.xpEarned += gained;
    quizCtx.coinsEarned += 5;
    sfx.correct();
    if(btn){ const r = btn.getBoundingClientRect(); burst(r.left+r.width/2, r.top+r.height/2, null, 16); }
    if(quizCtx.isBoss){ quizCtx.hp -= Math.ceil(100/quizCtx.questions.length); updateDragonHp(); }
  } else {
    quizCtx.combo = 0;
    quizCtx.lives -= 1;
    sfx.wrong();
    if(quizCtx.isBoss){
      quizCtx.hp = Math.min(100, quizCtx.hp + 4);
      updateDragonHp();
      const d = $('#dragon-emoji'); d.classList.remove('hit'); void d.offsetWidth; d.classList.add('hit');
      sfx.hurt();
    }
  }
  renderHearts();
  if(quizCtx.isOnline) reportOnlineProgress(false);

  setTimeout(()=>{
    quizCtx.idx += 1;
    askQuestion();
  }, 950);
}

function finishQuiz(){
  const total = quizCtx.questions.length;
  const pct = total ? quizCtx.correctCount/total : 0;
  let stars = 0;
  if(pct >= 0.9) stars = 3; else if(pct >= 0.7) stars = 2; else if(pct >= 0.4) stars = 1;

  if(quizCtx.isOnline){
    reportOnlineProgress(true);
    grantXp(quizCtx.xpEarned);
    grantCoins(quizCtx.coinsEarned);
    showOnlineWaiting();
    return;
  }

  grantXp(quizCtx.xpEarned);
  grantCoins(quizCtx.coinsEarned);

  if(quizCtx.isBoss){
    const won = quizCtx.hp <= 0 || quizCtx.correctCount/total >= 0.5;
    showBossResult(won, quizCtx);
  } else {
    if(stars > (state.stars[quizCtx.realmKey]||0)){
      state.stars[quizCtx.realmKey] = stars;
      saveState();
    }
    showResult({
      title: stars>0 ? '¡Reino superado!' : '¡Sigue practicando!',
      stars, correct: quizCtx.correctCount, total,
      xp: quizCtx.xpEarned, coins: quizCtx.coinsEarned,
      onContinue: ()=>{ renderMap(); showScreen('map'); },
      onRetry: ()=>{ closeOverlay(); startQuiz(quizCtx.realmKey); },
    });
    if(stars>0){ sfx.win(); burstCenter([quizCtx.color,'#FFC857','#33E4C2']); }
  }
}

function showBossResult(won, ctx){
  if(won){ state.bossCleared = true; saveState(); sfx.win(); burstCenter(['#FF6B8B','#FFC857','#9B6BFF','#33E4C2']); }
  showResult({
    title: won ? '🐉 ¡Dragón derrotado!' : 'El dragón escapó...',
    stars: won ? 3 : 1,
    correct: ctx.correctCount, total: ctx.questions.length,
    xp: ctx.xpEarned, coins: ctx.coinsEarned,
    subtitle: won ? '¡Eres el campeón de la gramática de los Reinos!' : 'Repasa los reinos e inténtalo de nuevo — ¡tú puedes!',
    onContinue: ()=>{ renderMap(); showScreen('map'); },
    onRetry: ()=>{ closeOverlay(); startBoss(); },
  });
}

function showResult(opts){
  overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `
    <div class="card result-card">
      <h2 class="title-xl" style="font-size:22px;">${opts.title}</h2>
      ${opts.subtitle? `<p class="subtitle">${opts.subtitle}</p>` : ''}
      <div class="result-stars">${[0,1,2].map(i=>`<span class="star ${i<opts.stars?'on':''}">★</span>`).join('')}</div>
      <div class="result-row"><span>Respuestas correctas</span><strong>${opts.correct} / ${opts.total}</strong></div>
      <div class="result-row"><span>XP ganada</span><strong>+${opts.xp} ✨</strong></div>
      <div class="result-row"><span>Monedas ganadas</span><strong>+${opts.coins} 🪙</strong></div>
      <div style="display:flex; gap:10px; margin-top:18px;">
        <button class="btn btn-ghost btn-block" id="result-retry">Reintentar</button>
        <button class="btn btn-primary btn-block" id="result-continue">Continuar</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  $('#result-retry').onclick = ()=>{ closeOverlay(); opts.onRetry(); };
  $('#result-continue').onclick = ()=>{ closeOverlay(); opts.onContinue(); };
}
function closeOverlay(){ if(overlay){ overlay.remove(); overlay=null; } }

/* ---------------- juego de memoria (verbos irregulares) ---------------- */
let memCtx = null;

function startMemory(){
  const pairs = sample(IRREGULAR_PAIRS, 8);
  const cards = [];
  pairs.forEach((p,i)=>{
    cards.push({id:i+'a', pairId:i, label:p[0], kind:'base'});
    cards.push({id:i+'b', pairId:i, label:p[1], kind:'past'});
  });
  memCtx = { cards: sample(cards, cards.length), flipped:[], matched:0, moves:0, total:pairs.length, locked:false, startTime:Date.now() };
  renderMemory();
  showScreen('memory');
}

function renderMemory(){
  const grid = $('#memory-grid');
  grid.innerHTML = '';
  memCtx.cards.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'mem-card';
    el.innerHTML = `<div class="mem-inner">
        <div class="mem-face back">❓</div>
        <div class="mem-face front">${c.label}</div>
      </div>`;
    el.onclick = ()=> flipCard(c, el);
    c._el = el;
    grid.appendChild(el);
  });
  updateMemoryHud();
}
function updateMemoryHud(){
  $('#mem-moves').textContent = 'Movimientos: '+memCtx.moves;
  $('#mem-pairs').textContent = 'Parejas: '+memCtx.matched+' / '+memCtx.total;
}

function flipCard(card, el){
  if(memCtx.locked || el.classList.contains('flipped') || el.classList.contains('matched')) return;
  el.classList.add('flipped');
  sfx.click();
  memCtx.flipped.push({card, el});
  if(memCtx.flipped.length === 2){
    memCtx.moves += 1;
    updateMemoryHud();
    const [f1,f2] = memCtx.flipped;
    if(f1.card.pairId === f2.card.pairId && f1.card.id !== f2.card.id){
      memCtx.locked = true;
      setTimeout(()=>{
        f1.el.classList.add('matched'); f2.el.classList.add('matched');
        memCtx.matched += 1; memCtx.flipped = []; memCtx.locked = false;
        sfx.correct();
        const r = f2.el.getBoundingClientRect();
        burst(r.left+r.width/2, r.top+r.height/2, ['#FF9E4A','#FFC857'], 14);
        updateMemoryHud();
        if(memCtx.matched === memCtx.total) finishMemory();
      }, 500);
    } else {
      memCtx.locked = true;
      sfx.wrong();
      setTimeout(()=>{
        f1.el.classList.remove('flipped'); f2.el.classList.remove('flipped');
        memCtx.flipped = []; memCtx.locked = false;
      }, 750);
    }
  }
}

function finishMemory(){
  const efficiency = memCtx.moves / memCtx.total;
  let stars = 1;
  if(efficiency <= 1.5) stars = 3; else if(efficiency <= 2.4) stars = 2;
  const xp = 60, coins = 30;
  if(stars > (state.stars.irregular||0)){ state.stars.irregular = stars; saveState(); }
  grantXp(xp); grantCoins(coins);
  sfx.win(); burstCenter(['#FF9E4A','#FFC857','#33E4C2']);
  setTimeout(()=>{
    showResult({
      title:'¡Cuevas Irregulares superadas!', stars, correct:memCtx.total, total:memCtx.total,
      xp, coins,
      subtitle: 'Movimientos usados: '+memCtx.moves,
      onContinue: ()=>{ renderMap(); showScreen('map'); },
      onRetry: ()=>{ closeOverlay(); startMemory(); },
    });
  }, 400);
}

/* ---------------- Tienda ---------------- */
let shopTab = 'personajes';

function renderShop(){
  const tabsWrap = $('#shop-tabs');
  tabsWrap.innerHTML = '';
  SHOP_TABS.forEach(t=>{
    const b = document.createElement('button');
    b.className = 'shop-tab'+(t.key===shopTab?' active':'');
    b.innerHTML = `${t.icon} ${t.label}`;
    b.onclick = ()=>{ shopTab = t.key; sfx.click(); renderShop(); };
    tabsWrap.appendChild(b);
  });
  $('#shop-coins').textContent = state.coins;

  const grid = $('#shop-grid');
  grid.innerHTML = '';
  const items = SHOP[shopTab];
  const equippedField = shopTab === 'personajes' ? null : shopTab;
  items.forEach(item=>{
    const owned = isOwned(shopTab, item);
    const isEquipped = shopTab === 'personajes'
      ? state.avatar === item.icon
      : state.equipped[equippedField] === item.id;
    const card = document.createElement('button');
    card.className = 'shop-card'+(isEquipped?' equipped':'')+(!owned?' locked':'');
    card.innerHTML = `
      <div class="shop-icon">${item.icon}</div>
      <div class="shop-name">${item.name}</div>
      <div class="price-chip">${isEquipped? 'Puesto' : (owned? 'Tuyo' : (item.price===0? 'Gratis' : '🪙 '+item.price))}</div>
    `;
    card.onclick = ()=> handleShopClick(item, owned, isEquipped, equippedField);
    grid.appendChild(card);
  });
}

function handleShopClick(item, owned, isEquipped, equippedField){
  if(shopTab === 'personajes'){
    if(!owned){
      if(state.coins < item.price){ sfx.wrong(); toast('Te faltan monedas — ¡sigue jugando para ganar más! 🪙'); return; }
      state.coins -= item.price;
      state.inventory.personajes.push(item.id);
      sfx.buy();
    } else { sfx.click(); }
    state.avatar = item.icon;
    saveState(); renderHud(); renderShop(); updateHeroStage();
    return;
  }
  if(isEquipped){
    state.equipped[equippedField] = null;
    sfx.click();
  } else if(owned){
    state.equipped[equippedField] = item.id;
    sfx.click();
  } else {
    if(state.coins < item.price){ sfx.wrong(); toast('Te faltan monedas — ¡sigue jugando para ganar más! 🪙'); return; }
    state.coins -= item.price;
    state.inventory[equippedField].push(item.id);
    state.equipped[equippedField] = item.id;
    sfx.buy(); burstCenter(['#FFC857','#33E4C2']);
  }
  saveState(); renderHud(); renderShop(); updateHeroStage();
}

/* ---------------- Online: código de equipo (PeerJS, sin backend propio) ---------------- */

const PEER_PREFIX = 'grammarquest-';
let online = null; // {peer, isHost, code, conns:Map, players:Map, myId, questions, topicLabel}

function peerAvailable(){ return typeof window.Peer !== 'undefined'; }

function renderOnline(){
  if(online && online.myId){ renderOnlineLobby(); return; }
  $('#online-home').hidden = false;
  $('#online-lobby').hidden = true;
  $('#online-waiting').hidden = true;
}

function initOnlineScreen(){
  $('#online-create-btn').onclick = ()=>{
    sfx.click();
    const custom = $('#online-code-input').value.trim();
    createTeam(custom);
  };
  $('#online-join-btn').onclick = ()=>{
    sfx.click();
    const code = $('#online-code-input').value.trim();
    if(!code){ toast('Escribe el código de tu equipo primero.'); return; }
    joinTeam(code);
  };
  $('#online-leave-btn').onclick = ()=>{ sfx.click(); leaveTeam(); };
  $('#online-waiting-leave').onclick = ()=>{ sfx.click(); leaveTeam(); };
}

function genCode(){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s=''; for(let i=0;i<5;i++) s+=chars[Math.floor(Math.random()*chars.length)];
  return s;
}
function normalizeCode(raw){
  return (raw||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8);
}

function createTeam(customCode){
  const code = normalizeCode(customCode) || genCode();
  initPeer(code, true);
}
function joinTeam(rawCode){
  const code = normalizeCode(rawCode);
  if(!code){ toast('Ese código no es válido.'); return; }
  initPeer(code, false);
}

function initPeer(code, isHost){
  if(!peerAvailable()){
    toast('No se pudo activar el modo Online. Revisa tu conexión a internet.');
    return;
  }
  destroyOnline();
  online = {isHost, code, conns:new Map(), players:new Map(), myId:null, questions:null, topicLabel:'', challengeActive:false};
  toast(isHost ? 'Creando equipo…' : 'Conectando con el equipo…');

  let peer;
  try{
    peer = isHost ? new window.Peer(PEER_PREFIX+code) : new window.Peer();
  }catch(e){
    toast('No se pudo iniciar el modo Online en este navegador.');
    online = null; return;
  }
  online.peer = peer;

  peer.on('open', id=>{
    online.myId = id;
    if(isHost){
      online.players.set(id, Object.assign({id}, myProfile(), {correct:0, finished:false, isHost:true}));
      renderOnlineLobby();
    } else {
      const conn = peer.connect(PEER_PREFIX+code, {reliable:true});
      online.hostConn = conn;
      wireJoinerConn(conn);
    }
  });

  peer.on('connection', conn=>{ if(online && online.isHost) wireHostConn(conn); });

  peer.on('error', err=>{
    let msg = 'No se pudo conectar. Revisa tu conexión a internet.';
    if(err && err.type === 'unavailable-id') msg = 'Ese código de equipo ya está en uso — prueba con otro.';
    if(err && err.type === 'peer-unavailable') msg = 'No encontramos ningún equipo con ese código.';
    toast(msg);
    if(!online || !online.myId){ destroyOnline(); renderOnline(); }
  });
}

function wireHostConn(conn){
  online.conns.set(conn.peer, conn);
  conn.on('open', ()=>{
    conn.on('data', data=> handleHostData(conn, data));
  });
  conn.on('close', ()=>{
    online.conns.delete(conn.peer);
    online.players.delete(conn.peer);
    broadcastRoster();
    renderOnlineLobby();
  });
}
function handleHostData(conn, data){
  if(!online) return;
  if(data.type === 'hello'){
    online.players.set(conn.peer, Object.assign({id:conn.peer}, data.profile, {correct:0, finished:false, isHost:false}));
    broadcastRoster();
    renderOnlineLobby();
  } else if(data.type === 'progress'){
    const p = online.players.get(conn.peer);
    if(p){ p.correct = data.correct; p.finished = data.finished; broadcastTeam(); if(online.challengeActive) renderTeamBar(); checkAllFinished(); }
  }
}
function broadcastRoster(){
  if(!online || !online.isHost) return;
  const players = [...online.players.values()];
  online.conns.forEach(c=>{ try{ c.send({type:'roster', players}); }catch(e){} });
}
function broadcastTeam(){
  if(!online || !online.isHost) return;
  const players = [...online.players.values()];
  const sum = players.reduce((a,p)=>a+p.correct,0);
  const total = players.length*8;
  online.conns.forEach(c=>{ try{ c.send({type:'team', players, sum, total}); }catch(e){} });
}

function wireJoinerConn(conn){
  conn.on('open', ()=>{ conn.send({type:'hello', profile: myProfile()}); });
  conn.on('data', data=> handleJoinerData(data));
  conn.on('close', ()=>{
    if(online){
      toast('Se perdió la conexión con el equipo.');
      cancelActiveQuiz();
      destroyOnline();
      renderOnline();
      showScreen('online');
    }
  });
}
function handleJoinerData(data){
  if(!online) return;
  if(data.type === 'roster'){
    online.players = new Map(data.players.map(p=>[p.id,p]));
    renderOnlineLobby();
  } else if(data.type === 'team'){
    online.players = new Map(data.players.map(p=>[p.id,p]));
    if(online.challengeActive) renderTeamBar();
  } else if(data.type === 'start'){
    online.questions = data.questions;
    online.topicLabel = data.topicLabel;
    beginOnlineChallenge();
  } else if(data.type === 'end'){
    online.challengeActive = false;
    showOnlineEnd(data);
  }
}

function currentPlayers(){ return online ? [...online.players.values()] : []; }

function renderOnlineLobby(){
  $('#online-home').hidden = true;
  $('#online-waiting').hidden = true;
  $('#online-lobby').hidden = false;
  $('#online-code-display').textContent = online.code;

  const roster = $('#online-roster');
  roster.innerHTML = '';
  currentPlayers().forEach(p=>{
    const row = document.createElement('div');
    row.className = 'roster-row';
    row.innerHTML = `<span class="roster-avatar">${p.avatar}</span>
      <span class="roster-name">${p.name}${p.isHost? ' <span class="roster-tag">Anfitrión</span>':''}</span>
      <span class="roster-gear">${p.gear||''}</span>`;
    roster.appendChild(row);
  });

  const topicWrap = $('#online-topic-picker');
  const startBtn = $('#online-start-btn');
  if(online.isHost){
    topicWrap.hidden = false;
    if(!topicWrap.dataset.built){
      topicWrap.innerHTML = '<div class="field-label">Elige el tema del reto</div><div class="topic-chips" id="topic-chips"></div>';
      const chipsWrap = topicWrap.querySelector('#topic-chips');
      const options = [...REALMS.map(r=>({key:r.key, label:r.name})), {key:'mixed', label:'Mixto (todos los temas)'}];
      let selected = 'mixed';
      options.forEach(o=>{
        const chip = document.createElement('button');
        chip.className = 'topic-chip'+(o.key===selected?' active':'');
        chip.textContent = o.label;
        chip.onclick = ()=>{ selected = o.key; topicWrap.dataset.selected = o.key; sfx.click();
          [...chipsWrap.children].forEach(c=>c.classList.remove('active'));
          chip.classList.add('active');
        };
        chipsWrap.appendChild(chip);
      });
      topicWrap.dataset.built = '1';
      topicWrap.dataset.selected = selected;
    }
    startBtn.hidden = false;
    startBtn.textContent = 'Comenzar reto de equipo';
    startBtn.onclick = ()=>{ sfx.click(); hostStartChallenge(topicWrap.dataset.selected || 'mixed'); };
  } else {
    topicWrap.hidden = true;
    startBtn.hidden = true;
  }
}

function hostStartChallenge(topicKey){
  if(!online || !online.isHost) return;
  const label = topicKey==='mixed' ? 'Reto mixto' : (REALMS.find(r=>r.key===topicKey)?.name || topicKey);
  const questions = buildTopicPool(topicKey, 8);
  online.questions = questions;
  online.topicLabel = label;
  online.players.forEach(p=>{ p.correct = 0; p.finished = false; });
  online.conns.forEach(c=>{ try{ c.send({type:'start', questions, topicLabel:label}); }catch(e){} });
  beginOnlineChallenge();
}

function beginOnlineChallenge(){
  online.challengeActive = true;
  quizCtx = {
    realmKey:'online', realmName: online.topicLabel || 'Reto en equipo', color:'#33E4C2',
    questions: online.questions, idx:0, correctCount:0, lives:3, combo:0, timer:null, timeLeft:20,
    isBoss:false, isOnline:true, xpEarned:0, coinsEarned:0,
  };
  renderQuizChrome();
  askQuestion();
  showScreen('quiz');
}

function reportOnlineProgress(finished){
  if(!online) return;
  if(online.isHost){
    const me = online.players.get(online.myId);
    if(me){ me.correct = quizCtx.correctCount; me.finished = finished; }
    broadcastTeam();
    renderTeamBar();
    checkAllFinished();
  } else if(online.hostConn){
    try{ online.hostConn.send({type:'progress', correct:quizCtx.correctCount, finished}); }catch(e){}
  }
}

function renderTeamBar(){
  const wrap = $('#quiz-teambar-wrap');
  if(wrap.hidden) return;
  const players = currentPlayers();
  const sum = players.reduce((a,p)=>a+(p.correct||0),0);
  const total = Math.max(1, players.length*8);
  const pct = Math.min(100, Math.round((sum/total)*100));
  $('#quiz-teambar-fill').style.width = pct+'%';
  $('#quiz-teambar-label').textContent = 'Equipo: '+sum+' / '+total+' respuestas correctas';
}

function checkAllFinished(){
  if(!online || !online.isHost || !online.challengeActive) return;
  const players = currentPlayers();
  if(players.length && players.every(p=>p.finished)){
    hostEndChallenge();
  }
}

function hostEndChallenge(){
  if(!online || !online.isHost) return;
  online.challengeActive = false;
  const players = currentPlayers();
  const sum = players.reduce((a,p)=>a+(p.correct||0),0);
  const total = players.length*8;
  const payload = {type:'end', players, sum, total};
  online.conns.forEach(c=>{ try{ c.send(payload); }catch(e){} });
  showOnlineEnd(payload);
}

function showOnlineWaiting(){
  screens.quiz.hidden = true;
  $('#online-home').hidden = true;
  $('#online-lobby').hidden = true;
  $('#online-waiting').hidden = false;
  showScreen('online');
  if(online && online.isHost) checkAllFinished();
}

function showOnlineEnd(payload){
  const pct = payload.total ? payload.sum/payload.total : 0;
  let stars = 0;
  if(pct >= 0.9) stars = 3; else if(pct >= 0.7) stars = 2; else if(pct >= 0.4) stars = 1;
  const me = payload.players.find(p=>p.id === online.myId) || {correct:0};
  sfx.win(); burstCenter(['#33E4C2','#FFC857','#9B6BFF']);
  showResult({
    title: stars>0 ? '¡Reto en equipo superado!' : 'El equipo necesita más práctica',
    subtitle: 'Entre todos sumaron '+payload.sum+' / '+payload.total+' respuestas correctas.',
    stars, correct: me.correct||0, total: 8,
    xp: 0, coins: 0,
    onContinue: ()=>{ renderOnlineLobby(); showScreen('online'); },
    onRetry: ()=>{ closeOverlay(); renderOnlineLobby(); showScreen('online'); },
  });
}

function leaveTeam(){
  destroyOnline();
  renderOnline();
}
function destroyOnline(){
  if(online && online.peer){ try{ online.peer.destroy(); }catch(e){} }
  online = null;
}

/* ---------------- arranque ---------------- */
function bootUI(){
  $('#hud-mute').onclick = ()=>{ state.muted = !state.muted; saveState(); renderHud(); sfx.click(); };
  initWelcome();
  initTabbar();
  initOnlineScreen();
  initHeroStage();
  renderHud();
  if(state.started){ renderMap(); showScreen('map'); }
  else { showScreen('welcome'); }
}

function start(initialData){
  if(initialData && typeof initialData === 'object' && Object.keys(initialData).length){
    state = Object.assign(defaultState(), initialData);
  }
  bootUI();

  if(window.claude && window.claude.hot){
    try{ window.claude.hot.snapshot(()=> state); }catch(e){}
  }
}

if(window.claude && window.claude.hot && window.claude.hot.ready){
  window.claude.hot.ready(start);
} else {
  start(window.claude && window.claude.hot ? window.claude.hot.data : null);
}

})();
