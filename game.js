/* ============================================================
   GrammarQuest — the Realms of English
   Self-contained game engine + question banks. No build step.
   ============================================================ */
(function(){
"use strict";

/* ---------------- content ---------------- */

const REALMS = [
  {key:'present',    name:'Present Village',   icon:'🏘️', color:'#33E4C2', desc:'Present Simple & Continuous'},
  {key:'past',        name:'Past Ruins',        icon:'🏛️', color:'#FFC857', desc:'Past Simple & Continuous'},
  {key:'passive',     name:'Passive Fortress',  icon:'🏰', color:'#9B6BFF', desc:'Passive Voice'},
  {key:'adjectives',  name:'Adjective Gardens', icon:'🌺', color:'#FF6B8B', desc:'Comparatives & Superlatives'},
  {key:'regular',     name:'Regular Forge',     icon:'⚒️', color:'#7DB2FF', desc:'Regular Verbs (-ed)'},
  {key:'irregular',   name:'Irregular Caves',   icon:'🔮', color:'#FF9E4A', desc:'Irregular Verbs — Memory'},
];

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

function q(text, options, answerIndex){ return {text, options, a:answerIndex}; }

/* ---------------- state ---------------- */

const SAVE_KEY = 'grammarquest_save_v1';
const AVATARS = ['🧙‍♀️','🦸','🥷','🧝','🧛','🦹','🧚','🐉'];

let state = loadState();

function defaultState(){
  return {
    name:'', avatar:AVATARS[0], level:1, xp:0, coins:0,
    stars:{present:0,past:0,passive:0,adjectives:0,regular:0,irregular:0},
    bossCleared:false, muted:false, started:false,
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){ return defaultState(); }
}
function saveState(){
  try{ localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }catch(e){ /* private mode etc */ }
}

/* ---------------- audio (synth, no files) ---------------- */

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
};

/* ---------------- fx: confetti ---------------- */

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
  setTimeout(()=>el.remove(), 1800);
}

/* ---------------- xp / rewards ---------------- */
function xpForLevel(lvl){ return lvl*120; }
function grantXp(amount){
  state.xp += amount;
  let leveled = false;
  while(state.xp >= xpForLevel(state.level)){
    state.xp -= xpForLevel(state.level);
    state.level += 1; leveled = true;
  }
  if(leveled){ toast('⭐ Level up! Now level '+state.level); sfx.win(); burstCenter(); }
  saveState(); renderHud();
}
function grantCoins(n){ state.coins += n; saveState(); renderHud(); }

/* ---------------- DOM refs ---------------- */
const $ = sel => document.querySelector(sel);
const hud = $('#hud');
const screens = {
  welcome: $('#screen-welcome'),
  map: $('#screen-map'),
  quiz: $('#screen-quiz'),
  memory: $('#screen-memory'),
};
let overlay = null;

function showScreen(name){
  Object.values(screens).forEach(s=>s.hidden = true);
  screens[name].hidden = false;
  window.scrollTo({top:0, behavior: reduceMotion ? 'auto' : 'smooth'});
}

function renderHud(){
  if(!state.started){ hud.hidden = true; return; }
  hud.hidden = false;
  $('#hud-avatar').textContent = state.avatar;
  $('#hud-name').textContent = state.name || 'Hero';
  $('#hud-level').textContent = 'Lv '+state.level;
  const pct = Math.min(100, Math.round((state.xp / xpForLevel(state.level))*100));
  $('#hud-xpfill').style.width = pct+'%';
  $('#hud-coins').textContent = state.coins;
  $('#hud-mute').textContent = state.muted ? '🔇' : '🔊';
}

