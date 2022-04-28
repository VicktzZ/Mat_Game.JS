import chalkAnimation from "chalk-animation";
import colors from "colors";
import { player } from "./consts.js";
import { breakword, lose, sleep, star } from "./functions/misc.js";
import questions from "./functions/questions.js";
import rls from 'readline-sync'
import emoji from "node-emoji"

let easyQuestions = new questions().easy_questions
let mediumQuestions = new questions().medium_questions
let hardQuestions = new questions().hard_questions

export async function game() {

    // FASE FÁCIL - ESTAGIO 1
    console.clear()
    chalkAnimation.rainbow('    FASE 1 - FÁCIL')
    await sleep(3500)

    for (let i = 0; i < easyQuestions.length; i++) {
        if (player.lifes <= 0) {
            return lose()
        }
        await easyQuestions[i]()
    }
        
    await breakword(`
        Parabéns!
        Você concluiu o nível ${'FÁCIL!'.green}
        ${'DIFICULDADE AUMENTADA'.yellow}

        Você possui ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:').repeat(player.lifes)}
        Você possui ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}

        Pressione qualuqer botão para continuar...
    `, 42.5)

    rls.keyInPause('')

    // FASE MÉDIA - ESTAGIO 2
    console.clear()
    chalkAnimation.rainbow('    FASE 2 - MÉDIO')
    await sleep(3500)

    for (let j = 0; j < mediumQuestions.length; j++) {
        if (player.lifes <= 0) {
            return lose()
        }
        await mediumQuestions[j]()
    }

    await breakword(`
        Parabéns!
        Você concluiu o nível ${'MÉDIO!'.yellow}
        ${'DIFICULDADE AUMENTADA'.red}

        Você possui ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:').repeat(player.lifes)}
        Você possui ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}

        Pressione qualuqer botão para continuar...
    `, 42.5)

    rls.keyInPause('')

    // FASE DIFIÍCIL - ESTÁGIO 3
    console.clear()
    chalkAnimation.rainbow('    FASE 3 - DIFÍCIL')
    await sleep(3500)

    for (let k = 0; k < hardQuestions.length; k++) {
        if (player.lifes <= 0) {
            return lose()
        }
        await hardQuestions[k]()
    }

}