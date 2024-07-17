document.addEventListener("DOMContentLoaded", function() {
    var text = "ZAPのテストです。";
    var element = document.createElement("h1");
    element.textContent = text;
    document.body.appendChild(element);
    element.style.opacity = 0;

    // アニメーション
    setTimeout(function() {
        element.style.transition = "opacity 1s ease-in-out";
        element.style.opacity = 1;
    }, 100);
});
