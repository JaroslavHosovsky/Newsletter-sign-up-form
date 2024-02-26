const mainSection = document.querySelector("main");
const form = document.querySelector("form");
const labelText = document.querySelector(".label-text");
const textInput = document.querySelector('input[type="email"]');
const submitInput = document.getElementById("submit");
const dismissButton = document.getElementById("dismiss-button");
const imageSection = document.querySelector(".image-section");
const formSection = document.querySelector(".form-section");
const successSection = document.querySelector(".success-section");
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const formHandler = (event) => {
  event.preventDefault();
  if (textInput.value.trim() === "") {
    labelText.style.display = "block";
    textInput.placeholder = "ash#loremcompany.com";
    textInput.classList.add("error-message");
  } else if (textInput.value.match(pattern)) {
    imageSection.style.display = "none";
    formSection.style.display = "none";
    successSection.style.display = "flex";
    mainSection.style.display = "flex";
    mainSection.style.maxWidth = "467px";
    document.querySelector("h2").style.fontSize = "40px";
  } else {
    labelText.style.display = "block";
    textInput.placeholder = "ash#loremcompany.com";
    textInput.classList.add("error-message");
  }
};

submitInput.addEventListener("click", (event) => {
  formHandler(event);
});

dismissButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
