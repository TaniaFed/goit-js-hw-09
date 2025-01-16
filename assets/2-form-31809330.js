const t=document.querySelector(".feedback-form"),o={email:"",message:""},a="feedback-form-state";o.value=localStorage.getItem("localStorageKey")??"";t.addEventListener("input",e=>{localStorage.setItem(a,e.target.value)});t.addEventListener("submit",e=>{e.preventDefault(),console.log(o),localStorage.removeItem(a),t.reset()});
//# sourceMappingURL=2-form-31809330.js.map
