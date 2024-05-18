document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector("#emailInput-contact");
    const emailButton = document.querySelector("#emailButton-contact");

    if (emailInput && emailButton) {
        emailButton.addEventListener("click", function (event) {
            event.preventDefault();

            const email = emailInput.value;

            const data = {
                email: email
            };

            fetch("http://localhost:5050/api/email/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                // В этом примере не отправляется JSON в ответе, просто возвращаем текст
                return response.text(); // Метод для обработки текстового ответа
            })
            .then(data => {
                console.log("Успешно отправлено:", data); // Выводим текстовый ответ
                alert("Успешно отправлено!");
            })
            .catch(error => {
                console.error("Ошибка при отправке данных:", error);
                alert("Ошибка при отправке данных!");
            });
        });
    }
});
