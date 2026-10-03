const startBtn=document.getElementById("startBtn");
const scene=document.getElementById("scene");
const title=document.getElementById("title");
const portrait=document.getElementById("portrait");
const text=document.getElementById("text");
const choices=document.getElementById("choices");
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

function showImage(file){
  portrait.src=file;
  portrait.classList.remove("hidden");
}
function hideImage(){portrait.classList.add("hidden")}
function setText(t){text.textContent=t}
function buttons(items){
  choices.innerHTML="";
  items.forEach(([label,fn])=>{
    const b=document.createElement("button");
    b.textContent=label;b.onclick=fn;choices.appendChild(b);
  });
}
function clearButtons(){choices.innerHTML=""}

startBtn.onclick=()=>{
  startBtn.classList.add("hidden");
  title.classList.add("hidden");
  scene.classList.remove("hidden");
  music.play().catch(()=>{});
  setText("Today when you were going to Dante's store, you found something curious.");
  hideImage();
  buttons([["Female",female],["Male",male]]);
};

function female(){
  clearButtons();
  showImage("vergil_normal.webp");
  setText("Vergil attends normally without saying a word.");
  endButton();
}
function male(){
  showImage("vergil_normal.webp");
  setText("Vergil: Are you my son too?");
  buttons([["Yes",yesEnding],["No",noEnding]]);
}
function noEnding(){
    clearButtons();
    showImage("vergil_smile.webp");
    setText("You Are not a Descendent of Sparda, Vergil is Proud");
    endButton();
}

function yesEnding(){
    clearButtons();
    showImage("vergil_end.webp");
    setText("You Are a Descendent of Sparda, Vergil is ready to be a parent");
    endButton();

}
function endButton(){
  const b=document.createElement("button");
  b.textContent="Restart";
  b.onclick=()=>location.reload();
  choices.appendChild(b);
}
musicBtn.onclick=()=>{
  if(music.paused){music.play().catch(()=>{});musicBtn.textContent="♫ Music: ON"}
  else{music.pause();musicBtn.textContent="♫ Music: OFF"}
};
