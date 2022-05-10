const chalkAnimation = import("chalk-animation");
const inquirer = require("inquirer");
const colors = require("colors");
const emoji = require("node-emoji");
const { player } = require("./consts.js");
const { sleep }  = require("./functions/sleep.js");
const rls = require('readline-sync');
module.exports = {
    start: async () => {
        console.clear();

        (await chalkAnimation).default.rainbow('\n       <<< MATEMÁTICA, o Jogo >>>');
        await sleep(3000);
        console.log(`
        ${colors.bold('Bem-vindo ao quiz de MATEMÁTICA!'.green)}

        ${colors.bold('Definições:')}

        ${'+'.blue} Significa adição.
        ${'-'.red} Significa subtração.
        ${'*'.green} Significa multiplicação.
        ${'/'.yellow} Significa divisão (ou fração).
        ${'^'.magenta} Significa elevado.
        ${'V'.cyan} Singifca raiz.

        ${'='.green} Significa igual.
        ${'+/-'.gray} Significa mais ou menos.
        ${'~='.white} Significa aproximadamente.
        ${'=/'.gray} Significa diferente.

        ${colors.bold(`O Quiz possui ${'20'.blue} perguntas:`)}

        9 ${'FÁCEIS'.green}
        7 ${'MÉDIAS'.yellow}
        4 ${'DIFÍCEIS'.red}

        Perguntas de nível ${'FÁCIL'.green} valem ${colors.bold('+250 pontos'.green)}
        Perguntas de nível ${'MÉDIO'.yellow} valem ${colors.bold('+500 pontos'.green)}
        Perguntas de nível ${'DIFÍCIL'.red} valem ${colors.bold('+750 pontos'.green)}

        Para respostas com ${colors.bold('números decimais')} utilize ${colors.bold('duas casas decimais')} e "." (ponto) ao invés de "," (vírgula).
        EX: ${'3,5'.red}${emoji.emojify(':x:')} -> ${'3.50'.green}${emoji.emojify(':heavy_check_mark:')}

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
            default: 'Player',
            validate: (input) => {
                input = input.match('[a-zA-Z]+');
                if (!input) {
                    return 'Por favor insira um nome válido!';
                }
                return true;
            }
        });

        player.name = nameQuestion.name;
        console.log(`
        Muito bem ${colors.bold(player.name.toUpperCase())}!
        Você tem ${'5'.red} vidas ${emoji.emojify(':heart::heart::heart::heart::heart:')}
        Se você ficar entre os 3 melhores colocados, você ganha um ${colors.bold('PRÊMIO!').green}
        Boa sorte! ${emoji.emojify(':thumbsup:')}

        Pressione "z" para continuar...`);

        rls.keyInPause('');

        console.table();

    }
}