import questions from "./functions/questions.js";

export async function game() {

    // FASE FÁCILL - ESTAGIO 1
    for (let i = 0; i < questions().easy_questions.length; i++) {
        console.log(questions().easy_questions)
    }

    // FASE MÉDIA - ESTAGIO 2
    for (let j = 0; j < questions().medium_questions.length; j++) {
        await questions().medium_questions[j]()
    }

    // FASE DIFIÍCIL - ESTÁGIO 3
    for (let k = 0; k < questions().hard_questions.length; k++) {
        await questions().medium_questions[k]()
    }

}