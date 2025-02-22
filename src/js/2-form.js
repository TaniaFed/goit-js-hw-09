const formData = {
    email: "", 
    message: ""
 };

// Відстежую зміни у формі за допомогою події input:

const form = document.querySelector(".feedback-form"); 

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Заповнюю форму з даних у локальному сховищі при завантаженні сторінки:

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const savedFormData = JSON.parse(savedData);
    formData.email = savedFormData.email || '';
    formData.message = savedFormData.message || '';
    
    form.elements['email'].value = formData.email;
    form.elements['message'].value = formData.message;
  }
});

// Перевірка перед відправленням форми:

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
