import emoji from "node-emoji";
import { player } from "../consts.js";
import rls from 'readline-sync'
import colors from 'colors'
import { createSpinner } from "nanospinner";

export function shuffle(arr) {
    return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)        
}

export async function breakword(word, ms) {
    await pausa(word, ms);
}

export function sleep(ms = 2000) {
    return new Promise(r => setTimeout(r, ms))
}       

export function star(){
    if (player.score >= 13500) {
        return 5
    } else if (player.score >= 10800){
        return 4
    } else if (player.score >= 8100){
        return 3
    } else if (player.score >= 5400){
        return 2
    } else if (player.score >= 2700){
        return 1
    }
}

export async function verify(isCorrect, r = null) {
    console.log('')
    await sleep(10)
    const spinner = createSpinner('Checando resposta...').start()
    await sleep()

    if (isCorrect) {
        player.question.isCorrect ++
        
        spinner.success({ text: `Resposta ${'EXATA!'.green}\n${colors.bold('+', player.question.count > 23 ? 750 : player.question.count > 13 ? 500 : 250).green} pontos!`})
        
        player.score += player.question.count > 23 ? 750 : player.question.count > 13 ? 500 : 250
        
        console.log(`
        Você tem ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:'.repeat(player.lifes))}
        Você tem ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}
        `);
        
        console.log('Pressione "z" para continuar...');
        rls.keyInPause('')
    } else {
        player.lifes --
        
        spinner.error({ text: `Resposta ${'ERRADA!'.red}\n${'- '.red + colors.red(Math.floor(player.score * 0.2)) + ' pontos!'}` })
        
        console.log(`\nA resposta era: ${colors.blue(r)}`);

        player.score = Math.floor(player.score * 0.9)
        console.log(`
        Você tem ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:'.repeat(player.lifes))}
        Você tem ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}
        `);

        console.log('Pressione "z" para continuar...');
        rls.keyInPause('')
    }
}

function pausa(word, ms = 30) {
    return new Promise(resolve => {
            setTimeout(() => {
            resolve();
            }, 42 * word.length);

            let i = 0
            let arr = []

            let contador = (i) => {
            console.clear()
            arr.push(word[i])
            console.log(arr.join(""))

            i++
        }

        let intervalo = setInterval(() => {

        if (word.length === i) {
            clearInterval(intervalo)
            return 0
        } else {
            contador(i)
            i++
        }

        }, ms);

    });
}

