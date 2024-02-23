const mainSection = document.querySelector("main");
const form = document.querySelector("form");
const labelText = document.querySelector(".label-text");
const textInput = document.querySelector('input[type="email"]');
const submitInput = document.getElementById("submit");
const dismissButton = document.getElementById("dismiss-button");
const imageSection = document.querySelector(".image-section");
const formSection = document.querySelector(".form-section");
const successSection = document.querySelector(".success-section");

const formHandler = (event) => {
  event.preventDefault();
  if (textInput.value.trim() === "") {
    labelText.style.display = "block";
    textInput.placeholder = "ash#loremcompany.com";
    textInput.classList.add("error-message");
  } else {
    imageSection.style.display = "none";
    formSection.style.display = "none";
    successSection.style.display = "flex";
    mainSection.style.display = "flex";
    mainSection.style.maxWidth = "467px";
    document.querySelector("h2").style.fontSize = "40px";
  }
};

submitInput.addEventListener("click", (event) => {
  formHandler(event);
});

dismissButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
