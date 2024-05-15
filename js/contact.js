document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");
    const submitButton = document.querySelector("#aboutSubmitButton");

    if (form && submitButton) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            const name = document.querySelector("#aboutNameInput").value;
            const email = document.querySelector("#aboutEmailInput").value;
            const phone = document.querySelector("#aboutPhoneInput").value;
            const description = document.querySelector("#aboutMessageInput").value;

            const data = {
                id: 20,
                name: name,
                email: email,
                phone: parseInt(phone), // Ensure phone is converted to integer
                description: description
            };

            fetch("http://localhost:8000/api/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Успешно отправлено:", data);
                alert("Успешно отправлено!");
            })
            .catch(error => {
                console.error("Ошибка при отправке данных:", error);
                alert("Ошибка при отправке данных!");
            });
        });
    }
});
