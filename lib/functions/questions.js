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
        'Phillipy',
        'Cícera',
        'Rosane',
        'Gisele',
        player.name
    ]

    return names[random.int(0, 41)]
}

// QUESTÕES

export default function questions() {

    let easy_questions = []
    let medium_questions = []
    let hard_questions = []
    let questions = {
        
    // FÁCEIS
    
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

                let n1 = numbers.medium()
                let n2 = numbers.medium()
                let n3 = numbers.medium()

                let nome = name()

                console.clear()
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} é dono(a) de uma empresa. Sua empresa é dividida em ${'4'.red} setores: ${colors.bold('Atendimento, Gestão, Operações e Finanças.')}\nEm sua empresa, ${`${n1}%`.red} dos funcionáios são do setor de atendimento, ${`${n2}%`.red} são do setor de gestão e ${`${n3}%`.red} são do setor de operações.\nConsiderando os dados anteriores, ${'quantos porcento dos funcionários representam o setor de finanças?'.blue}\n`)

                const resp = await inquirer.prompt({
                    name: 'q2',
                    type: 'input',
                    message: 'Resposta?',
                    validate: (input) => {
                        input = input.match('')
                        if (!input) {
                            return 'Por favor informe um número válido!'
                        }
                        return true
                    }
                })
                return await verify(resp.q2 == 100 - (n1 + n2 + n3) || resp.q2 == 100 - (n1 + n2 + n3) + '%', 100 - (n1 + n2 + n3))
            },

            q3: async () => {
                let n = numbers.simple()
                let nome = name()

                let n1 = numbers.simple()
                let n2 = numbers.simple()
                let n3 = numbers.hard()

                function f() {
                    let x = (n3-n2)/n1
                    let rand = random.int(1, 2)

                    if (rand != 1) {
                        x -= random.int(1,9)
                    }
                    return x.toFixed(2)
                }
                x = f()
                console.clear()
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} estava fazendo uma atividade de matemática e se deparou com a seguinte equação:\n\n    ${colors.cyan(n1)+'x'}${'+'.blue}${colors.cyan(n2)} ${'='.green} ${colors.cyan(n3)}\n\n${nome} chegou no seguinte resultado: x = ${x}\n`)
                
                const resp = await inquirer.prompt({
                    name: 'q3',
                    type: 'list',
                    message: `${'Este resultado está correto?'.blue}`,
                    choices: [
                        'VERDADEIRO',
                        'FALSO'
                    ]
                })
                return await verify(resp.q3)

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

    // MÉDIAS

        medium: {
            
        },

    // DIFÍCEIS

        hard: {
           
        }
    }

    // IMPLANTAÇÃO DAS QUESTÕES NAS ARRAYS + EMBARALHAMENTO 

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