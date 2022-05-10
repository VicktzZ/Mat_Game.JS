const chalkAnimation = import("chalk-animation");
const colors = require("colors");
const { player } = require("./consts.js");
const { breakword } = require("./functions/misc.js");
const { star } = require('./functions/star.js')
const { sleep } = require('./functions/sleep.js')
const questions = require("./functions/questions.js");
const rls = require('readline-sync')
const emoji = require("node-emoji")

let easyQuestions = questions.questions().easy_questions
let mediumQuestions = questions.questions().medium_questions
let hardQuestions = questions.questions().hard_questions

module.exports = {

    game: async () => {

        // FASE FÁCIL - ESTAGIO 1

        console.clear();
        (await chalkAnimation).default.rainbow(`
        FASE 1 - FÁCIL
        `)
        await sleep(3000)

        for (let i = 0; i < easyQuestions.length; i++) {
            if (player.lifes <= 0) {
                return lose()
            }

            player.question.count++
            await easyQuestions[i]()

            if (player.lifes <= 0) {
                return lose()
            }
        }
            
        await breakword(`
            Parabéns!
            Você concluiu o nível ${'FÁCIL!'.green}
            ${'DIFICULDADE AUMENTADA'.yellow}

            Você possui ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:').repeat(player.lifes)}
            Você possui ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}

            Pressione "z" para continuar...
        `, 35)

        rls.keyInPause('')

        // FASE MÉDIA - ESTAGIO 2
        console.clear();
        (await chalkAnimation).default.rainbow(`
            FASE 2 - MÉDIO`
            )
        await sleep(3000)

        for (let j = 0; j < mediumQuestions.length; j++) {
            if (player.lifes <= 0) {
                return lose()
            }

            player.question.count++
            await mediumQuestions[j]()

            if (player.lifes <= 0) {
                return lose()
            }
        }

        await breakword(`
            Parabéns!
            Você concluiu o nível ${'MÉDIO!'.yellow}
            ${'DIFICULDADE AUMENTADA'.red}

            Você possui ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:').repeat(player.lifes)}
            Você possui ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}

            Pressione "z" para continuar...
        `, 42.5)

        rls.keyInPause('')

        // FASE DIFIÍCIL - ESTÁGIO 3
        console.clear();
        (await chalkAnimation).default.rainbow(`
            FASE 3 - DIFÍCIL
            `)
        await sleep(3000)

        for (let k = 0; k < hardQuestions.length; k++) {
            if (player.lifes <= 0) {
                return lose()
            }

            player.question.count++
            await hardQuestions[k]()
            
            if (player.lifes <= 0) {
                return lose()
            }
        }

    },

    lose: async () => {
        await breakword(`
        Parece que você ficou ${'SEM VIDAS'.red}! ${emoji.emojify(':fearful:')} 
        Infelizmente você foi ${colors.bold('DESCLASSIFICADO!').red} ${emoji.emojify(':sob:')}

        Sua pontuação final: ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}
        
        Você respondeu ${`${player.question.count}/30`.blue} questões. ${emoji.emojify(':sparkles:')}
        Sendo elas ${`${player.question.isCorrect}`.green} corretas. ${emoji.emojify(':heavy_check_mark:')}

        ${'FIM DE JOGO!'.inverse}
        ${emoji.emojify(':skull:'.repeat(3))}
        `);

        rls.keyInPause('', { limit: 'esc' })

    },

    win: async () => {
        
    }
}