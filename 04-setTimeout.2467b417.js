!function(){var i,t={notification:document.querySelector(".js-alert")};function n(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){n(),clearInterval(i)})),t.notification.classList.add("is-visible"),i=setTimeout((function(){console.log("Закриваємо alert автоматично."),n()}),3e3)}();
//# sourceMappingURL=04-setTimeout.2467b417.js.map
