const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nameInput = document.querySelector('#inputName');
    const emailInput = document.querySelector('#inputEmail');
    const messageInput = document.querySelector('#inputMessage');
  
    if (nameInput.value === '') {
      alert('Por favor, ingrese su nombre');
      return;
    }
  
    if (emailInput.value === '') {
      alert('Por favor, ingrese su email');
      return;
    }
  
    if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      alert('Por favor, ingrese un email válido');
      return;
    }
  
    if (messageInput.value === '') {
      alert('Por favor, ingrese un mensaje');
      return;
    }
  
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
  
    console.log(formData);
    alert('Gracias por enviar el formulario!');
  });