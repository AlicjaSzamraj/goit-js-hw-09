const e=document.querySelector("form.feedback-form"),t=e.elements.email,a=e.elements.message;t.addEventListener("input",s);a.addEventListener("input",s);function s(){const n={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))}
//# sourceMappingURL=02-form-js-1c674492.js.map
