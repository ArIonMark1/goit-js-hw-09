let i;const t={notification:document.querySelector(".js-alert")};function e(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){e(),clearInterval(i)})),t.notification.classList.add("is-visible"),i=setTimeout((()=>{console.log("Закриваємо alert автоматично."),e()}),3e3);
//# sourceMappingURL=04-setTimeout.cf28c473.js.map
