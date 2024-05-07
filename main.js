window.onload = function Responsive() {
    if (window.innerWidth < 1020) {
        window.location = "desktop.html";
    }
    else{
        window.location = "mobile.html";
    }
}
window.addEventListener("scroll", function () {
    let botao = document.querySelector("#botaoQueLevaPraCima");
    botao.classList.toggle("active", window.scrollY > 100);
});

