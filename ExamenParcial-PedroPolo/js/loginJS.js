//JSON
const jsonData = {
    users: [
        {
            username: 'JohnD',
            password: 'apruevemeProfe',
        },
        {
            username: 'JaneS',
            password: 'contraseña',
        },
        {
            username: 'MichaelJ',
            password: 'soyTuPapi',
        }
    ]
};

// Obtener el usuario que ha iniciado sesión
const urlParams = new URLSearchParams(window.location.search);
const loggedInUsername = urlParams.get('username');
const foundUser = jsonData.users.find(user => user.username === loggedInUsername);

//Verificar
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = form.querySelector('input[type="text"]').value;
      const password = form.querySelector('input[type="password"]').value;
      const foundUser = jsonData.users.find(user => user.username === username && user.password === password);
      if (foundUser) {
        window.location.href = `index.html?username=${foundUser.username}`;
      } else {
        alert('Credenciales incorrectas. Intente de nuevo.');
      }
    });
  });
  