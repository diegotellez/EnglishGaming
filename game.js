/* ============================================================
   GrammarQuest — El Gran Espectáculo del Inglés
   Motor del juego + banco de preguntas. Sin build, un solo archivo.
   Las preguntas del quiz quedan en inglés (es lo que se enseña);
   todo el menú y la navegación están en español.
   ============================================================ */
(function(){
"use strict";

/* ---------------- contenido: atracciones y preguntas ---------------- */

const REALMS = [
  {key:'present',    name:'El Carnaval del Presente',   icon:'🎪', color:'#1F7A68', desc:'Presente simple y continuo'},
  {key:'past',        name:'El Cine Mudo del Pasado',    icon:'🎞️', color:'#8B5E2E', desc:'Pasado simple y continuo'},
  {key:'passive',     name:'El Teatro de Marionetas',    icon:'🎭', color:'#6B3FA0', desc:'Voz pasiva'},
  {key:'adjectives',  name:'El Circo de los Adjetivos',  icon:'🎠', color:'#C4293D', desc:'Comparativos y superlativos'},
  {key:'regular',     name:'La Fábrica de Tinta',        icon:'🏭', color:'#1F5FA8', desc:'Verbos regulares (-ed)'},
  {key:'irregular',   name:'El Tren Fantasma',           icon:'🎢', color:'#B8621B', desc:'Verbos irregulares — memoria'},
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

/* ---------------- Coach: consejos por tema y guía de dudas ---------------- */

const TOPIC_TIPS = {
  present: 'Usa el presente simple para hábitos y rutinas (I play, she plays — no olvides la -s en la 3ª persona). Usa el presente continuo (am/is/are + -ing) para algo que pasa justo ahora: "She is playing right now".',
  past: 'El pasado simple describe una acción terminada (I visited, she went). El pasado continuo (was/were + -ing) describe una acción en progreso interrumpida por otra: "I was walking when it started to rain".',
  passive: 'La voz pasiva se forma con be + participio pasado, y el objeto de la acción pasa a ser el sujeto: "Cats chase mice" → "Mice are chased by cats". En pasado usa was/were + participio.',
  adjectives: 'Adjetivos cortos: añade -er/-est (tall→taller→the tallest). Adjetivos largos: usa more/the most (interesting→more interesting). El orden es: opinión, tamaño, edad, forma, color, origen, material.',
  regular: 'Se forma agregando -ed (walk→walked). Si termina en "e", solo agrega -d (like→liked). Si termina en consonante+y, cambia a -ied (study→studied). Si es una sílaba corta (CVC), duplica la consonante (stop→stopped).',
  irregular: 'No siguen una regla fija — hay que memorizarlos de a poco. Algunos muy comunes: go→went, see→saw, eat→ate, have→had, take→took, buy→bought. Practica con el minijuego de memoria del Tren Fantasma.',
};

const FAQ_TIPS = [
  {id:'present-simple', title:'Presente simple', keywords:['presente simple','present simple','rutina','habito','hábito','siempre','every day'],
    body:'Se usa para hábitos, rutinas y hechos generales: "I play football every Sunday." En 3ª persona (he/she/it) se agrega -s: "She plays football."'},
  {id:'present-continuous', title:'Presente continuo', keywords:['presente continuo','present continuous','-ing','ahora mismo','right now'],
    body:'Se usa para algo que está pasando en este momento: am/is/are + verbo-ing. "I am studying right now." "They are having dinner."'},
  {id:'past-simple', title:'Pasado simple', keywords:['pasado simple','past simple','ayer','yesterday'],
    body:'Describe una acción terminada en el pasado. Regulares: verbo + -ed (walked). Irregulares tienen su propia forma (went, saw, ate). Negativo: didn\'t + verbo base.'},
  {id:'past-continuous', title:'Pasado continuo', keywords:['pasado continuo','past continuous','was were ing'],
    body:'Describe una acción en progreso en el pasado, muchas veces interrumpida por otra: was/were + verbo-ing. "I was walking home when it started to rain."'},
  {id:'passive-voice', title:'Voz pasiva', keywords:['voz pasiva','passive voice','pasiva','by'],
    body:'El objeto de la acción se convierte en sujeto: be + participio pasado. "Shakespeare wrote Hamlet" → "Hamlet was written by Shakespeare."'},
  {id:'comparatives', title:'Comparativos', keywords:['comparativo','comparative','er than','more than','mas que'],
    body:'Adjetivos cortos: -er + than (taller than). Adjetivos largos: more + than (more interesting than). Irregulares: good→better, bad→worse.'},
  {id:'superlatives', title:'Superlativos', keywords:['superlativo','superlative','the est','the most'],
    body:'Adjetivos cortos: the + -est (the tallest). Adjetivos largos: the most + adjetivo (the most expensive). Irregulares: good→the best, bad→the worst.'},
  {id:'adj-order', title:'Orden de los adjetivos', keywords:['orden de adjetivos','adjective order'],
    body:'El orden habitual es: opinión, tamaño, edad, forma, color, origen, material + sustantivo. Ejemplo: "a beautiful old wooden house."'},
  {id:'regular-verbs', title:'Verbos regulares', keywords:['verbos regulares','regular verbs','-ed'],
    body:'Se forman agregando -ed: walk→walked. Si termina en "e": +d (like→liked). Consonante+y → -ied (study→studied). Sílaba corta CVC: duplica consonante (stop→stopped).'},
  {id:'irregular-verbs', title:'Verbos irregulares', keywords:['verbos irregulares','irregular verbs'],
    body:'No siguen una regla — se memorizan. Muy comunes: go→went, see→saw, have→had, take→took, buy→bought, think→thought.'},
  {id:'do-does', title:'¿Do o Does?', keywords:['do does','do vs does','auxiliar presente'],
    body:'Usa "does" con he/she/it en presente ("Does she like pizza?") y "do" con el resto (I/you/we/they). El verbo principal queda en forma base.'},
  {id:'did', title:'¿Cuándo uso Did?', keywords:['did','pasado preguntas','pasado negativo'],
    body:'"Did" se usa para preguntas y negaciones en pasado simple, con cualquier sujeto: "Did you finish?" "She didn\'t go." El verbo principal vuelve a su forma base.'},
  {id:'articles', title:'Artículos: a, an, the', keywords:['articulo','artículo','a an the','articles'],
    body:'"A" antes de sonido consonante (a car), "an" antes de sonido vocal (an apple). "The" cuando ya sabemos de qué/quién hablamos.'},
  {id:'prep-time', title:'Preposiciones de tiempo: in / on / at', keywords:['preposiciones de tiempo','in on at','prepositions time'],
    body:'"In" con meses/años/estaciones (in July). "On" con días y fechas (on Monday). "At" con horas exactas (at 7 p.m.).'},
  {id:'plurals', title:'Plurales en inglés', keywords:['plural','plurales','plurals'],
    body:'La mayoría agrega -s (cat→cats). Termina en s/x/ch/sh: agrega -es (box→boxes). Consonante+y: -ies (city→cities). Hay irregulares: child→children, foot→feet.'},
  {id:'pronouns', title:'Pronombres sujeto y objeto', keywords:['pronombres','subject object pronouns','he him she her'],
    body:'Sujeto: I, you, he, she, it, we, they. Objeto: me, you, him, her, it, us, them. "She likes him" (ella = sujeto, él = objeto).'},
  {id:'there-is-are', title:'There is / There are', keywords:['there is there are','hay'],
    body:'"There is" con singular ("There is a book on the table"). "There are" con plural ("There are three books").'},
  {id:'some-any', title:'Some vs Any', keywords:['some any','some vs any'],
    body:'"Some" en oraciones afirmativas ("I have some money"). "Any" en negativas y preguntas ("I don\'t have any money", "Do you have any money?").'},
  {id:'will-going-to', title:'Futuro: will vs going to', keywords:['will going to','futuro','future'],
    body:'"Going to" para planes ya decididos ("I\'m going to study tonight"). "Will" para decisiones espontáneas o predicciones ("I think it will rain").'},
  {id:'much-many', title:'Much vs Many', keywords:['mucho poco','much many'],
    body:'"Many" con sustantivos contables ("many books"). "Much" con sustantivos incontables ("much water"). En afirmativas también se usa "a lot of" para ambos.'},
];

function matchFAQ(query){
  const q = (query||'').toLowerCase().trim();
  if(!q) return [];
  const words = q.split(/\s+/).filter(w=>w.length>2);
  const scored = FAQ_TIPS.map(tip=>{
    let score = 0;
    const title = tip.title.toLowerCase(), body = tip.body.toLowerCase();
    tip.keywords.forEach(k=>{ if(q.includes(k) || k.includes(q)) score += 3; });
    if(title.includes(q)) score += 3;
    words.forEach(w=>{
      tip.keywords.forEach(k=>{ if(k.includes(w)) score += 1; });
      if(title.includes(w)) score += 1;
      if(body.includes(w)) score += 0.5;
    });
    return {tip, score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  return scored.slice(0,3).map(x=>x.tip);
}

/* ---------------- estado / guardado ---------------- */

const SAVE_KEY = 'grammarquest_save_v2';
const AVATARS = SHOP.personajes.filter(p=>p.price===0).map(p=>p.icon);

function defaultStatsByTopic(){
  const st = {};
  REALMS.forEach(r=>{ st[r.key] = {attempts:0, correct:0}; });
  return st;
}
function defaultState(){
  return {
    name:'', avatar:AVATARS[0], level:1, xp:0, coins:0,
    stars:{present:0,past:0,passive:0,adjectives:0,regular:0,irregular:0},
    bossCleared:false, muted:false, started:false,
    inventory:{personajes:[], sombreros:[], vehiculos:[], comida:[]},
    equipped:{personaje:null, sombreros:null, vehiculos:null, comida:null},
    stats:{byTopic: defaultStatsByTopic(), recentMistakes:[]},
    world:null,
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
    merged.stats = Object.assign(defaultState().stats, parsed.stats||{});
    merged.stats.byTopic = Object.assign(defaultStatsByTopic(), (parsed.stats||{}).byTopic||{});
    merged.stats.recentMistakes = (parsed.stats||{}).recentMistakes || [];
    return merged;
  }catch(e){ return defaultState(); }
}
function saveState(){
  try{ localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }catch(e){ /* modo privado, etc */ }
}
let state = loadState();

function ensureTopicStats(key){
  if(!state.stats.byTopic[key]) state.stats.byTopic[key] = {attempts:0, correct:0};
  return state.stats.byTopic[key];
}
function recordAnswer(topicKey, wasCorrect, detail){
  const st = ensureTopicStats(topicKey);
  st.attempts += 1;
  if(wasCorrect){ st.correct += 1; }
  else if(detail){
    state.stats.recentMistakes.unshift(Object.assign({topic:topicKey, ts:Date.now()}, detail));
    state.stats.recentMistakes = state.stats.recentMistakes.slice(0, 12);
  }
  saveState();
}

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
  colors = colors || ['#C4293D','#1F7A68','#D9A429','#D94F68'];
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
  coach: $('#screen-coach'),
  world: $('#screen-world'),
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

/* ---------------- personaje 2D estilo cartoon vintage ---------------- */
const heroStageEl = $('#hero-stage');
let heroJumpTimer = null;

const CHAR_TINTS = {
  wizard:'#9B6BFF', hero:'#FF6B8B', ninja:'#4B4B5A', elf:'#33E4C2',
  vampire:'#8E2A52', villain:'#5B3AA0', fairy:'#FFB3DE', dragonhero:'#2ECC71',
  unicorn:'#FF9ED2', robot:'#9AA5B1', genie:'#4FD1C5', dino:'#52C41A',
  zombie:'#7CB518', wolf:'#6B7280', alien:'#34D399', king:'#FFC857',
};
function currentCharTint(){
  const item = SHOP.personajes.find(p=>p.icon===state.avatar);
  return (item && CHAR_TINTS[item.id]) || '#FFD9A0';
}
function escXml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

function buildHeroSVG(){
  const tint = currentCharTint();
  const hat = equippedItem('sombreros');
  const veh = equippedItem('vehiculos');
  const food = equippedItem('comida');
  return `<svg viewBox="0 -16 260 236" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tu personaje">
    <defs>
      <radialGradient id="hero-vg" cx="50%" cy="34%" r="75%">
        <stop offset="55%" stop-color="#000" stop-opacity="0"/>
        <stop offset="100%" stop-color="#3a2410" stop-opacity=".4"/>
      </radialGradient>
    </defs>
    <rect x="0" y="-16" width="260" height="236" fill="#F6E9CF"/>
    <ellipse cx="130" cy="204" rx="52" ry="9" fill="#000" opacity=".16"/>
    ${veh ? `<text x="210" y="186" font-size="34" text-anchor="middle" dominant-baseline="central">${escXml(veh.icon)}</text>` : ''}
    <g id="charGroup">
      <rect x="112" y="163" width="13" height="36" rx="6.5" fill="${tint}" stroke="#1a1410" stroke-width="4"/>
      <rect x="135" y="163" width="13" height="36" rx="6.5" fill="${tint}" stroke="#1a1410" stroke-width="4"/>
      <ellipse cx="118" cy="200" rx="13" ry="7" fill="#1a1410"/>
      <ellipse cx="142" cy="200" rx="13" ry="7" fill="#1a1410"/>
      <path d="M98,128 C78,132 66,142 62,152" fill="none" stroke="#1a1410" stroke-width="15" stroke-linecap="round"/>
      <path d="M98,128 C78,132 66,142 62,152" fill="none" stroke="${tint}" stroke-width="9" stroke-linecap="round"/>
      <path d="M162,128 C182,132 194,142 198,152" fill="none" stroke="#1a1410" stroke-width="15" stroke-linecap="round"/>
      <path d="M162,128 C182,132 194,142 198,152" fill="none" stroke="${tint}" stroke-width="9" stroke-linecap="round"/>
      <circle cx="60" cy="156" r="15" fill="#FFF7E8" stroke="#1a1410" stroke-width="4"/>
      <line x1="52" y1="162" x2="57" y2="167" stroke="#1a1410" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="164" x2="60" y2="170" stroke="#1a1410" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="200" cy="156" r="15" fill="#FFF7E8" stroke="#1a1410" stroke-width="4"/>
      <line x1="205" y1="162" x2="200" y2="167" stroke="#1a1410" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="200" y1="164" x2="200" y2="170" stroke="#1a1410" stroke-width="2.5" stroke-linecap="round"/>
      ${food ? `<text x="203" y="140" font-size="26" text-anchor="middle" dominant-baseline="central">${escXml(food.icon)}</text>` : ''}
      <ellipse cx="130" cy="140" rx="40" ry="46" fill="${tint}" stroke="#1a1410" stroke-width="5"/>
      <path d="M118,116 L130,128 L142,116 L136,109 L124,109 Z" fill="#E63946" stroke="#1a1410" stroke-width="3"/>
      <circle cx="130" cy="76" r="47" fill="#FFF7E8" stroke="#1a1410" stroke-width="5"/>
      <text x="130" y="80" font-size="54" text-anchor="middle" dominant-baseline="central">${escXml(state.avatar)}</text>
      ${hat ? `<text x="130" y="36" font-size="40" text-anchor="middle" dominant-baseline="central" transform="rotate(-8 130 36)">${escXml(hat.icon)}</text>` : ''}
    </g>
    <rect x="0" y="-16" width="260" height="236" fill="url(#hero-vg)"/>
  </svg>`;
}

function initHeroStage(){
  const scene = $('#hero-scene');
  scene.addEventListener('click', ()=>{
    sfx.click();
    scene.classList.remove('jump'); void scene.offsetWidth; scene.classList.add('jump');
    clearTimeout(heroJumpTimer);
    heroJumpTimer = setTimeout(()=> scene.classList.remove('jump'), 550);
  });
  updateHeroStage();
}
function updateHeroStage(){
  $('#hero-scene').innerHTML = buildHeroSVG();
}
function setHeroStageVisible(show){
  heroStageEl.hidden = !show;
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
      else if(tab === 'coach'){ renderCoach(); showScreen('coach'); }
      else if(tab === 'world'){ renderWorld(); showScreen('world'); }
    };
  });
}
function cancelActiveQuiz(){
  if(quizCtx && quizCtx.timer){ clearInterval(quizCtx.timer); }
}

/* ---------------- atracciones ("Temas") ---------------- */
function starsHtml(count){
  let h = '';
  for(let i=0;i<3;i++) h += `<span class="star ${i<count?'on':''}">★</span>`;
  return h;
}
function renderMap(){
  const wrap = $('#map-path');
  wrap.innerHTML = '';
  REALMS.forEach(r=>{
    const stars = state.stars[r.key]||0;
    const card = document.createElement('button');
    card.className = 'mode-card'+(stars>0?' done':'');
    card.style.setProperty('--mode-color', r.color);
    card.innerHTML = `
      <div class="mode-icon">${r.icon}</div>
      <div class="mode-name">${r.name}</div>
      <div class="mode-desc">${r.desc}</div>
      <div class="realm-stars">${starsHtml(stars)}</div>`;
    card.onclick = ()=>{ sfx.click(); quizReturnScreen = 'map'; openRealm(r.key); };
    wrap.appendChild(card);
  });

  const bossBox = $('#boss-node');
  bossBox.className = 'boss-node ready';
  bossBox.innerHTML = `<div style="font-size:40px;">🖋️</div><h3>El Profesor Tinta</h3><p class="footer-note" style="font-size:12.5px;">¡Enfréntate al reto final mixto!</p>
       <button class="btn btn-gold btn-block" id="boss-btn">${state.bossCleared? 'Jugar otra vez' : 'Iniciar batalla final'}</button>`;
  $('#boss-btn').onclick = ()=>{ sfx.click(); quizReturnScreen = 'map'; startBoss(); };
}

function openRealm(key){
  if(key === 'irregular'){ startMemory(); return; }
  startQuiz(key);
}

/* ---------------- motor de preguntas ---------------- */
let quizCtx = null;
let quizReturnScreen = 'map';
function goToQuizReturnScreen(){
  if(quizReturnScreen === 'world'){ renderWorld(); showScreen('world'); }
  else { renderMap(); showScreen('map'); }
}

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
    realmKey:'boss', realmName:'El Profesor Tinta', color:'#8E1B2B',
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
  $('#dragon-hplabel').textContent = 'Vida de Profesor Tinta: '+Math.max(0,quizCtx.hp)+'%';
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

  const topicKey = item.topic || quizCtx.realmKey;
  recordAnswer(topicKey, correct, correct ? null : {
    question: item.text,
    chosen: choice>=0 ? item.options[choice] : '(sin responder — se acabó el tiempo)',
    correctAnswer: item.options[item.a],
  });

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
      title: stars>0 ? '¡Atracción superada!' : '¡Sigue practicando!',
      stars, correct: quizCtx.correctCount, total,
      xp: quizCtx.xpEarned, coins: quizCtx.coinsEarned,
      onContinue: goToQuizReturnScreen,
      onRetry: ()=>{ closeOverlay(); startQuiz(quizCtx.realmKey); },
    });
    if(stars>0){ sfx.win(); burstCenter([quizCtx.color,'#D9A429','#1F7A68']); }
  }
}

