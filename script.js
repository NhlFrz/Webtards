const startBtn = document.querySelector('.start-btn');
const main = document.querySelector('.main');
const quizSection = document.querySelector('.quiz-section');
const Theme1 = document.querySelector('.Theme1');
const Theme2 = document.querySelector('.Theme2');
const Theme3 = document.querySelector('.Theme3');
const Theme4 = document.querySelector('.Theme4');

startBtn.onclick = () => {
    quizSection.classList.add('active');
    main.classList.remove('active');
}

function redirectToLoginPage() {
  window.location.href = "login2.html";
}
Theme1.onclick = () => {
    location.href = "http://127.0.0.1:5500/general.html";
}

Theme2.onclick = () => {
    location.href = "http://127.0.0.1:5500/sports.html";
}

Theme3.onclick = () => {
    location.href = "http://127.0.0.1:5500/mela.html";
}

Theme4.onclick = () => {
    location.href = "http://127.0.0.1:5500/stem.html";
}
