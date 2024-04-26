// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.getElementById("submit-button");
const contactBody = document.getElementById("contact-page");
const contactSection = document.querySelector(".contact");

submitButton.addEventListener("click", displayMessage);

function displayMessage() {
    contactBody.innerHTML = "<p>Thank you for your message!</p>";
    contactBody.style.fontSize = "24px";
    contactSection.style.justifyContent = "flex-start"; // Puts the text at the top of the main body as per the screenshot provided
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