function showBossResult(won, ctx){
  if(won){ state.bossCleared = true; saveState(); sfx.win(); burstCenter(['#8E1B2B','#D9A429','#C4293D','#1F7A68']); }
  showResult({
    title: won ? '🖋️ ¡Profesor Tinta derrotado!' : 'Profesor Tinta escapó entre las páginas...',
    stars: won ? 3 : 1,
    correct: ctx.correctCount, total: ctx.questions.length,
    xp: ctx.xpEarned, coins: ctx.coinsEarned,
    subtitle: won ? '¡Eres el campeón de la gramática del Gran Espectáculo!' : 'Repasa las atracciones e inténtalo de nuevo — ¡tú puedes!',
    onContinue: goToQuizReturnScreen,
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
        recordAnswer('irregular', true);
        const r = f2.el.getBoundingClientRect();
        burst(r.left+r.width/2, r.top+r.height/2, ['#B8621B','#D9A429'], 14);
        updateMemoryHud();
        if(memCtx.matched === memCtx.total) finishMemory();
      }, 500);
    } else {
      memCtx.locked = true;
      sfx.wrong();
      recordAnswer('irregular', false, {
        question:'Memoria: '+f1.card.label+' / '+f2.card.label,
        chosen:'no forman pareja',
        correctAnswer:'busca la forma pasada correcta',
      });
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
  sfx.win(); burstCenter(['#B8621B','#D9A429','#1F7A68']);
  setTimeout(()=>{
    showResult({
      title:'¡Tren Fantasma superado!', stars, correct:memCtx.total, total:memCtx.total,
      xp, coins,
      subtitle: 'Movimientos usados: '+memCtx.moves,
      onContinue: goToQuizReturnScreen,
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
    sfx.buy(); burstCenter(['#D9A429','#1F7A68']);
  }
  saveState(); renderHud(); renderShop(); updateHeroStage();
}

/* ---------------- Coach: rendimiento + ayuda de inglés ---------------- */

function renderCoach(){
  const statsWrap = $('#coach-stats');
  statsWrap.innerHTML = '';
  let weakest = null;
  REALMS.forEach(r=>{
    const st = ensureTopicStats(r.key);
    const pct = st.attempts ? Math.round((st.correct/st.attempts)*100) : null;
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.innerHTML = `
      <div class="stat-label">${r.icon} ${r.name}</div>
      <div class="stat-bar-line">
        <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct===null?0:pct}%; background:${r.color}"></div></div>
        <div class="stat-pct">${pct===null? '—' : pct+'%'}</div>
      </div>`;
    statsWrap.appendChild(row);
    if(st.attempts >= 3 && (weakest===null || pct < weakest.pct)){
      weakest = {key:r.key, name:r.name, pct, attempts:st.attempts};
    }
  });

  const insightWrap = $('#coach-insight');
  if(weakest){
    insightWrap.innerHTML = `
      <div class="card insight-card">
        <div class="eyebrow">🧠 Tu Coach recomienda</div>
        <h3 style="margin-top:4px;">Reforzar: ${weakest.name}</h3>
        <p class="subtitle" style="text-align:left;">Llevas ${weakest.pct}% de aciertos ahí (${weakest.attempts} preguntas respondidas). ${TOPIC_TIPS[weakest.key]}</p>
        <button class="btn btn-gold btn-block" id="coach-practice-btn">Practicar ahora</button>
      </div>`;
    $('#coach-practice-btn').onclick = ()=>{ sfx.click(); openRealm(weakest.key); };
  } else {
    insightWrap.innerHTML = `
      <div class="card insight-card">
        <div class="eyebrow">🧠 Tu Coach recomienda</div>
        <p class="subtitle" style="text-align:left;">Juega un poco más en cada tema (al menos 3 preguntas) para que tu Coach pueda detectar dónde necesitas reforzar.</p>
      </div>`;
  }

  const mistakesWrap = $('#coach-mistakes');
  const mistakes = state.stats.recentMistakes;
  if(!mistakes.length){
    mistakesWrap.innerHTML = '<p class="subtitle" style="text-align:left;">Aún no tienes errores registrados — ¡sigue jugando!</p>';
  } else {
    mistakesWrap.innerHTML = mistakes.map(m=>{
      const topicName = (REALMS.find(r=>r.key===m.topic)||{}).name || m.topic;
      return `<div class="mistake-row">
        <div class="mistake-topic">${topicName}</div>
        <div class="mistake-q">${m.question}</div>
        <div class="mistake-answers"><span class="wrong-ans">✗ ${m.chosen}</span><span class="right-ans">✓ ${m.correctAnswer}</span></div>
      </div>`;
    }).join('');
  }
}

/* ---------------- Mundo: mapa 2D (campo / pueblo / ciudad) ---------------- */

const ZONE_OF = {present:'pueblo', past:'ciudad', passive:'ciudad', adjectives:'pueblo', regular:'ciudad', irregular:'campo'};
const ZONE_ORDER = ['campo','pueblo','ciudad'];
const ZONE_GROUND = {campo:'#8FBF6B', pueblo:'#D9C08A', ciudad:'#B9B9B9'};

let world = null;
let worldLoopId = 0;
let worldSetupSelection = new Set();

function suggestedTopics(){
  return REALMS.map(r=>r.key).sort((a,b)=> ensureTopicStats(b).attempts - ensureTopicStats(a).attempts);
}

function initWorldScreen(){
  $('#world-build-btn').onclick = ()=>{
    sfx.click();
    state.world = {topics: [...worldSetupSelection]};
    saveState();
    showWorldMapView();
  };
  $('#world-edit-btn').onclick = ()=>{
    sfx.click();
    if(state.world && state.world.topics) worldSetupSelection = new Set(state.world.topics);
    showWorldSetupView();
  };
}

function renderWorld(){
  if(state.world && state.world.topics && state.world.topics.length >= 5){
    worldSetupSelection = new Set(state.world.topics);
    showWorldMapView();
  } else {
    worldSetupSelection = new Set();
    showWorldSetupView();
  }
}

function showWorldSetupView(){
  $('#world-setup').hidden = false;
  $('#world-map-wrap').hidden = true;
  renderWorldSetup();
}
function showWorldMapView(){
  $('#world-setup').hidden = true;
  $('#world-map-wrap').hidden = false;
  buildWorldMap([...worldSetupSelection]);
}

function renderWorldSetup(){
  const wrap = $('#world-topic-picker');
  wrap.innerHTML = '';
  if(worldSetupSelection.size === 0){
    const ranked = suggestedTopics();
    const hasData = REALMS.some(r=> ensureTopicStats(r.key).attempts > 0);
    const preset = hasData ? ranked.slice(0,5) : REALMS.map(r=>r.key);
    preset.forEach(k=>worldSetupSelection.add(k));
  }
  REALMS.forEach(r=>{
    const on = worldSetupSelection.has(r.key);
    const chip = document.createElement('button');
    chip.className = 'topic-chip'+(on?' active':'');
    chip.innerHTML = `${r.icon} ${r.name}`;
    chip.onclick = ()=>{
      sfx.click();
      if(on) worldSetupSelection.delete(r.key); else worldSetupSelection.add(r.key);
      renderWorldSetup();
    };
    wrap.appendChild(chip);
  });
  $('#world-count-label').textContent = worldSetupSelection.size+' / 6 temas elegidos (mínimo 5) — sugeridos según lo que más practicas en el Coach';
  $('#world-build-btn').disabled = worldSetupSelection.size < 5;
}

function drawTree(ctx,x,y){
  ctx.fillStyle = '#6B4226'; ctx.fillRect(x-6,y+20,12,30);
  ctx.beginPath(); ctx.arc(x,y,26,0,Math.PI*2); ctx.fillStyle='#3E7D4F'; ctx.fill();
  ctx.lineWidth=3; ctx.strokeStyle='#241A10'; ctx.stroke();
}
function drawHouse(ctx,x,y){
  ctx.fillStyle='#E8B96B'; ctx.fillRect(x-30,y+30,60,50);
  ctx.strokeStyle='#241A10'; ctx.lineWidth=3; ctx.strokeRect(x-30,y+30,60,50);
  ctx.beginPath(); ctx.moveTo(x-38,y+30); ctx.lineTo(x,y-10); ctx.lineTo(x+38,y+30); ctx.closePath();
  ctx.fillStyle='#8E1B2B'; ctx.fill(); ctx.stroke();
}
function drawBuilding(ctx,x,y,w,h){
  ctx.fillStyle='#D8D2C2'; ctx.fillRect(x,y,w,h);
  ctx.strokeStyle='#241A10'; ctx.lineWidth=3; ctx.strokeRect(x,y,w,h);
  ctx.fillStyle='#8A7358';
  for(let ry=y+14; ry<y+h-10; ry+=22){
    for(let rx=x+10; rx<x+w-10; rx+=20){ ctx.fillRect(rx,ry,10,12); }
  }
}
function drawNpc(ctx,n,active){
  ctx.save();
  ctx.beginPath(); ctx.ellipse(n.x, n.y+34, 20,7,0,0,Math.PI*2); ctx.fillStyle='rgba(0,0,0,.18)'; ctx.fill();
  ctx.beginPath(); ctx.arc(n.x, n.y, 26, 0, Math.PI*2);
  ctx.fillStyle = n.color; ctx.fill();
  ctx.lineWidth = active?5:3.5; ctx.strokeStyle = '#241A10'; ctx.stroke();
  ctx.font='26px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(n.icon, n.x, n.y+1);
  ctx.font='bold 11px Nunito, sans-serif'; ctx.fillStyle='#241A10';
  ctx.fillText(n.name.split(' ').slice(0,3).join(' '), n.x, n.y+48);
  ctx.restore();
}
function drawPlayer(ctx,p){
  ctx.save();
  ctx.beginPath(); ctx.ellipse(p.x,p.y+18,16,6,0,0,Math.PI*2); ctx.fillStyle='rgba(0,0,0,.2)'; ctx.fill();
  ctx.beginPath(); ctx.arc(p.x,p.y,20,0,Math.PI*2);
  ctx.fillStyle = currentCharTint(); ctx.fill();
  ctx.lineWidth=4; ctx.strokeStyle='#241A10'; ctx.stroke();
  ctx.font='22px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(state.avatar, p.x, p.y);
  ctx.restore();
}

function buildWorldMap(topics){
  const canvas = $('#world-canvas');
  const ctx = canvas.getContext('2d');

  const zones = {campo:[], pueblo:[], ciudad:[]};
  topics.forEach(k=> zones[ZONE_OF[k]].push(k));

  const SLOT_W = 220, PAD = 160;
  let x = 0;
  const zoneLayout = [];
  ZONE_ORDER.forEach(zone=>{
    const count = zones[zone].length;
    const width = Math.max(260, count*SLOT_W) + PAD;
    zoneLayout.push({zone, x0:x, width, topics:zones[zone]});
    x += width;
  });
  const bossX = x + 90;
  const totalWidth = Math.round(bossX + 220);

  canvas.width = totalWidth;
  canvas.height = 380;
  canvas.style.width = totalWidth+'px';
  canvas.style.height = '380px';

  const npcs = [];
  zoneLayout.forEach(zl=>{
    const n = zl.topics.length;
    zl.topics.forEach((key,i)=>{
      const realm = REALMS.find(r=>r.key===key);
      const slotW = zl.width/(n+1);
      npcs.push({
        key, name:realm.name, icon:realm.icon, color:realm.color,
        x: zl.x0 + slotW*(i+1), y: 246 + (i%2===0? -8:12),
      });
    });
  });
  npcs.push({key:'boss', name:'El Profesor Tinta', icon:'🖋️', color:'#8E1B2B', x:bossX, y:244, isBoss:true});

  worldLoopId += 1;
  const myLoopId = worldLoopId;
  world = {
    canvas, ctx, npcs, zoneLayout, totalWidth,
    player:{x:40, y:280, tx:40, ty:280},
    nearNpc:null,
  };

  const canvasClone = canvas.cloneNode(true);
  canvas.parentNode.replaceChild(canvasClone, canvas);
  world.canvas = canvasClone;
  world.ctx = canvasClone.getContext('2d');
  wireWorldInput(myLoopId);

  requestAnimationFrame(function tick(){ worldLoop(myLoopId, tick); });
}

function wireWorldInput(myLoopId){
  const canvas = world.canvas;
  canvas.addEventListener('click', e=>{
    if(myLoopId !== worldLoopId || !world) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width/rect.width, scaleY = canvas.height/rect.height;
    const cx = (e.clientX-rect.left)*scaleX, cy = (e.clientY-rect.top)*scaleY;
    const hit = world.npcs.find(n=> Math.hypot(n.x-cx, n.y-cy) < 34);
    if(hit){ openWorldDialogue(hit); return; }
    world.player.tx = Math.max(20, Math.min(world.totalWidth-20, cx));
    world.player.ty = Math.max(226, Math.min(340, cy));
  });
}

function worldLoop(id, tick){
  if(id !== worldLoopId) return;
  requestAnimationFrame(tick);
  if(!world || screens.world.hidden || $('#world-map-wrap').hidden) return;
  updateWorld();
  drawWorld();
}

function updateWorld(){
  const p = world.player;
  const dx = p.tx-p.x, dy = p.ty-p.y;
  const dist = Math.hypot(dx,dy);
  const speed = 3.4;
  if(dist > speed){ p.x += dx/dist*speed; p.y += dy/dist*speed; }
  else { p.x = p.tx; p.y = p.ty; }

  world.nearNpc = world.npcs.find(n=> Math.hypot(n.x-p.x, n.y-p.y) < 46) || null;

  const sc = $('#world-scroll');
  const targetScroll = p.x - sc.clientWidth/2;
  sc.scrollLeft = Math.max(0, Math.min(world.totalWidth-sc.clientWidth, targetScroll));
}

function drawWorld(){
  const {ctx, canvas} = world;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  world.zoneLayout.forEach(zl=>{
    ctx.fillStyle = ZONE_GROUND[zl.zone];
    ctx.fillRect(zl.x0, 0, zl.width, canvas.height);
    if(zl.zone === 'campo'){
      for(let i=30; i<zl.width; i+=95) drawTree(ctx, zl.x0+i, 185);
    } else if(zl.zone === 'pueblo'){
      for(let i=40; i<zl.width; i+=150) drawHouse(ctx, zl.x0+i, 140);
    } else {
      for(let i=20; i<zl.width; i+=110) drawBuilding(ctx, zl.x0+i, 55, 72, 175);
    }
  });
  ctx.fillStyle = '#3A2A22';
  ctx.fillRect(world.totalWidth-220, 0, 220, canvas.height);

  ctx.fillStyle = 'rgba(90,65,40,.55)';
  ctx.fillRect(0, 300, world.totalWidth, 46);

  world.npcs.forEach(n=> drawNpc(ctx, n, n===world.nearNpc));
  drawPlayer(ctx, world.player);

  if(world.nearNpc){
    ctx.save();
    ctx.font='bold 15px Nunito, sans-serif'; ctx.textAlign='center';
    ctx.fillStyle='#241A10';
    ctx.fillText('👆 Toca para hablar', world.player.x, world.player.y-42);
    ctx.restore();
  }
}

function openWorldDialogue(npc){
  sfx.click();
  const realm = REALMS.find(r=>r.key===npc.key);
  const overlay2 = document.createElement('div');
  overlay2.className = 'overlay';
  overlay2.innerHTML = `
    <div class="card result-card">
      <div class="hero-badge" style="font-size:40px;">${npc.icon}</div>
      <h2 class="title-xl" style="font-size:20px;">${npc.name}</h2>
      <p class="subtitle">${npc.isBoss? '¡Enfréntate al reto final mixto!' : (realm? realm.desc : '')}</p>
      <div style="display:flex; gap:10px; margin-top:14px;">
        <button class="btn btn-ghost btn-block" id="world-dlg-close">Seguir explorando</button>
        <button class="btn btn-primary btn-block" id="world-dlg-start">Comenzar reto</button>
      </div>
    </div>`;
  document.body.appendChild(overlay2);
  $('#world-dlg-close').onclick = ()=> overlay2.remove();
  $('#world-dlg-start').onclick = ()=>{
    overlay2.remove();
    quizReturnScreen = 'world';
    if(npc.isBoss) startBoss(); else openRealm(npc.key);
  };
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
    realmKey:'online', realmName: online.topicLabel || 'Reto en equipo', color:'#1F7A68',
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
  sfx.win(); burstCenter(['#1F7A68','#D9A429','#C4293D']);
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
  initWorldScreen();
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
