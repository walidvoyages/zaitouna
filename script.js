const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));

const counter=document.querySelector("[data-count]");
let done=false;
const ci=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!done){done=true;let n=0;const t=setInterval(()=>{n++;counter.textContent=n;if(n>=36)clearInterval(t)},35)}},{threshold:.4});
ci.observe(counter);

const pass=document.getElementById("passport");
if(matchMedia("(pointer:fine)").matches){
 document.querySelector(".travelScene").addEventListener("mousemove",e=>{
   const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   pass.style.transform=`translate(-50%,-50%) rotate(-8deg) rotateY(${x*12}deg) rotateX(${-y*10}deg)`;
 });
 document.querySelector(".travelScene").addEventListener("mouseleave",()=>pass.style.transform="translate(-50%,-50%) rotate(-8deg)");
}
window.addEventListener("scroll",()=>{
 const bg=document.querySelector(".heroBg");
 bg.style.transform=`scale(1.04) translateY(${scrollY*.08}px)`;
});