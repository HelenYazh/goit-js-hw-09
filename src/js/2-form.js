const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = form.querySelector("input");
const message = form.querySelector("textarea");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", saveFormData);
loadFormData();


function saveFormData() {
    const formData = {
        email: email.value.trim(),
        message: message.value.trim()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        email.value = formData.email;
        message.value = formData.message;
    }
}


function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        email: email.value.trim(),
        message: message.value.trim()
    };

    if (formData.email && formData.message ){
        console.log("Form data:", formData);
        event.target.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
}