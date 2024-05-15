function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

var addButton = document.getElementById("add-user-email-button");
var emailInput = document.getElementById("emailInput");

addButton.addEventListener("click", function () {
    var email = emailInput.value;

    if (isValidEmail(email) && !addButton.disabled) {
        addButton.disabled = true;

        sendEmailToBackend(email)
            .then(response => {
                if (response.success) {
                    alert('Успешно отправлено!');
                } else {
                    alert('Ошибка при отправке данных: ' + response.message);
                }
                addButton.disabled = false;
            })
            .catch(error => {
                addButton.disabled = false;
            });
        emailInput.classList.remove("invalid-email");
    } else {
        emailInput.classList.add("invalid-email");
    }
})

emailInput.addEventListener("input", function () {
    this.classList.remove("invalid-email");
});

function sendEmailToBackend(email) {
    return fetch('http://127.0.0.1:5050/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json());
}