/* ---------------- welcome screen ---------------- */
function initWelcome(){
  const grid = $('#avatar-grid');
  grid.innerHTML = '';
  AVATARS.forEach(av=>{
    const b = document.createElement('button');
    b.className = 'avatar-pick'+(av===state.avatar?' selected':'');
    b.textContent = av;
    b.setAttribute('aria-label','Choose avatar '+av);
    b.onclick = ()=>{ state.avatar = av; sfx.click();
      [...grid.children].forEach(c=>c.classList.remove('selected'));
      b.classList.add('selected');
    };
    grid.appendChild(b);
  });
  const nameInput = $('#name-input');
  nameInput.value = state.name || '';
  $('#start-btn').onclick = ()=>{
    state.name = (nameInput.value||'Hero').trim().slice(0,18) || 'Hero';
    state.started = true;
    saveState(); sfx.click();
    renderHud();
    renderMap();
    showScreen('map');
  };
}

/* ---------------- map screen ---------------- */
function starsHtml(count){
  let h = '';
  for(let i=0;i<3;i++) h += `<span class="star ${i<count?'on':''}">★</span>`;
  return h;
}
function renderMap(){
  const wrap = $('#map-path');
  wrap.innerHTML = '<div class="map-line"></div>';
  let prevDone = true;
  REALMS.forEach((r,i)=>{
    const unlocked = prevDone;
    const stars = state.stars[r.key]||0;
    const row = document.createElement('div');
    row.className = 'realm-row'+(i%2? ' right':'');
    row.innerHTML = `
      <button class="realm-node ${unlocked?'':'locked'} ${stars>0?'done':''}" style="border-color:${unlocked? r.color:'var(--line-strong)'}" data-key="${r.key}" ${unlocked?'':'disabled aria-disabled="true"'}>
        ${unlocked? r.icon : `<span class="lock-ic">🔒</span>`}
      </button>
      <div class="realm-info">
        <div class="realm-name">${r.name}</div>
        <div class="realm-desc">${r.desc}</div>
        <div class="realm-stars">${starsHtml(stars)}</div>
      </div>`;
    wrap.appendChild(row);
    const btn = row.querySelector('.realm-node');
    if(unlocked){
      btn.onclick = ()=>{ sfx.click(); openRealm(r.key); };
    }
    prevDone = stars > 0;
  });

  const allCleared = REALMS.every(r => (state.stars[r.key]||0) > 0);
  const bossBox = $('#boss-node');
  bossBox.className = 'boss-node'+(allCleared?' ready':'');
  bossBox.innerHTML = allCleared
    ? `<div style="font-size:40px;">🐉</div><h3>The Grammar Dragon</h3><p class="footer-note" style="font-size:12.5px;">Face the final mixed challenge!</p>
       <button class="btn btn-gold btn-block" id="boss-btn">${state.bossCleared? 'Battle again' : 'Start Boss Battle'}</button>`
    : `<div style="font-size:36px; opacity:.5;">🐉</div><h3 style="color:var(--ink-dim);">The Grammar Dragon</h3><p class="footer-note">Earn a star in every realm to unlock the final battle.</p>`;
  if(allCleared){ $('#boss-btn').onclick = ()=>{ sfx.click(); startBoss(); }; }
}

function openRealm(key){
  if(key === 'irregular'){ startMemory(); return; }
  startQuiz(key);
}

/* ---------------- quiz engine ---------------- */
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
    isBoss:false, xpEarned:0, coinsEarned:0,
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
    realmKey:'boss', realmName:'The Grammar Dragon', color:'#FF6B8B',
    questions: sample(mixed, mixed.length),
    idx:0, correctCount:0, lives:3, combo:0, timer:null, timeLeft:20,
    isBoss:true, hp:100, xpEarned:0, coinsEarned:0,
  };
  renderQuizChrome();
  askQuestion();
  showScreen('quiz');
}

