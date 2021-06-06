"use strict";

if (window.document.body.clientWidth >= 800) {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
} else {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
}

// Email validation
const inputGroup = document.querySelector(".form-group");
const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-input");

function ValidateEmail(inputText) {
  const error = document.querySelector(".error");

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
