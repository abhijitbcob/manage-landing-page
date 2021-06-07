"use strict";

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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// Email validation
const inputGroup = document.querySelector(".form-group");
const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-input");
const error = document.querySelector(".error");

function ValidateEmail(inputText) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    error.style.display = "none";
    emailInput.classList.remove("input-error");
  } else {
    error.style.display = "block";
    emailInput.classList.add("input-error");
  }
}

emailInput.addEventListener("keyup", function () {
  ValidateEmail(emailInput);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ValidateEmail(emailInput);
});

emailInput.addEventListener("blur", function () {
  error.style.display = "none";
  emailInput.classList.remove("input-error");
});
