import { player, numbers } from "../consts.js";
import colors from "colors"
import random from "random"
import rls from 'readline-sync'
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import inquirer from "inquirer";
import gradient from "gradient-string";
import emoji from "node-emoji";
import { breakword, lose, shuffle, sleep } from "./misc.js";

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
        player.name
    ]

    return names[random.int(0, 39)]
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
                console.log(`${nome} estava na feira e comprou ${colors.red(n)} maçãs.\nSabendo que o total de maçãs que ele(a) possui atualmente é o ${colors.bold('triplo de maçãs compradas').underline}, ${`quantas maçãs ${nome} tem?`.blue}`)
                
                console.log('Pressione qualquer botão para continuar...');
                rls.keyInPause('')

            },
            
            q2: async () => {
                let n = numbers.simple()
                let nome = name()

                console.clear()
                console.log('Teste');

                console.log('Pressione qualquer botão para continuar...');
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