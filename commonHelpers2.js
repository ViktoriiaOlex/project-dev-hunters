import{i as d,a as i}from"./assets/vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l=document.querySelector("[data-modal-open]"),u=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal]");let f="64f389465ae26083f39b17a2";l.addEventListener("click",()=>{c.classList.add("is-open"),p(),g()});async function m(){return i.defaults.baseURL="https://energyflow.b.goit.study",await i.get(`/api/exercises/${f}`)}async function p(){try{const t=await m();console.log(t.data);const s=t.data;createExersiceCard(s)}catch(t){y(t)}}function y(t){console.log(t);const s=t.name,r=t.message;d.error({position:"topRight",message:`${s}: ${r}.`})}function g(){document.addEventListener("keydown",r),u.addEventListener("click",t),c.addEventListener("click",s);function t(){c.classList.remove("is-open")}function s(n){n.target.hasAttribute("data-modal")&&t()}function r(n){n.code==="Escape"&&(c.classList.remove("is-open"),document.removeEventListener("keydown",r))}}
//# sourceMappingURL=commonHelpers2.js.map
