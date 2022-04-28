import chalkAnimation from "chalk-animation"
import inquirer from "inquirer";
import colors from "colors";
import emoji from "node-emoji";
import { player } from "./consts.js";
import { sleep } from "./functions/misc.js";

export default async function start() {
    console.clear()

    chalkAnimation.rainbow('       <<< MATEMÁTICA, o Jogo >>>')
    await sleep(3000)
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

    Se você perder todas suas vidas, você é ${colors.bold('DESCLASSIFICADO').red}.
    `);

    const nameQuestion = await inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'A propósito, qual o seu nome?',
        default: 'Player'
    })

    player.name = nameQuestion.name
    console.log(`
    Muito bem ${colors.bold(player.name.toUpperCase())}!
    Você tem ${'5'.red} vidas ${emoji.emojify(':heart::heart::heart::heart::heart:')}
    Se você ficar entre os 3 melhores colocados, você ganha um ${colors.bold('PRÊMIO!').green}
    Boa sorte! ${emoji.emojify(':thumbsup:')}
    `);
}