function renderQuizChrome(){
  $('#quiz-dragon').hidden = !quizCtx.isBoss;
  $('#quiz-hearts-wrap').hidden = false;
  if(quizCtx.isBoss){
    $('#dragon-emoji').textContent = '🐉';
    updateDragonHp();
  }
}
function updateDragonHp(){
  $('#dragon-hpfill').style.width = Math.max(0,quizCtx.hp)+'%';
  $('#dragon-hplabel').textContent = 'Dragon HP: '+Math.max(0,quizCtx.hp)+'%';
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
  $('#combo-chip').textContent = '🔥 Combo x'+quizCtx.combo;

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
  const lostByHp = quizCtx.isBoss && quizCtx.hp <= 0;

  grantXp(quizCtx.xpEarned);
  grantCoins(quizCtx.coinsEarned);

  if(quizCtx.isBoss){
    showBossResult(lostByHp || quizCtx.correctCount/total >= 0.5, quizCtx);
  } else {
    if(stars > (state.stars[quizCtx.realmKey]||0)){
      state.stars[quizCtx.realmKey] = stars;
      saveState();
    }
    showResult({
      title: stars>0 ? 'Realm cleared!' : 'Keep practicing!',
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
    title: won ? '🐉 Dragon defeated!' : 'The dragon escaped...',
    stars: won ? 3 : 1,
    correct: ctx.correctCount, total: ctx.questions.length,
    xp: ctx.xpEarned, coins: ctx.coinsEarned,
    subtitle: won ? 'You are the Grammar Champion of the Realms!' : 'Review the realms and try again — you can do it!',
    onContinue: ()=>{ renderMap(); showScreen('map'); },
    onRetry: ()=>{ closeOverlay(); startBoss(); },
  });
}

function showResult(opts){
  overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `
    <div class="card result-card">
      <div class="eyebrow">${opts.subtitle? '' : 'Results'}</div>
      <h2 class="title-xl" style="font-size:22px;">${opts.title}</h2>
      ${opts.subtitle? `<p class="subtitle">${opts.subtitle}</p>` : ''}
      <div class="result-stars">${[0,1,2].map(i=>`<span class="star ${i<opts.stars?'on':''}">★</span>`).join('')}</div>
      <div class="result-row"><span>Correct answers</span><strong>${opts.correct} / ${opts.total}</strong></div>
      <div class="result-row"><span>XP earned</span><strong>+${opts.xp} ✨</strong></div>
      <div class="result-row"><span>Coins earned</span><strong>+${opts.coins} 🪙</strong></div>
      <div style="display:flex; gap:10px; margin-top:18px;">
        <button class="btn btn-ghost btn-block" id="result-retry">Retry</button>
        <button class="btn btn-primary btn-block" id="result-continue">Continue</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  $('#result-retry').onclick = ()=>{ closeOverlay(); opts.onRetry(); };
  $('#result-continue').onclick = ()=>{ closeOverlay(); opts.onContinue(); };
}
function closeOverlay(){ if(overlay){ overlay.remove(); overlay=null; } }

/* ---------------- memory game (irregular verbs) ---------------- */
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
  $('#mem-moves').textContent = 'Moves: '+memCtx.moves;
  $('#mem-pairs').textContent = 'Pairs: '+memCtx.matched+' / '+memCtx.total;
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
      title:'Irregular Caves cleared!', stars, correct:memCtx.total, total:memCtx.total,
      xp, coins,
      subtitle: 'Moves used: '+memCtx.moves,
      onContinue: ()=>{ renderMap(); showScreen('map'); },
      onRetry: ()=>{ closeOverlay(); startMemory(); },
    });
  }, 400);
}

/* ---------------- init ---------------- */
function bootUI(){
  $('#hud-mute').onclick = ()=>{ state.muted = !state.muted; saveState(); renderHud(); sfx.click(); };
  $('#hud-map-btn').onclick = ()=>{ if(state.started){ renderMap(); showScreen('map'); } };
  initWelcome();
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
    try{
      window.claude.hot.snapshot(()=> state);
    }catch(e){}
  }
}

if(window.claude && window.claude.hot && window.claude.hot.ready){
  window.claude.hot.ready(start);
} else {
  start(window.claude && window.claude.hot ? window.claude.hot.data : null);
}

})();
