"use strict";

// Slick carousel
$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});

// Email validation
const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-input");
const errorMessage = document.querySelector(".error-message");

function ValidateEmail(inputText) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    errorMessage.style.display = "none";
    emailInput.classList.remove("red-outline");
    submitBtn.classList.remove("red-outline");
  } else {
    errorMessage.style.display = "block";
    emailInput.classList.add("red-outline");
    submitBtn.classList.add("red-outline");
  }
}

emailInput.addEventListener("keydown", function () {
  ValidateEmail(emailInput);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ValidateEmail(emailInput);
});

emailInput.addEventListener("blur", function () {
  errorMessage.style.display = "none";
  emailInput.classList.remove("red-outline");
});
