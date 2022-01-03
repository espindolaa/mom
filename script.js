class Question {
    constructor(title, options, correctOptionIndex) {
        this.title = title;
        this.options = options;
        this.correctOptionIndex = correctOptionIndex;
    }

    isCorrect(option) {
        return option == this.correctOptionIndex;
    }
}

currentQuestionIndex = 0;
questions = [
    new Question("Em que ano a Torre Eifel foi concluída?", ["1889", "1789", "1915", "1887"], 0),
    new Question("Onde Napoleão morreu?", ["Paris", "Londres", "Ilha de Elba", "Santa Helena"], 3),
    new Question("Onde está a Vênus de Milo?", ["MOMA", "Louvre", "Orsay", "Museu Britânico"], 1),
    new Question("Qual teu filho favorito?", ["Mateus", "Mateus", "Lucas", "Mateus"], 2),
]

function fill() {
    updateData(questions[0])
}

function updateData(question) {
    document.getElementById("question").innerHTML = question.title

    for(let i = 0; i < 4; i++) { 
        document.getElementById(i).innerHTML = question.options[i]
        document.getElementById(i).innerHTML = question.options[i]
        document.getElementById(i).innerHTML = question.options[i]
        document.getElementById(i).innerHTML = question.options[i]
    }
}

function checkAnswer(option) {
    if (questions[currentQuestionIndex].isCorrect(option)) {
        flashGreen(option);
        setTimeout(() => goToNext(), 500)
        return
    }
    flashRed(option)
}

function flashGreen(option) {
    flash(option, "green")
}

function goToNext() {
    currentQuestionIndex++;
    nextQuestion = questions[currentQuestionIndex]
    console.debug(nextQuestion)
    if(nextQuestion == null) {
        showPrize()
        return
    }
    updateData(nextQuestion)
}

function showPrize() {
    document.getElementById("question").innerHTML = "Parabéns, você ganhou! Seu prêmio é:"
    document.getElementById("options").innerHTML = `<p class="line-1 anim-typewriter">Uma viagem a Paris com seu caçula! :)</p>`
}

function flashRed(option) {
    flash(option, "#D32F2F")
}

function flash(option, color) {
    const button = document.getElementById(option)
    button.style.backgroundColor = color;
    setTimeout(() => button.style.backgroundColor = "#26a69a", 500)
}