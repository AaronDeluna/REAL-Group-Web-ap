// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("#contactForm");
//     const submitButton = document.querySelector("#aboutSubmitButton");

//     if (form && submitButton) {
//         submitButton.addEventListener("click", function (event) {
//             event.preventDefault();

//             const name = document.querySelector("#aboutNameInput").value;
//             const email = document.querySelector("#aboutEmailInput").value;
//             const phone = document.querySelector("#aboutPhoneInput").value;
//             const message = document.querySelector("#aboutMessageInput").value;

//             const data = {
//                 name: name,
//                 email: email,
//                 phone: phone,
//                 message: message
//             };

//             fetch("http://127.0.0.1:5000/submit_form", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(data)
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Ошибка HTTP: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Успешно отправлено:", data);
//                 alert("Успешно отправлено!");
//             })
//             .catch(error => {
//                 console.error("Ошибка при отправке данных:", error);
//                 alert("Ошибка при отправке данных!");
//             });
//         });
//     }
// });
