const t=document.querySelector(".feedback-form"),o={email:"",message:""},a="feedback-form-state";savedData.value=localStorage.getItem("localStorageKey")??"";t.addEventListener("input",e=>{localStorage.setItem(a,e.target.value)});t.addEventListener("submit",e=>{e.preventDefault(),console.log(o),localStorage.removeItem(a),t.reset()});
//# sourceMappingURL=2-form-d09daa36.js.map
