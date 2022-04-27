import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import inquirer from "inquirer";
import gradient from "gradient-string";
import load from "./load.js";
import sleep from "./functions/sleep.js"
import breakword from "./functions/breakword.js";
import colors from "colors";
import emoji from "node-emoji";
import { player } from "./consts.js";

export default async function start() {
    console.clear()

    chalkAnimation.rainbow('       <<< MATEMÁTICA, o Jogo >>>')
    await sleep()
    console.log(`
    ${colors.bold('Bem-vindo ao quiz de MATEMÁTICA!'.green)}

    O Quiz possui ${'30'.blue} perguntas:

    13 ${'FÁCEIS'.green}
    10 ${'MÉDIAS'.yellow}
    7 ${'DIFÍCEIS'.red}

    Perguntas de nível ${'FÁCIL'.green} valem ${colors.bold('+100 pontos'.green)}
    Perguntas de nível ${'MÉDIO'.yellow} valem ${colors.bold('+200 pontos'.green)}
    Perguntas de nível ${'DIFÍCIL'.red} valem ${colors.bold('+300 pontos'.green)}
    
    A cada resposta incorreta, você perde:

    ${'-20% dos seus pontos'.red}
    ${'-1 coração'.red}

    Isso ${'independentemente'.underline} da questão respondida.

    `);

    await inquirer.prompt([
        {
            name: 'nome',
            message: 'A propósito, qual o seu nome?:',
            default: 'Player'
        }
    ])

    console.log(`
    Muito bem ${player.name}!
    Você tem 5 vidas ${emoji.emojify(':heart::heart::heart::heart::heart:')}
    Boa sorte! ${emoji.emojify(':thumbsup:')}
    `);
}