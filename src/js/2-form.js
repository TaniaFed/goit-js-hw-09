const form = document.querySelector(".feedback-form");

const formData = {
    email: "", 
    message: ""
 };
 
const localStorageKey = "feedback-form-state";

formData.value = localStorage.getItem('localStorageKey') ?? '';

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
