(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const o={form:document.querySelector(".login-form"),emailInfo:document.querySelector('[name="email"]'),passwordInfo:document.querySelector('[name="password"]'),btn:document.querySelector('[name="button"]')},d=(s,t)=>{localStorage.setItem(s,JSON.stringify(t))},f=s=>{const t=localStorage.getItem(s);if(t)return JSON.parse(t)},u={email:"user@mail.com",password:"secret"},c="userdata";o.form.addEventListener("submit",s=>{s.preventDefault();const t=o.emailInfo.value.trim(),n=o.passwordInfo.value.trim();if(t===""||n===""){alert("Pls put something it!");return}if(t!==u.email||n!==u.password){alert("Wrong password or email!");return}d(c,{email:t,password:n}),o.btn.textContent="Logout",o.emailInfo.setAttribute("readonly",!0),o.passwordInfo.setAttribute("readonly",!0)});const i=f(c);i&&(o.emailInfo.value=i.email||"",o.passwordInfo.value=i.password||"",o.emailInfo.setAttribute("readonly",!0),o.passwordInfo.setAttribute("readonly",!0),o.btn.textContent="Logout");
//# sourceMappingURL=index.js.map
