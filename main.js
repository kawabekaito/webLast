const timer = document.getElementById("timer");
const start = document.getElementById("start");
const reset = document.getElementById("reset");


var img;
var nanido;
var IQtest = document.getElementById("IQtest");
var min = 1;
var flag = 0;
var n;
var Random;
var N;
var max;
var text;


function easyLevel() {
  const easyList = new Array(
    "img/入.jpg",
    "img/λ.jpg",
    "img/ア.jpg",
    "img/ア-2.jpg",
    "img/雲.jpg",
    "img/雲-2.jpg",
    "img/休.jpg",
    "img/休-2.jpg",
    "img/具.jpg",
    "img/具-2.jpg"
  );
  N = 24; 
  max =  N ;
  n = Math.floor(Math.random() * easyList.length);
  if(n % 2 !== 0){
    n -= 1;
  } 
  Random = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  text = "";
  for (var i = 1; i < N+1; i++) { 

    if(i === Random){
      text += "<img src=" + easyList[n+1]  + " onclick=" + "True(); " + " class=" + "easyImg" + ">";
    } else {
      text += "<img src=" + easyList[n]  + " class=" + "easyImg" + ">";
    } 
    if (i % 6 == 0) {
      text += "<br></br>";
    } 
  }
  
  IQtest.innerHTML = text;
  nanido = "easy";
}


function normalLevel() {
  const normalList = new Array(
    "img/犬.jpg",
    "img/犬-2.jpg",
    "img/頃.jpg",
    "img/頃-2.jpg",
    "img/侍.jpg",
    "img/侍-2.jpg",
    "img/土.jpg",
    "img/土-2.jpg",
    "img/閉.jpg",
    "img/閉-2.jpg"
  );
  N = 32; 
  max =  N ;
  n = Math.floor(Math.random() * normalList.length);
  if(n % 2 !== 0){
    n -= 1;
  } 
  Random = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  text = "";
  for (var i = 1; i < N+1; i++) { 

    if(i === Random){
      text += "<img src=" + normalList[n+1]  + " onclick=" + "True(); " + " class=" + "normalImg" + ">";
    } else {
      text += "<img src=" + normalList[n]  + " class=" + "normalImg" + ">";
    } 
    if (i % 8 == 0) {
      text += "<br></br>";
    } 
  }
  //HTMLを書きかえる
  IQtest.innerHTML = text;
  nanido = "normal";
}
function hardLevel() {
  const hardList = new Array(
    "img/裸.jpg",
    "img/裸-2.jpg",
    "img/力.jpg",
    "img/力-2.jpg",
    "img/邉.jpg",
    "img/邉-2.jpg",
    "img/0.jpg",
    "img/0-2.jpg",
    "img/ソ.jpg",
    "img/ン.jpg"
  );
  N = 56; 
  max =  N ;
  n = Math.floor(Math.random() * hardList.length);
  if(n % 2 !== 0){
    n -= 1;
  } 
  Random = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  text = "";
  for (var i = 1; i < N+1; i++) { 

    if(i === Random){
      text += "<img src=" + hardList[n+1]  + " onclick=" + "True(); " + " class=" + "hardImg" + ">";
    } else {
      text += "<img src=" + hardList[n]  + " class=" + "hardImg" + ">";
    } 
    if (i % 8 == 0) {
      text += "<br></br>";
    } 
  }
  IQtest.innerHTML = text;
  nanido = "hard";
}





let sTime;
let working = "start";
let timerId;
let allTime = 0;

function timeToString(millis) {
  const ms = millis % 1000; // ミリ秒
  const s = Math.floor(millis / 1000) % 60;
  const m = Math.floor(millis / 1000 / 60) % 60;

  const formattedMs = ms.toString().padStart(3, "0");
  const formattedS = s.toString().padStart(2, "0");
  const formattedM = m.toString().padStart(2, "0");


  return `${formattedM}:${formattedS}.${formattedMs}`;
}

start.addEventListener('click', () => {
  if (working === 'start') {
    working = 'stop';
    start.textContent = 'ストップ';
    start.classList.add('stop');

    let startMs = Date.now(); 
    startMs -= allTime;

    timerId = setInterval(() => {
      const nowMs = Date.now();
      allTime = nowMs - startMs; 

      if(flag != 1){
        timer.textContent = timeToString(allTime);
      }
    }, 10);
  } else { 
    working = 'start';
    clearInterval(timerId);
    start.textContent = 'リスタート';
    start.classList.remove('stop');
    flag = 0;
  
    
  }
});

reset.addEventListener('click', () => {
  working = 'start';
  clearInterval(timerId);
  start.textContent = 'スタート';
  start.classList.remove('stop');
  allTime = 0;
  timer.textContent = '00:00.000';
  flag = 0;
});

function True(){
  flag = 1;
  sTime = Math.floor(allTime / 1000) % 60 ;
  if (nanido === "easy") {
    if (sTime <= 5) {
      alert("クリア！\n次のレベルに挑戦しよう");
    } else if (sTime <= 10) {
      alert("ちょっと遅いかも。");
    } else {
      alert("おっそ");
    } 
  } else if(nanido === "normal"){
    if (sTime <= 5) {
      alert("天才！\n次のレベルに挑戦しよう");
    } else if (sTime <= 10) {
      alert("普通です。");
    } else {
      alert("easyに戻れ。");
    } 
  } else {
    if (sTime <= 3) {
      alert("IQが高すぎる!!");
    } else if (sTime <= 10) {
      alert("はやいね！");
    } else {
      alert("うーーん");
    } 
  }
}
