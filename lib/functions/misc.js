const emoji = require("node-emoji");
const { player } = require("../consts.js");
const rls = require('readline-sync')
const colors = require('colors')
const { createSpinner } = require("nanospinner");
const { sleep } = require('./sleep.js')
const { star } = require('./star.js')

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
module.exports = {

    shuffle: (arr) => {
        return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)        
    },
    
    breakword: async (word, ms) => {
        await pausa(word, ms);
    },
    
    verify: async (isCorrect, r = null) => {
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
            
            console.log(`\nA resposta é: ${colors.blue(r)}`);
    
            player.score = Math.floor(player.score * 0.8)
            console.log(`
            Você tem ${colors.red(player.lifes)} vidas. ${emoji.emojify(':heart:'.repeat(player.lifes))}
            Você tem ${colors.bold(player.score).green} pontos. ${emoji.emojify(':star:'.repeat(star()))}
            `);
    
            console.log('Pressione "z" para continuar...');
            rls.keyInPause('')
        }
    }

}    
