import chalkAnimation from "chalk-animation";
import colors from "colors";
import { player } from "./consts.js";
import { breakword, sleep, star } from "./functions/misc.js";
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
        player.question.count++
        await easyQuestions[i]()
    }
        
    await breakword(`
        Parabéns!
        Você concluiu o nível ${'FÁCIL!'.green}
        ${'DIFICULDADE AUMENTADA'.yellow}

        Você possui ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:').repeat(player.lifes)}
        Você possui ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}

        Pressione qualquer tecla para continuar...
    `, 35)

    rls.keyInPause('')

    // FASE MÉDIA - ESTAGIO 2
    console.clear()
    chalkAnimation.rainbow('    FASE 2 - MÉDIO')
    await sleep(3500)

    for (let j = 0; j < mediumQuestions.length; j++) {
        if (player.lifes <= 0) {
            return lose()
        }
        player.question.count++
        await mediumQuestions[j]()
    }

    await breakword(`
        Parabéns!
        Você concluiu o nível ${'MÉDIO!'.yellow}
        ${'DIFICULDADE AUMENTADA'.red}

        Você possui ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:').repeat(player.lifes)}
        Você possui ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}

        Pressione qualquer tecla para continuar...
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
        player.question.count++
        await hardQuestions[k]()
    }

}

export async function lose() {
    await breakword(`
    Parece que você ficou ${'SEM VIDAS'.red}! ${emoji.emojify(':fearful:')} 
    Infelizmente você foi ${colors.bold('DESCLASSIFICADO!').red} ${emoji.emojify(':sob:')}

    Sua pontuação final: ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}
    
    Você respondeu ${`${player.question.count}/30`.blue} questões. ${emoji.emojify(':sparkless:')}
    Sendo elas ${`${player.question.isCorrect}`.green} corretas. ${emoji.emojify(':heavy_check_mark:')}

    ${'FIM DE JOGO!'.inverse}
    ${emoji.emojify(':skull:'.repeat(3))}
    `, 45.5);

    rls.keyInPause('', { guide: false, limit: 'undefined' })

}

export async function win() {
    
}