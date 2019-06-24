var popupMapLink = document.querySelector(".map-link");
var popupMap = document.querySelector(".modal-map");
var popupMapClose = popupMap.querySelector(".map-close");
var popupSentLink = document.querySelector(".map-button");
var popupSent = document.querySelector(".modal-sent");
var popupSentClose = popupSent.querySelector(".sent-close");
var login = popupSent.querySelector("[name=login]");
var email = popupSent.querySelector("[name=email]");
var mymessage = popupSent.querySelector("[name=message]");
var form = popupSent.querySelector(".sent-form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


popupMapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("map-show");
});

popupMapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("map-show");
});

window.addEventListener("keydown", function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("map-show")) {
      popupMap.classList.remove("map-show");
    }
  }
});

popupSentLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSent.classList.add("sent-show");

  if (storage) {
    login.value = storage;
    email.value = storage;
    mymessage.focus();
  } else {
    login.focus();
  }

});

popupSentClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSent.classList.remove("sent-show");
  popupSent.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !mymessage.value) {
    evt.preventDefault();
    popupSent.classList.remove("modal-error");
    popupSent.offsetWidth = popupSent.offsetWidth;
    popupSent.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupSent.classList.contains("sent-show")) {
      popupSent.classList.remove("sent-show");
      popupSent.classList.remove("modal-error");
    }
  }
});
