"use strict";

var links = document.querySelectorAll(".alternate-style"),
    totalLinks = links.length;

function setActiveStyle(color) {
    for (var i = 0; i < totalLinks; i++) {
        if (color == links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }
    }
}

document.querySelector(".toggle-style-switcher").addEventListener("click", function() {
        document.querySelector(".style-switcher").classList.toggle("open");
    }) // HAMZA BEZZIANE