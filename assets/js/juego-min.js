const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],r=["A","J","Q","K"];let l=[];const n=document.querySelector("#btnPedir"),o=document.querySelector("#btnDetener"),s=(document.querySelector("#btnNuevo"),document.querySelectorAll(".divCartas")),a=document.querySelectorAll("small"),c=()=>{e=[];for(let r=2;r<=10;r++)for(let l of t)e.push(r+l);for(let l of t)for(let t of r)e.push(t+l);return _.shuffle(e)},d=()=>{if(0===e.length)throw"No hay mas cartas";return e.pop()},i=(e,t)=>(l[t]+=(e=>{const t=e.substring(0,e.length-1);let r=0;return r=isNaN(t)?"A"===t?11:10:1*t})(e),a[t].innerText=l[t],l[t]),u=(e,t)=>{const r=document.createElement("img");r.src=`./assets/cartas/${e}.png`,r.classList.add("carta"),s[t].append(r)},A=e=>{let t=0;do{const e=d();t=i(e,l.length-1),u(e,l.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=l;setTimeout(()=>{t===e?alert("NADIE GANA :("):e>21?alert("COMPUTADORA GANA"):t>21?alert("JUGADOR GANA"):alert("COMPUTADORA GANA")},15)})()};return n.addEventListener("click",()=>{const e=d(),t=i(e,0);u(e,0),t>21?(console.warn("Perdiste"),n.disabled=!0,o.disabled=!0,A(t)):21===t&&(console.warn("21, genial!"),n.disabled=!0,o.disabled=!0,A(t))}),o.addEventListener("click",()=>{n.disabled=!0,o.disabled=!0,A(l[0])}),{nuevoJuego:(t=2)=>{e=c(),l=[];for(let e=0;e<t;e++)l.push(0);console.log({puntosJugadores:l}),a.forEach(e=>e.innerText=0),s.forEach(e=>e.innerHTML=""),n.disabled=!1,o.disabled=!1}}})();