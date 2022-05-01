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
import { parse } from 'mathjs'

// Nomes aleatórios

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

// Operadores Aritiméticos Aleatórios

let op = (rand = random.int(1, 4)) => {
    if (rand == 1) {
        return '+'
    } else if (rand == 2) {
        return '-'
    } else if (rand == 3) {
        return '*'
    } else return '/'
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
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm uma partida de um jogo de video game, ${nome} ganhou ${colors.red(n)} pontos.\nSabendo que o total de pontos que ele(a) possui atualmente é o ${colors.bold('TRIPLO').underline} de pontos ganhos na partida, ${`quantos pontos ${nome} tem?`.blue}\n`)

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
                        input = input.match('[0-9]+')
                        if (!input) {
                            return 'Por favor informe um número válido!'
                        }
                        return true
                    }
                })
                return await verify(resp.q2 == 100 - (n1 + n2 + n3) || resp.q2 == 100 - (n1 + n2 + n3) + '%', 100 - (n1 + n2 + n3))
            },

            q3: async () => {
                let nome = name()

                let n = random.int(1, 10)
                let n2 = random.int(1, 10)
                let x = { x: numbers.simple() }
                
                let e = parse(`${n}x${op()}${n2}`)
                let r = random.int(1, 2) == 1 ? x.x : x.x + random.int(-3, 5)

                console.clear()
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} estava fazendo uma atividade de matemática e se deparou com a seguinte equação:\n\n    ${(e.toString() + ' = ' + e.evaluate(x)).cyan}\n\n${nome} chegou no seguinte resultado: ${`x = ${r}`.red}\n`)
                
                const resp = await inquirer.prompt({
                    name: 'q3',
                    type: 'list',
                    message: `${'Este resultado está correto?'.blue}`,
                    choices: [
                        'VERDADEIRO',
                        'FALSO'
                    ]
                })
                return await verify(resp.q3 == (x.x == r ? 'VERDADEIRO' : 'FALSO'), x.x == r ? 'VERDADEIRO' : 'FALSO')

            },

            q4: async () => {
                let altura = numbers.hard() 
                let andares = random.int(5, 10)
                let mult = random.int(2, 5)

                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm um prédio de ${`${altura}m`.red} de altura, existem ${colors.red(andares)} andares. Seguindo essa mesma lógica, se o prédio tivesse ${`${altura * mult}m`.red} de altura, ${`quantos andares a MAIS ele teria?`.blue}\n`)
                
                const resp = await inquirer.prompt({
                    name: 'q4',
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
                return verify(resp.q4 == andares * mult - andares, andares * mult - andares)
            },

            q5: async () => {
                let mult = random.int(1, 4)
                let sub = numbers.simple()
                let n1 = numbers.simple()
                let n2 = n1 * mult
                let n3 = n2 - sub
                let n4 = n3 * mult
                let n5 = n4 - sub

                
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nComplete a sequência abaixo:\n\n    ${`${n1}, ${n2}, ${n3}, ${n4},`.red + ' ???'.blue}\n`)
                const resp = await inquirer.prompt({
                    name: 'q5',
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
                return await verify(resp.q5 == n5, n5)
            },

            q6: async () => {
                let n1 = numbers.medium()
                let nome = name()
                let nome2 = name()
                
                if (n1%2 != 0){
                    n1++
                }

                while (nome2 == nome) {
                    nome2 = new name()
                }

                
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} e ${nome2} estão jogando pedra, papel ou tesoura.\nNo total, foram ${colors.red(n1)} partidas jogadas. Sabendo que ${nome} ganhou ${'2'.red} vezes mais que ${nome2}, ${`quantas vezes ${nome2} venceu?`.blue}\n`)
                const resp = await inquirer.prompt({
                    name: 'q6',
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
                return await verify(resp.q6 == (n1/2), (n1/2))
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