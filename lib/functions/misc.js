import emoji from "node-emoji";
import { player } from "../consts.js";
import rls from 'readline-sync'
import colors from 'colors'

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

function pausa(word, ms = 60) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve();
        }, 45.5 * word.length);

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

