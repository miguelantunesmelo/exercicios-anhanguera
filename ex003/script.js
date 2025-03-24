// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
}

// Limpar mensagens de erro 
document.querySelectorAll('.error').forEach(function(error)) {
    error.textContent = '';
    error.style.display = 'none';
});
document.getElementById('forMessage').textContent = '';

// Validação 
let hasError = false

constname = document.getElementById('name').ariaValueMax.trim();
if (name === '') {
    document.getElementById('nameError').textContent = 'Por favor, insira seu nome.',
    document.getElementById('nameError').style.display = 'block';
    hasError = true;
}

const email = document.getElementById('email') value.trim();
if (email === '') {
    document.getElementById('emailError').textContent = 'Por favor, insira seu e-mail.
    document.getElementById('emailError').style.display = 'block'
    hasError = true;
} else  if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Por favor, insira um nome válido.'
    document.getElementById('emailError').style.display = 'block'
    hasError = true;
}

const message = document.getElementById('message') value.trim();
if (message === '') {
    document.getElementById('formMessage').textContent = 'Por favor, insira sua mensagem.';
    document.getElementById('FormMessage').style.display = 'block'
    hasError = true;
}

// Exibir mensagem de sucesso ou erro 
if (!hasError) {
    document.getElementById('forMessage').textContent = 'Formulário enviado com sucesso!';
    document.getElementById('forMessage').style.color = 'green';
} else {
    document.getElementById('formMessage').textContent = 'Por favor, corrija os erros acima e tente novamente.';
    document.getElementById('formMessage').style.color = 'red';
} ;

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}