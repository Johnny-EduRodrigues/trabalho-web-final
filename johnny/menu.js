document.getElementById("reflex-game").addEventListener("click", startReflexGame);

let score = 0;
let timer;
let gameStarted = false;

function startReflexGame() {
    if (!gameStarted) {
        gameStarted = true;
        score = 0;
        document.getElementById("reflex-game").innerText = "Aguarde...";
        timer = setTimeout(() => {
            document.getElementById("reflex-game").style.backgroundColor = "red";
            document.getElementById("reflex-game").innerText = "Clique!";
        }, Math.random() * 3000 + 1000); // Vai mudar entre 1 e 4 segundos
    } else {
        clearTimeout(timer);
        document.getElementById("reflex-game").style.backgroundColor = "#f7da3a";
        document.getElementById("reflex-game").innerText = "Você clicou!";
        score++;
        setTimeout(() => {
            document.getElementById("reflex-game").innerText = `Pontuação: ${score}`;
            gameStarted = false;
        }, 1000);
    }
}