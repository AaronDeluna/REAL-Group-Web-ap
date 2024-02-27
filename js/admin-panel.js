// document.addEventListener('DOMContentLoaded', fetchData);

// async function fetchData() {
//   try {
//     const response = await fetch('http://127.0.0.1:5000/users');
//     const userData = await response.json();

//     const userDataContainer = document.getElementById('userData');
//     userDataContainer.innerHTML = '<h2>User Data</h2>';
//     userData.forEach(user => {
//       const userContainer = document.createElement('div');
//       userContainer.classList.add('user');
//       userContainer.innerHTML = `
//         <span>${user.email}</span>
//         <p>Email address: ${user.email}</p>
//         <div class="buttons">
//           <button class="button refresh" onclick="refreshUserInfo(this)">Refresh Info</button>
//           <button class="button message" onclick="sendMessage(this)">Send Message</button>
//           <button class="button delete" onclick="deleteUser(${user.id})">Delete User</button>
//         </div>
//       `;
//       userDataContainer.appendChild(userContainer);
//     });
//   } catch (error) {
//     console.error('Error fetching data from server', error);
//   }
// }

// // Функция для удаления пользователя
// async function deleteUser(userId) {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/user/${userId}`, {
//         method: 'DELETE'
//       });
//       const result = await response.json();
//       if (result.success) {
//         console.log('User deleted successfully');
//         fetchData(); // Обновляем данные после удаления пользователя
//       } else {
//         console.error('Error deleting user:', result.message);
//       }
//     } catch (error) {
//       console.error('Error deleting user', error);
//     }
// }

// // Остальные функции (refreshUserInfo, sendMessage) остаются без изменений



