document.addEventListener('DOMContentLoaded', () => {
    const passwordDigits = [2, 5, 0, 6];
    let currentLevel = 0;
    let revealedPassword = ['', '', '', ''];

    const puzzles = [
        {
            question: "Qual é um personagem do tipo de Diana em League of Legends?",
            options: ["Suporte", "Assassino", "Tanque", "Atirador"],
            answer: "Assassino"
        },
        {
            question: "Qual é a ult da Diana?",
            options: ["Lua Crescente", "Lâmina Crescente", "Escudo Lunar", "Golpe Lunar"],
            answer: "Lua Crescente"
        },
        {
            question: "Qual é o nome do culto que a Diana pertence?",
            options: ["Solari", "Lunari", "Estelari", "Noctari"],
            answer: "Lunari"
        },
        {
            question: "Qual é o nome da habilidade 'E' de Diana?",
            options: ["Golpe de Luz", "Clareira Lunar", "Escudo de Prata", "Lâmina Lunar"],
            answer: "Clareira Lunar"
        }
    ];

    const puzzleContainer = document.getElementById('puzzle-container');
    const passwordElement = document.getElementById('password');
    const tituloElemnet = document.getElementById('titulo');

    function loadPuzzle() {
        if (currentLevel < puzzles.length) {
            const puzzle = puzzles[currentLevel];
            puzzleContainer.innerHTML = `
                <p>${puzzle.question}</p>
                ${puzzle.options.map(option => `<div class="option">${option}</div>`).join('')}
                <p id="feedback"></p>
            `;
            document.querySelectorAll('.option').forEach(optionElement => {
                optionElement.addEventListener('click', () => checkAnswer(optionElement, puzzle.answer));
            });
        } else {
            tituloElemnet.innerHTML = '<h1>Parabéns gatinha!</h1>';
            puzzleContainer.innerHTML = '<p>Você se provou como mono Diana. Espero que tenha gostado da brincadeira, o presente é simples, mas pensando e dado a você de coração! Espero que você tenha aproveitado e curtido muito o seu dia! Feliz aniversário sua linda! Agora vem ca e deixa eu te dar um abraco!</p>';
        }
    }   

    function checkAnswer(optionElement, correctAnswer) {
        const feedbackElement = document.getElementById('feedback');
        if (optionElement.textContent === correctAnswer) {
            revealedPassword[currentLevel] = passwordDigits[currentLevel];
            updatePassword();
            currentLevel++;
            setTimeout(loadPuzzle, 1000); // Pequeno atraso para transição suave
        } else {
            feedbackElement.textContent = 'Resposta incorreta, tente novamente.';
            optionElement.classList.add('incorrect');
            setTimeout(() => {
                optionElement.classList.remove('incorrect');
                feedbackElement.textContent = '';
            }, 5000);
        }
    }

    function updatePassword() {
        passwordElement.textContent = revealedPassword.join('');
    }

    loadPuzzle();
});
