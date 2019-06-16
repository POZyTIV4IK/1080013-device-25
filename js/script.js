var popupMapLink = document.querySelector(".map-link"),
    popupMap = document.querySelector(".modal-map");
    popupMapClose = document.querySelector(".map-close");
    popupSentLink = document.querySelector(".map-button"),
    popupSent = document.querySelector(".modal-sent");
    popupSentClose = document.querySelector(".sent-close");


    popupMapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMap.classList.add("map-show");
    })

    popupMapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMap.classList.remove("map-show");
    })

    popupSentLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupSent.classList.add("sent-show");
    })

    popupSentClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupSent.classList.remove("sent-show");
    })
