import { player, numbers } from "../consts.js";
import colors from "colors"
import random from "random"
import rls from 'readline-sync'
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import inquirer from "inquirer";
import gradient from "gradient-string";
import emoji from "node-emoji";
import { breakword, shuffle, sleep, verify } from "./misc.js";
import { lose } from "../game.js";
function name() {
    
    let names = [
        'Danilo',
        'Paulo',
        'Kauê',
        'Julia',
        'Vitor',
        'Fábio',
        'Emílio',
        'Josias',
        'Marcinho',
        'Luisinho',
        'Thayná',
        'Lucas',
        'Emilly',
        'Wilsson',
        'Sueli',
        'Thiago',
        'Luana',
        'Pacheco',
        'Rian',
        'Hugo',
        'Pedro',
        'Sophia',
        'Rayssa',
        'Eduardo',
        'Jhonata',
        'Guilherme',
        'Gabriel',
        'Marlon',
        'Jorel',
        'Rafaela',
        'Matheus',
        'Felipe',
        'Samuel',
        'Henrique',
        'Rafael',
        'Thalia',
        'João',
        'Cleiton',
        'Philipy',
        'Cícera',
        'Rosane',
        'Gisele',
        player.name
    ]

    return names[random.int(0, 41)]
}

export default function questions() {

    let easy_questions = []
    let medium_questions = []
    let hard_questions = []
    let questions = {
        
        easy: {
            q1: async () => {

                let n = numbers.medium()
                let nome = name()

                console.clear()
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm uma partida de um jogo de video game, ${nome} ganhou ${colors.red(n)} pontos.\nSabendo que o total de pontos que ele(a) possui atualmente é o ${colors.bold('triplo de pontos ganhos na partida').underline}, ${`quantos pontos ${nome} tem?`.blue}\n`)

                const resp = await inquirer.prompt({
                    name: 'q1',
                    type: 'input',
                    message: 'Resposta?',
                    validate: (input) => {
                        input = input.match('[0-9]+')
                        if (!input) {
                            return 'Por favor informe um número válido!'
                        }
                        return true
                    }
                })
                return await verify(resp.q1 == n*3, n*3)
            },
            
            q2: async () => {
                let n = numbers.simple()
                let nome = name()

                console.clear()
                console.log('Teste');

                console.log('Pressione qualquer tecla para continuar...');
                rls.keyInPause('')
            },

            q3: async () => {
                let n = numbers.simple()
                let nome = name()

                console.clear()
                console.log('Teste');

                console.log('Pressione qualquer botão para continuar...');
                rls.keyInPause('')
            },

            q4: async () => {
                let n = numbers.simple()
                let nome = name()

                console.clear()
                console.log('Teste');

                console.log('Pressione qualquer botão para continuar...');
                rls.keyInPause('')
            },

            q5: async () => {
                let n = numbers.simple()
                let nome = name()

                console.clear()
                console.log('Teste');

                console.log('Pressione qualquer botão para continuar...');
                rls.keyInPause('')
            },

            q6: async () => {
                let n = numbers.simple()
                let nome = name()

                console.clear()
                console.log('Teste');

                console.log('Pressione qualquer botão para continuar...');
                rls.keyInPause('')
            },
        },

        medium: {
            
        },

        hard: {
           
        }
    }

    for (const question in questions.easy) {
        easy_questions.push(questions.easy[question])
    }

    easy_questions = shuffle(easy_questions)

    for (const question in questions.medium) {
        medium_questions.push(questions.easy[question])
    }

    medium_questions = shuffle(medium_questions)

    for (const question in questions.hard) {
        hard_questions.push(questions.easy[question])
    }

    hard_questions = shuffle(hard_questions)
    return { easy_questions, medium_questions, hard_questions }
}