import{a as g,i as u}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=c(r);fetch(r.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),c=document.querySelector(".menu-modal-close-button"),o=document.querySelector(".modal-menu-button-home"),r=document.querySelector(".modal-menu-button-favorites"),s=document.querySelector(".header-logo"),n=window.location.pathname;e.addEventListener("click",function(){t.classList.remove("is-hidden"),document.body.style.position="fixed",s.style.display="none",n==="/index.html"?(o.style.backgroundColor="pink",r.style.backgroundColor=""):n==="/favorites.html"&&(r.style.backgroundColor="pink",o.style.backgroundColor="")}),c.addEventListener("click",function(){t.classList.add("is-hidden"),s.style.display=""})});const h=document.querySelector(".up-btn");h.addEventListener("click",A);window.onscroll=function(){T()};function T(){window.scrollY>1?N():P()}function A(){document.documentElement.scrollTop=0}function N(){h.classList.remove("is-hidden")}function P(){h.classList.add("is-hidden")}const I="https://energyflow.b.goit.study/api/exercises",v=document.querySelector(".rating-form-container"),j=v.firstElementChild,k=document.querySelector(".exercises-modal"),i=document.querySelector(".rating-form"),y=document.querySelector(".radios"),B=document.querySelector(".stars-form-container");let S;y.addEventListener("click",J);j.addEventListener("click",w);i.addEventListener("submit",_);function U(){S=document.querySelector(".exercises-modal-button-rating"),S.addEventListener("click",H)}function w(){k.classList.remove("display-none-style"),v.classList.add("display-none-style")}function H(){k.classList.add("display-none-style"),v.classList.remove("display-none-style")}function J(e){if(e.target.nodeName!=="INPUT")return;const t=[...B.children];t.forEach(o=>{o.classList.remove("fill-gold")});const c=Number(e.target.dataset.rate);for(let o=0;o<c;o++)t[o].classList.add("fill-gold");y.previousElementSibling.textContent=c+".0"}function L(){[...i.elements.rating].forEach(c=>{c.checked=!1}),[...B.children].forEach(c=>{c.classList.remove("fill-gold")}),i.elements.email.value="",i.elements.comment.value="",y.previousElementSibling.textContent="0.0"}async function _(e){e.preventDefault();const t=[...i.elements.rating],[c]=t.filter(n=>{if(n.checked===!0)return!0}),{dataset:{rate:o}}=c,r=i.elements.email.value,s=i.elements.comment.value;console.log("before try");try{const n=await g.patch(`${I}/${x}/rating`,{rate:Number(o),email:r,review:s});u.success({position:"topRight",message:"Thank you for your rating. Your opinion is very important to us."}),w(),L(),console.log("in try")}catch(n){if(console.dir(n),console.log("in catch"),n.response.status===409){u.info({position:"topRight",message:"Thank you, but your feedback has already been considered."}),L();return}u.error({position:"topRight",message:`${n.name}: ${n.message}.`})}console.log("after")}let E;const D=document.querySelector("[data-exercise-modal-close]"),m=document.querySelector("[data-exercise-modal]"),p=document.querySelector(".exercises-modal"),q=document.querySelector(".exercises-modal-content"),O=document.querySelector(".span-exercises-modal-loader");document.querySelector("body");const a="exerciseItems";let x;function Z(){E=document.querySelectorAll("[data-exercise-modal-open]"),E.forEach(e=>{e.addEventListener("click",t=>{l.disabledScroll(),O.classList.add("exercises-modal-loader"),x=t.currentTarget.dataset.id,q.innerHTML="",m.classList.add("is-open"),z(),W()})})}async function Y(){return g.defaults.baseURL="https://energyflow.b.goit.study",await g.get(`/api/exercises/${x}`)}async function z(){try{const t=(await Y()).data;G(t),V(t)}catch(e){Q(e)}finally{O.classList.remove("exercises-modal-loader")}}function G({bodyPart:e,burnedCalories:t,description:c,equipmen:o,gifUrl:r,name:s,popularity:n,rating:d,target:C,time:F}){let $=d.toFixed(1);const M=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${s}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${s}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${$}</p>
          <ul class="exercises-modal-stars-list">
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
          </ul>
      </div>
      <ul class="exercises-modal-block-list">
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Target</h5>
              <p class="exercises-modal-block-paragraf">${C}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${e}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${o}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${n}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${F} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${c}</p>
      </div>
      <div class="exercises-modal-buttons">
        <button class="exercises-modal-button-favorites" type="button">
          Add to favorites
          <svg class="exercises-modal-button-icon">
            <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="exercises-modal-button-remove hidden-button" type="button">
        Remove from
        <svg class="exercises-modal-button-icon">
          <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
        </svg>
      </button>
          <button class="exercises-modal-button-rating" type="button">Give a rating</button>
      </div>
  </div>
  `;q.insertAdjacentHTML("beforeend",M),K(Math.round(d));const R=document.querySelector(".exercises-modal-text"),b=document.querySelector(".exercises-modal-container-text");R.clientHeight>b.clientHeight&&b.classList.add("exercises-modal-text-scroll"),U()}function K(e){const c=[...p.querySelectorAll(".exercises-modal-star-icon")];for(let o=0;o<e;o+=1)c[o].classList.add("selected-stars")}function Q(e){console.log(e);const t=e.name,c=e.message;u.error({position:"topRight",message:`${t}: ${c}.`})}function V(e){const t=document.querySelector(".exercises-modal-button-favorites"),c=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(a)!==null&&JSON.parse(localStorage.getItem(a)).find(n=>n._id===e._id)?(f(),c.addEventListener("click",r)):t.addEventListener("click",o),t.addEventListener("click",o),c.addEventListener("click",r);function o(){const s=JSON.parse(localStorage.getItem(a))||[];s.push(e),localStorage.setItem(a,JSON.stringify(s)),f()}function r(){const s=JSON.parse(localStorage.getItem(a)),n=s.find(d=>d._id===e._id);s.splice(s.indexOf(n),1),localStorage.setItem(a,JSON.stringify(s)),f()}}function f(){const e=p.querySelector(".exercises-modal-button-favorites"),t=p.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function W(){document.addEventListener("keydown",c),D.addEventListener("click",e),m.addEventListener("click",t);function e(){m.classList.remove("is-open"),l.enabledScroll()}function t(o){o.target.hasAttribute("data-exercise-modal")&&e()}function c(o){o.code==="Escape"&&(m.classList.remove("is-open"),document.removeEventListener("keydown",c),l.enabledScroll())}}const l={scrollPosition:0,disabledScroll(){l.scrollPosition=window.scrollY,document.body.style.cssText=`
      owerflow: hidden;
      position: fixed;
      top: -${l.scrollPosition}px;
      width: 100%;
      height: 100%;
  
    `,document.documentElement.style.scrollBehavior="unset"},enabledScroll(){document.body.style.cssText="",window.scroll({top:l.scrollPosition}),document.documentElement.style.scrollBehavior=""}};export{Z as c};
//# sourceMappingURL=exercises-modal-ac6fa363.js.map
