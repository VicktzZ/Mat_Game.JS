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
import cliProgress from "cli-progress";

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

// Raiz Quadrada Exata

function quadrado() {
    let rand = random.int(1, 11)

    if (rand == 1) {
        return 9
    } else if (rand == 2) {
        return 16
    } else if (rand == 3) {
        return 25
    } else if (rand == 4) {
        return 36
    } else if (rand == 5) {
        return 49
    } else if (rand == 6) {
        return 64
    } else if (rand == 7) {
        return 81
    } else if (rand == 8) {
        return 100
    } else if (rand == 9) {
        return 121
    } else if (rand == 10) {
        return 144
    } else {
        return 169
    }
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
                let mult = random.int(2, 5)
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
                let partidas = random.int(15, 30)
                let vitoria = random.int(1, 7)

                let nome = name()
                let nome2 = name()

                while (nome2 == nome) {
                    nome2 = new name()
                }

                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} e ${nome2} estão jogando pedra, papel ou tesoura.\nSabendo que no total foram ${colors.red(partidas)} partidas jogadas e que ${nome} ganhou ${colors.red(vitoria)} vezes, ${`quantas vezes ${nome2} PERDEU?`.blue}\n`)
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
                return await verify(resp.q6 == vitoria, vitoria)
            },

            q7: async () => {
                let nome = name()
                let quad = quadrado()

                let list = () => {
                    let list = [
                        Math.sqrt(quad) + 2,
                        Math.sqrt(quad),
                        Math.sqrt(quad) - 2,
                        Math.sqrt(quad) * 2
                    ]
                    return list
                }
                
                let lista = shuffle(list())

                console.clear()
                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm um tarefa escolar, ${nome} ficou preso(a) em uma questão: \n\n    ${colors.bold('V').cyan + colors.blue(quad)}\n\n`)
                
                const resp = await inquirer.prompt({
                    name: 'q7',
                    type: 'list',
                    message: 'Qual o valor da expressão?'.blue,
                    choices: [
                        `A) ${lista[0]}`,
                        `B) ${lista[1]}`,
                        `C) ${lista[2]}`,
                        `D) ${lista[3]}` 
                    ]
                })

                let r = () => {
                    if (lista[0] == Math.sqrt(quad)) {
                        return `A) ${lista[0]}`    
                    } else if (lista[1] == Math.sqrt(quad)) {
                        return `B) ${lista[1]}`
                    } else if (lista[2] == Math.sqrt(quad)) {
                        return `C) ${lista[2]}`
                    } else {
                        return `D) ${lista[3]}`
                    }
                }

                return await verify(resp.q7 == r(), r())
            },

            q8: async () => {
                let nome = name()
                let n1 = numbers.complex()
                let n2 = numbers.hard()

                while (n2 > n1) {
                    n1 = new numbers.complex()
                }

                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm seu trabalho, o chefe de ${nome} lhe pediu que realizasse algumas tarefas. No momento, ${nome} realizou ${colors.red(n2)} tarefas de ${colors.red(n1)} no total.\nVeja seu progresso abaixo:\n`)
                
                const b1 = new cliProgress.SingleBar({
                    format: `Progresso de ${nome}: |` + colors.cyan('{bar}') + '| X% || {value}/{total} Tarefas',
                    barCompleteChar: '\u2588',
                    barIncompleteChar: '\u2591',
                    hideCursor: true
                });
                
                 b1.start(n1, n2);
                 b1.stop();

                let list = () => {
                    let list = [
                        Math.floor((n2/n1)*100),
                        Math.floor((n2/n1)*110),
                        Math.floor((n2/n1)*90),
                        Math.floor((n2/n1)*95)
                    ]
                    return list
                }
                
                let lista = shuffle(list())

                console.log('');

                const resp = await inquirer.prompt({
                    name: 'q8',
                    type: 'list',
                    message: 'Qual o valor de X? (sem casa decimal)'.cyan,
                    choices: [
                        `A) ${lista[0]}%`,
                        `B) ${lista[1]}%`,
                        `C) ${lista[2]}%`,
                        `D) ${lista[3]}%` 
                    ]
                })

                let r = () => {
                    if (lista[0] == Math.floor((n2/n1)*100)) {
                        return `A) ${lista[0]}%`    
                    } else if (lista[1] == Math.floor((n2/n1)*100)) {
                        return `B) ${lista[1]}%`
                    } else if (lista[2] == Math.floor((n2/n1)*100)) {
                        return `C) ${lista[2]}%`
                    } else {
                        return `D) ${lista[3]}%`
                    }
                }

                return await verify(resp.q8 == r(), r())
            },

            q9: async () => {
                let list = () => {
                    let list = [
                        {
                            pergunta: 'O conjunto de números naturais são todos aqueles que são maiores que zero.',
                            correto: true
                        },
                        {
                            pergunta: 'O conjunto de números racionais são todos aquels que são menores que zero.',
                            correto: false
                        },
                        {
                            pergunta: 'Uma fração é composta por um divisor e um dividendo.',
                            correto: false
                        },
                        {
                            pergunta: 'Em uma fração, o numerador permanece em cima enquanto o denominador permanece em baixo.',
                            correto: true
                        }
                    ]
                    return list
                }
                
                let lista = shuffle(list())

                let verificacao = () => {
                    let index = 1
                    lista.forEach(element => {
                        for (let i = index; i < lista.length; i++) {
                            if (element.correto == lista[i].correto) {
                                return (element.correto, lista[i].correto)
                            } else continue
                        }
                        index ++
                    });
                }

                let p = () => {
                    return `
                    I) ${lista[0].pergunta}
                    II) ${lista[1].pergunta}
                    III) ${lista[2].pergunta}
                    IV) ${lista[3].pergunta}`
                }

                let resposta = (list1, list2, i1, i2) => {
                    if (list1 && list2 == true) {
                        return `${i1}, ${i2}`
                    } else {
                        return `I, II` != `${i1}, ${i2}` ? `I, II, III` :
                               `II, III` != `${i1}, ${i2}` ? `II, III, IV` :
                               `III, IV` != `${i1}, ${i2}` ? `III, IV` :
                               `Apenas IV` != `${i1}, ${i2}` ? `Apenas IV` : 0
                    }
                }

                await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nResponda:\n\nI) ${p()}\n`)
               
                const resp = await inquirer.prompt({
                    name: 'q9',
                    type: 'list',
                    message: 'Quais das afirmações acima estão corretas?'.cyan,
                    choices: [
                        `A) ${lista[0]}%`,
                        `B) ${lista[1]}%`,
                        `C) ${lista[2]}%`,
                        `D) Nenhuma das alternativas`
                    ]
                })

                let r = () => {
                    if (lista[0] == Math.floor((n2/n1)*100)) {
                        return `A) ${lista[0]}%`    
                    } else if (lista[1] == Math.floor((n2/n1)*100)) {
                        return `B) ${lista[1]}%`
                    } else if (lista[2] == Math.floor((n2/n1)*100)) {
                        return `C) ${lista[2]}%`
                    } else {
                        return `D) ${lista[3]}%`
                    }
                }

                await verify(resp.q9 == r(), r())
            }
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