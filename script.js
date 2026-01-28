const startBtn = document.getElementById("startBtn");
const story = document.querySelector(".story");
const intro = document.querySelector(".intro");

startBtn.addEventListener("click",()=>{
 intro.style.display="none";
 story.classList.remove("hidden");
 window.scrollTo(0,0);
 revealSection(document.querySelector(".panel"));
});

const panels = document.querySelectorAll(".panel");

function revealSection(section){
 const lines = section.querySelectorAll("p");
 lines.forEach((line,i)=>{
   setTimeout(()=>line.classList.add("show"), i*600);
 });
}

const observer = new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     revealSection(entry.target);
   }
 });
},{threshold:0.5});

panels.forEach(panel=>observer.observe(panel));
