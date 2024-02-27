// "use strict";


// function authenticate() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Предустановленные учетные данные
//     var correctUsername = 'admin';
//     var correctPassword = 'MilovaN2590';

//     // Проверка учетных данных
//     if (username === correctUsername && password === correctPassword) {
//       document.getElementById('message').innerHTML = 'Authentication successful. Welcome!';
//       // Перенаправление на другую страницу после успешной аутентификации
//       window.location.href = 'admin-panel.html';
//     } else {
//       document.getElementById('message').innerHTML = 'Authentication failed. Incorrect username or password.';
//     }

//     // Очистка переменных учетных данных
//     document.getElementById('username').value = '';
//     document.getElementById('password').value = '';
//   }