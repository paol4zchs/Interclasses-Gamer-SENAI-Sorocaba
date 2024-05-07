// Função para detectar se o dispositivo é um computador
function isDesktop() {
    return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Obtém as URLs de destino
const desktopUrl = "mobile.html";
const mobileUrl = "desktop.html";

// Verifica se o dispositivo é um computador
if (isDesktop()) {
    // Redireciona para a URL do computador
    window.location.href = desktopUrl;
} else {
    // Redireciona para a URL do celular
    window.location.href = mobileUrl;
}

window.addEventListener("scroll", function () {
    let botao = document.querySelector("#botaoQueLevaPraCima");
    botao.classList.toggle("active", window.scrollY > 100);
});

