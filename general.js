document.addEventListener('DOMContentLoaded', function () {
    const instructionsPopup = document.getElementById('instructions');
    const startQuizBtn = document.getElementById('startQuiz');
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const retryBtn = document.getElementById('retry');
    const showAnswerBtn = document.getElementById('showAnswer');
    const timerElement = document.getElementById('timer');

    let currentQuestionIndex = 0;
    let score = 0;
    let timer;

    const questions = [
        {
            type: 'mcq',
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctAnswer: 'Paris'
        },
        {
            type: 'word',
            question: 'What is the capital of Japan?',
            correctAnswer: 'Tokyo'
        }
        // Add more questions as needed
    ];

    startQuizBtn.addEventListener('click', startQuiz);
    retryBtn.addEventListener('click', startQuiz);
    showAnswerBtn.addEventListener('click', showAnswers);

    function startQuiz() {
        instructionsPopup.style.display = 'none';
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        timerElement.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
        startTimer();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            quizContainer.innerHTML = ''; // Clear previous question

            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.textContent = currentQuestion.question;
            quizContainer.appendChild(questionElement);

            if (currentQuestion.type === 'mcq') {
                const optionsElement = document.createElement('div');
                optionsElement.classList.add('options');

                currentQuestion.options.forEach((option, index) => {
                    const optionElement = document.createElement('div');
                    optionElement.classList.add('option');
                    optionElement.textContent = option;
                    optionElement.addEventListener('click', () => checkAnswer(option, currentQuestion.correctAnswer));
                    optionsElement.appendChild(optionElement);
                });

                quizContainer.appendChild(optionsElement);
            } else if (currentQuestion.type === 'word') {
                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.placeholder = 'Type your answer';
                quizContainer.appendChild(inputElement);

                const submitBtn = document.createElement('button');
                submitBtn.textContent = 'Submit';
                submitBtn.addEventListener('click', () => checkAnswer(inputElement.value, currentQuestion.correctAnswer));
                quizContainer.appendChild(submitBtn);
            }
        } else {
            endQuiz();
        }
    }

    function checkAnswer(userAnswer, correctAnswer) {
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
        }

        currentQuestionIndex++;
        displayQuestion();
    }

    function startTimer() {
        let timeRemaining = 30; // seconds

        timer = setInterval(function () {
            timeRemaining--;
            if (timeRemaining >= 0) {
                timerElement.textContent = timeRemaining;
            } else {
                currentQuestionIndex++;
                displayQuestion();
                timeRemaining = 30;
            }
        }, 1000);
    }

    function endQuiz() {
        clearInterval(timer);
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        timerElement.style.display = 'none';
        scoreDisplay.textContent = `Your Score: ${score} out of ${questions.length}`;
    }

    function showAnswers() {
        // Implement logic to display correct answers
    }
});
