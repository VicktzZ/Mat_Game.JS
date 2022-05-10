const { player, numbers } = require("../consts.js");
const colors = require("colors")
const random = require("random")
const rls = require('readline-sync')
const inquirer = require("inquirer");
const gradient = require("gradient-string");
const { table } = require("table");
const { breakword, shuffle, verify } = require("./misc.js");
const { sleep } = require('./sleep.js')
const { parse } = require('mathjs')
const cliProgress = require("cli-progress");

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
        'Cícera',
        'Rosane',
        'Gisele',
        player.name
    ]

    return names[random.int(0, 40)]
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

module.exports = {
    
    questions: () => {

        let easy_questions = [];
        let medium_questions = [];
        let hard_questions = [];
        let questions = {
            // FÁCEIS
            easy: {
                q1: async () => {

                    let n = numbers.medium();
                    let nome = name();

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm uma partida de um jogo de video game, ${nome} ganhou ${colors.red(n)} pontos.\nSabendo que o total de pontos que ele(a) possui atualmente é o ${colors.bold('TRIPLO')} de pontos ganhos na partida, ${`quantos pontos ${nome} tem?`.blue}\n`);

                    const resp = await inquirer.prompt({
                        name: 'q1',
                        type: 'input',
                        message: 'Resposta?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                return 'Por favor informe um número válido!';
                            }
                            return true;
                        }
                    });
                    return await verify(resp.q1 == n * 3, n * 3);
                },

                q2: async () => {

                    let n1 = numbers.medium();
                    let n2 = numbers.medium();
                    let n3 = numbers.medium();

                    let nome = name();

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} é dono(a) de uma empresa. Sua empresa é dividida em ${'4'.red} setores: ${colors.bold('Atendimento, Gestão, Operações e Finanças.')}\nEm sua empresa, ${`${n1}%`.red} dos funcionários são do setor de atendimento, ${`${n2}%`.red} são do setor de gestão e ${`${n3}%`.red} são do setor de operações.\nConsiderando os dados anteriores, ${'quantos porcento dos funcionários representam o setor de finanças?'.blue}\n`);

                    const resp = await inquirer.prompt({
                        name: 'q2',
                        type: 'input',
                        message: 'Resposta?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                return 'Por favor informe um número válido!';
                            }
                            return true;
                        }
                    });
                    return await verify(resp.q2 == 100 - (n1 + n2 + n3) || resp.q2 == 100 - (n1 + n2 + n3) + '%', 100 - (n1 + n2 + n3));
                },

                q3: async () => {
                    let nome = name();

                    let n = random.int(1, 10);
                    let n2 = random.int(1, 10);
                    let x = { x: numbers.simple() };

                    let e = parse(`${n}x${op()}${n2}`);
                    let r = random.int(1, 2) == 1 ? x.x : x.x + random.int(-3, 5);

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} estava fazendo uma atividade de matemática e se deparou com a seguinte equação:\n\n    ${(e.toString() + ' = ' + e.evaluate(x)).cyan}\n\n${nome} chegou no seguinte resultado: ${`x = ${r}`.red}\n`);

                    const resp = await inquirer.prompt({
                        name: 'q3',
                        type: 'list',
                        message: `Este resultado está correto?`,
                        choices: [
                            'VERDADEIRO',
                            'FALSO'
                        ]
                    });
                    return await verify(resp.q3 == (x.x == r ? 'VERDADEIRO' : 'FALSO'), x.x == r ? 'VERDADEIRO' : 'FALSO');

                },

                q4: async () => {
                    let altura = numbers.hard();
                    let andares = random.int(5, 10);
                    let mult = random.int(2, 5);

                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm um prédio de ${`${altura}m`.red} de altura, existem ${colors.red(andares)} andares. Seguindo essa mesma lógica, se o prédio tivesse ${`${altura * mult}m`.red} de altura, ${`quantos andares a MAIS ele teria?`.blue}\n`);

                    const resp = await inquirer.prompt({
                        name: 'q4',
                        type: 'input',
                        message: 'Resposta?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                return 'Por favor informe um número válido!';
                            }
                            return true;
                        }
                    });
                    return verify(resp.q4 == andares * mult - andares, andares * mult - andares);
                },

                q5: async () => {
                    let add = numbers.simple();
                    let sub = numbers.simple();
                    let n1 = numbers.simple();
                    let n2 = n1 + add;
                    let n3 = n2 - sub;
                    let n4 = n3 + add;
                    let n5 = n4 - sub;


                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nComplete a sequência abaixo:\n\n    ${`${n1}, ${n2}, ${n3}, ${n4},`.red + ' ???'.blue}\n`);
                    const resp = await inquirer.prompt({
                        name: 'q5',
                        type: 'input',
                        message: 'Resposta?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                return 'Por favor informe um número válido!';
                            }
                            return true;
                        }
                    });
                    return await verify(resp.q5 == n5, n5);
                },

                q6: async () => {
                    let partidas = random.int(15, 30);
                    let vitoria = random.int(1, 7);

                    let nome = name();
                    let nome2 = name();

                    while (nome2 == nome) {
                        nome2 = new name();
                    }

                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} e ${nome2} estão jogando pedra, papel ou tesoura.\nSabendo que no total foram ${colors.red(partidas)} partidas jogadas e que ${nome} ganhou ${colors.red(vitoria)} vezes, ${`quantas vezes ${nome2} PERDEU?`.blue}\n`);
                    const resp = await inquirer.prompt({
                        name: 'q6',
                        type: 'input',
                        message: 'Resposta?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                return 'Por favor informe um número válido!';
                            }
                            return true;
                        }
                    });
                    return await verify(resp.q6 == vitoria, vitoria);
                },

                q7: async () => {
                    let nome = name();
                    let quad = quadrado();
                    let quad2 = quadrado();

                    let list = () => {
                        let list = [
                            (Math.sqrt(quad) + Math.sqrt(quad2)) + 2,
                            (Math.sqrt(quad) + Math.sqrt(quad2)),
                            (Math.sqrt(quad) + Math.sqrt(quad2)) - 2,
                            Math.round((Math.sqrt(quad) + Math.sqrt(quad2)) * 1.25)
                        ];
                        return list;
                    };

                    let lista = shuffle(list());

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm um tarefa escolar, ${nome} ficou preso(a) em uma questão: \n\n    ${colors.bold('V').cyan + colors.blue(quad + ' +')} ${colors.bold('V').cyan + colors.blue(quad2)}\n\n`);

                    const resp = await inquirer.prompt({
                        name: 'q7',
                        type: 'list',
                        message: 'Qual o valor da expressão?',
                        choices: [
                            `A) ${lista[0]}`,
                            `B) ${lista[1]}`,
                            `C) ${lista[2]}`,
                            `D) ${lista[3]}`
                        ]
                    });

                    let r = () => {
                        if (lista[0] == (Math.sqrt(quad) + Math.sqrt(quad2))) {
                            return `A) ${lista[0]}`;
                        } else if (lista[1] == (Math.sqrt(quad) + Math.sqrt(quad2))) {
                            return `B) ${lista[1]}`;
                        } else if (lista[2] == (Math.sqrt(quad) + Math.sqrt(quad2))) {
                            return `C) ${lista[2]}`;
                        } else {
                            return `D) ${lista[3]}`;
                        }
                    };

                    return await verify(resp.q7 == r(), r());
                },

                q8: async () => {
                    let nome = name();
                    let n1 = numbers.complex();
                    let n2 = numbers.hard();

                    while (n2 >= n1) {
                        n1 = numbers.complex();
                    }

                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm seu trabalho, o chefe de ${nome} lhe pediu que realizasse algumas tarefas. No momento, ${nome} realizou ${colors.red(n2)} tarefas de ${colors.red(n1)} no total.\nVeja seu progresso abaixo:\n`);

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
                            Math.floor((n2 / n1) * 100),
                            Math.floor((n2 / n1) * 98),
                            Math.floor((n2 / n1) * 90),
                            Math.floor((n2 / n1) * 85)
                        ];
                        return list;
                    };

                    let lista = shuffle(list());

                    console.log('');
                    sleep();

                    const resp = await inquirer.prompt({
                        name: 'q8',
                        type: 'list',
                        message: 'Qual o valor de X? (arredondado)',
                        choices: [
                            `A) ${lista[0]}%`,
                            `B) ${lista[1]}%`,
                            `C) ${lista[2]}%`,
                            `D) ${lista[3]}%`
                        ]
                    });

                    let r = () => {
                        if (lista[0] == Math.floor((n2 / n1) * 100)) {
                            return `A) ${lista[0]}%`;
                        } else if (lista[1] == Math.floor((n2 / n1) * 100)) {
                            return `B) ${lista[1]}%`;
                        } else if (lista[2] == Math.floor((n2 / n1) * 100)) {
                            return `C) ${lista[2]}%`;
                        } else {
                            return `D) ${lista[3]}%`;
                        }
                    };

                    return await verify(resp.q8 == r(), r());
                },

                q9: async () => {
                    let nome = name();
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
                        ];
                        return list;
                    };

                    let lista = shuffle(list());

                    let questionsArr = () => {
                        let index = 1;
                        let arr = [];

                        for (let i = 0; i < lista.length; i++) {

                            for (let j = index; j < lista.length; j++) {
                                if (lista[i].correto == true && lista[j].correto == true) {

                                    arr.push(`${i == 0 ? 'I' :
                                            i == 1 ? 'II' :
                                                i == 2 ? 'III' : 'IV'}`
                                    );

                                    arr.push(`${j == 1 ? 'II' :
                                            j == 2 ? 'III' :
                                                j == 3 ? 'IV' : 0}`
                                    );

                                } else
                                    continue;
                            } index++;
                        } return arr;
                    };

                    let qArr = questionsArr();

                    let p = () => {
                        return `    I) ${lista[0].pergunta}\n    II) ${lista[1].pergunta}\n    III) ${lista[2].pergunta}\n    IV) ${lista[3].pergunta}`.blue;
                    };

                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm uma prova de matemática, ${nome} ficou em dúvida na questão ${player.question.count}:\n\n${p()}\n`);
                    let rand = random.int(0, 3);
                    let q1, q2;

                    if (rand == 0) {
                        q1 = `I`;
                        q2 = `I, II, II`;
                    } else if (rand == 1) {
                        q1 = 'II';
                        q2 = 'II, III, IV';
                    } else if (rand == 2) {
                        q1 = 'III';
                        q2 = 'I, III, IV';
                    } else if (rand == 3) {
                        q1 = 'IV';
                        q2 = 'I, II, IV';
                    }

                    let choices = [
                        `${qArr[0]}, ${qArr[1]}`,
                        `${q2}`
                    ];

                    choices = shuffle(choices);

                    const resp = await inquirer.prompt({
                        name: 'q9',
                        type: 'list',
                        message: 'Quais das afirmações acima estão corretas?',
                        choices: [
                            `A) ${choices[0]}`,
                            `B) ${choices[1]}`,
                            `C) Apenas ${q1}`,
                            `D) Nenhuma das alternativas anteriores`
                        ]
                    });

                    let r = () => {
                        if (choices[0] === `${qArr[0]}, ${qArr[1]}`) {
                            return `A) ${qArr[0]}, ${qArr[1]}`;
                        } else if (choices[1] === `${qArr[0]}, ${qArr[1]}`) {
                            return `B) ${qArr[0]}, ${qArr[1]}`;
                        }
                    };
                    await verify(resp.q9 == r(), r());
                },

                q10: async () => {
                    let nome = name();
                    let elevado = random.int(1, 4);
                    let elevado2 = random.int(1, 4);
                    let n1 = random.int(2, 5);
                    let n2 = random.int(1, 3);

                    let list = () => {
                        let list = [
                            (n1 ** elevado) - (n2 ** elevado2),
                            Math.ceil(((n1 ** elevado) - (n2 ** elevado2)) * 1.5),
                            ((n1 ** elevado) - (n2 ** elevado2)) - 2,
                            Math.round((n1 ** elevado) - (elevado ** 2))
                        ];
                        return list;
                    };

                    let lista = shuffle(list());

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm um desafio para a classe, o(a) Professor(a) ${nome} pediu que resolvessem a seguinte expressão:\n\n    ${colors.blue(n1) + '^'.magenta + colors.blue(elevado)} ${'-'.blue} ${colors.blue(n2) + '^'.magenta + colors.blue(elevado2)}\n\n`);

                    const resp = await inquirer.prompt({
                        name: 'q10',
                        type: 'list',
                        message: 'Qual o resultado dessa expressão?',
                        choices: [
                            `A) ${lista[0]}`,
                            `B) ${lista[1]}`,
                            `C) ${lista[2]}`,
                            `D) ${lista[3]}`
                        ]
                    });

                    let r = () => {
                        if (lista[0] == (n1 ** elevado) - (n2 ** elevado2)) {
                            return `A) ${lista[0]}`;
                        } else if (lista[1] == (n1 ** elevado) - (n2 ** elevado2)) {
                            return `B) ${lista[1]}`;
                        } else if (lista[2] == (n1 ** elevado) - (n2 ** elevado2)) {
                            return `C) ${lista[2]}`;
                        } else {
                            return `D) ${lista[3]}`;
                        }
                    };

                    return await verify(resp.q10 == r(), r());
                },

                q11: async () => {
                    let nome = name();
                    let randomMax = Math.floor(Math.random() * 20 + 12) * 2;
                    let randomMax2 = Math.floor(Math.random() * 20 + 12);
                    let randomArr = Math.floor(Math.random() * 4);
                    let randomMin = Math.floor(Math.random() * 10) + 1;

                    if (randomMin == randomMax2) {
                        randomMax += randomMax * 1.5;
                    } else if (randomMax2 < randomMin + 5) {
                        randomMax += Math.floor(randomMax * 1.5);
                    }

                    if (randomMax2 >= randomMax) {
                        randomMax += Math.round(randomMax * 1.6);
                    }

                    let operationOptions = [`Ache a DIFERENÇA entre os números.\nFormula: ${randomMax2} - ${randomMin}`, `Ache o RESTO da divisao entre os números.\nFormula: ${randomMax2} % ${randomMin}`, `Ache a MÉDIA ARITIMÉTICA entre os números.\nFormula: (${randomMax2} + ${randomMin}) / 2\n\n(PS: Se a resposta for um número decimal, insira somente o número inteiro.)`, `Ache a METADE (1/2) do maior número e some com o menor.\nFormula: (${randomMax2}/2) + ${randomMin}\n\n(PS: Se a resposta for um número decimal, insira somente o número inteiro.)`];
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEm um jogo de enigmas, ${nome} se depara com uma "Régua" que contém uma escala de ${'0'.red} até ${colors.red(randomMax)}.\nDo lado dela haviam os números ${colors.red(randomMin)} e ${colors.red(randomMax2)}.\nNo mesmo lado dizia: ${colors.blue(operationOptions[randomArr])}`);

                    let MAX = randomMax;
                    let MIN = 0;
                    let value = 0;
                    let key;

                    console.log('\n' + (new Array(Math.floor(randomMax / 5) + 1)).join(' ') + '[Z] <- -> [X]  INSERIR: [ESPAÇO]\n');
                    while (true) {

                        console.log('\x1B[1A\x1B[K|' +
                            (new Array(value + 1)).join('-') + 'O' +
                            (new Array(MAX - value + 1)).join('-') + '| ' + value
                        );

                        key = rls.keyIn('', { hideEchoBack: true, mask: '', limit: 'zx ' });

                        if (key === 'z') {
                            if (value > MIN) {
                                value--;
                            }
                        } else if (key === 'x') {
                            if (value < MAX) {
                                value++;
                            }
                        } else
                            break;

                    }

                    let r = async () => {
                        if (randomArr == 0)
                            await verify(value == randomMax2 - randomMin, randomMax2 - randomMin);
                        else if (randomArr == 1)
                            await verify(value == Math.floor(randomMax2 % randomMin), Math.floor(randomMax2 % randomMin));
                        else if (randomArr == 2)
                            await verify(value == Math.floor((randomMax2 + randomMin)) / 2, Math.floor((randomMax2 + randomMin) / 2));
                        else if (randomArr == 3)
                            await verify(value == Math.floor((randomMax2 / 2)) + randomMin, Math.floor((randomMax2 / 2)) + randomMin);
                    };

                    await r();

                },

                q12: async () => {
                    let nome = name();
                    let rand = random.int(0, 1);
                    let question = [
                        '    x + x + x = 60\n    x + y + y = 30\n    y - z = 3\n   (x + y) * z = ???',
                        '    x + (x/2) + x = 15\n    y - (y/2) + x = 10\n    z + z - (z/2) = 6\n    (x/2) + ((x/2) + (z/2)) * (y/2) = ???'
                    ];

                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nEnquanto ${nome} fazia um simulado de matemática, uma questão lhe trouxe dúvida:\n\n${colors.blue(question[rand])}\n`);

                    const resp = await inquirer.prompt({
                        name: 'q12',
                        type: 'input',
                        message: 'Qual a resposta para a expresão acima?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                i;
                                return 'Por favor informe um número váldo!';
                            }
                            return true;
                        }
                    });

                    if (rand == 0)
                        await verify(resp.q12 == 50, 50);
                    else
                        await verify(resp.q12 == 72, 72);
                },

                q13: async () => {
                    let nome = name();
                    let f1 = random.int(10, 15);
                    let a1 = random.int(8, 10);

                    let f2 = random.int(10, 15);
                    let a2 = random.int(8, 10);

                    let list = () => {
                        let list = [
                            (f1 * a1) + (f2 * a2),
                            Math.round(((f1 * a1) + (f2 * a2)) * 1.01),
                            Math.round(((f1 * a1) + (f2 * a2)) / 1.01),
                            Math.floor(((f1 * a1) + (f2 * a2)) ** 1.01),
                        ];
                        return list;
                    };

                    let lista = shuffle(list());


                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nNo banheiro de ${nome}, uma parede continha ${colors.red(f1)} fileiras com ${colors.red(a1)} azulejos.\nNo mesmo banheiro, uma outra parede continha ${colors.red(f2)} fileiras com ${colors.red(a2)} azulejos.\n${`No total, quantos azulejos o banheiro de ${nome} tem?`.blue}\n`);

                    const resp = await inquirer.prompt({
                        name: 'q13',
                        type: 'list',
                        message: 'Resposta?',
                        choices: [
                            `A) ${lista[0]}`,
                            `B) ${lista[1]}`,
                            `C) ${lista[2]}`,
                            `D) ${lista[3]}`
                        ]
                    });

                    let r = () => {
                        if (lista[0] == (f1 * a1) + (f2 * a2)) {
                            return `A) ${lista[0]}`;
                        } else if (lista[1] == (f1 * a1) + (f2 * a2)) {
                            return `B) ${lista[1]}`;
                        } else if (lista[2] == (f1 * a1) + (f2 * a2)) {
                            return `C) ${lista[2]}`;
                        } else if (lista[3] == (f1 * a1) + (f2 * a2)) {
                            return `D) ${lista[3]}`;
                        }
                    };

                    await verify(resp.q13 == r(), r());
                }
            },

            // MÉDIAS
            medium: {
                q1: async () => {
                    let nome = name();
                    let n1 = numbers.medium();
                    let n2 = numbers.medium();
                    let n3 = numbers.medium();

                    let dados = [
                        [colors.bold('Mês'), colors.bold('Quantidade de produtos vendidos')],
                        ['Janeiro'.cyan, colors.red(n1)],
                        ['Fevereiro'.cyan, colors.red(n2)],
                        ['Março'.cyan, colors.red(n3)]
                    ];

                    let config = {
                        header: {
                            alignment: 'center',
                            content: colors.bold('Vendas do 1º trimestre de 2022')
                        },

                        columns: [
                            { alignment: 'center' },
                            { alignment: 'center' },
                            { alignment: 'center' },
                            { alignment: 'center' }
                        ]
                    };

                    let list = () => {
                        let list = [
                            (((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3).toFixed(2),
                            ((((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3) * 1.15).toFixed(2),
                            ((((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3) * 1.1).toFixed(2),
                            ((((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3) * 1.05).toFixed(2),
                        ];
                        return list;
                    };

                    let lista = shuffle(list());

                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} é dono(a) de um pequeno mercadinho que vende chocolate.\nCada chocolate vendido traz um lucro de ${'R$3.00'.red}. Veja a tabela de vendas do primeiro trimestre abaixo:\n`);
                    console.log(table(dados, config));
                    await sleep();

                    const resp = await inquirer.prompt({
                        name: 'q1',
                        type: 'list',
                        message: `Em média, qual a margem de lucro da loja de ${nome} por trimestre?`,
                        choices: [
                            `A) R$${lista[0]}`,
                            `B) R$${lista[1]}`,
                            `C) R$${lista[2]}`,
                            `D) R$${lista[3]}`
                        ]
                    });

                    let r = () => {
                        if (lista[0] == (((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3).toFixed(2)) {
                            return `A) R$${lista[0]}`;
                        } else if (lista[1] == (((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3).toFixed(2)) {
                            return `B) R$${lista[1]}`;
                        } else if (lista[2] == (((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3).toFixed(2)) {
                            return `C) R$${lista[2]}`;
                        } else if (lista[3] == (((n1 * 3) + (n2 * 3) + (n3 * 3)) / 3).toFixed(2)) {
                            return `D) R$${lista[3]}`;
                        }
                    };

                    return await verify(resp.q1 == r(), r());
                },

                q2: async () => {
                    let nome = name();
                    let n1 = numbers.medium();
                    let n2 = numbers.medium();
                    let n3 = numbers.hard();
                    let n4 = random.int(1, 4);

                    while ((n1 ** n4) - n2 == n3) {
                        n3 = numbers.hard();
                    }

                    let list = () => {
                        let list = [
                            {
                                pergunta: `${n1} elevado a ${n4} menos ${n2} é igual a ${n3}.`,
                                correto: false
                            },
                            {
                                pergunta: 'a Raiz quadrada de 961 é 31.',
                                correto: true
                            },
                            {
                                pergunta: 'O Conjunto dos números complexos abrange somente alguns números racionais.',
                                correto: false
                            },
                            {
                                pergunta: 'Em gráficos de função quadrática, se A for igual a 0, a parábola intersecta X em dois pontos.',
                                correto: false
                            }
                        ];
                        return list;
                    };

                    let lista = shuffle(list());

                    let questions = () => {
                        let index = 1;
                        let arr = [];
                        let res;

                        for (let i = 0; i < lista.length; i++) {

                            if (lista[i].correto == true) {

                                res = `${i == 0 ? 'I' :
                                        i == 1 ? 'II' :
                                            i == 2 ? 'III' : 'IV'}`;

                            } else
                                continue;
                        } return res;
                    };

                    let res = questions();

                    let p = () => {
                        return `    I) ${lista[0].pergunta}\n    II) ${lista[1].pergunta}\n    III) ${lista[2].pergunta}\n    IV) ${lista[3].pergunta}`.blue;
                    };

                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nNuma sala de aula, o professor fez as seguintes afirmações:\n\n${p()}\n`);
                    let rand = random.int(0, 3);
                    let q1, q2;

                    if (rand == 0) {
                        q1 = `II, III`;
                        q2 = `I, II, IV`;
                    } else if (rand == 1) {
                        q1 = 'III, IV';
                        q2 = 'I, III, IV';
                    } else if (rand == 2) {
                        q1 = 'I, II';
                        q2 = 'III, IV';
                    } else if (rand == 3) {
                        q1 = 'I, IV';
                        q2 = 'I, III';
                    }

                    let choices = [
                        `${q1}`,
                        `${q2}`
                    ];

                    choices = shuffle(choices);

                    const resp = await inquirer.prompt({
                        name: 'q9',
                        type: 'list',
                        message: 'Quais das afirmações acima estão corretas?',
                        choices: [
                            `A) ${choices[0]}`,
                            `B) ${choices[1]}`,
                            `C) Apenas ${res}`,
                            `D) Nenhuma das alternativas anteriores`
                        ]
                    });

                    await verify(resp.q9 == `C) Apenas ${res}`, `C) Apenas ${res}`);
                },

                q3: async () => {
                    let nome = name();
                    let numberArr = [
                        [3, 4],
                        [3 * 2, 4 * 2],
                        [3 * 3, 4 * 3]
                    ];

                    numberArr = shuffle(numberArr);

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} é arquiteto(a) e precisa saber a hipotenusa de um triângulo de 90°, cujo apresenta ${colors.red(numberArr[0][0] + 'cm')} e ${colors.red(numberArr[0][1] + 'cm')} como medidas dos catetos.\n${'Formula: a^2 + b^2 = c^2 (Teorema de Pitágoras)'.blue}\n`);

                    const resp = await inquirer.prompt({
                        name: 'q1',
                        type: 'input',
                        message: 'Qual a hipotenusa desse triângulo?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                return 'Por favor informe um número válido!';
                            }
                            return true;
                        }
                    });
                    return await verify(resp.q1 == Math.sqrt(numberArr[0][0] ** 2 + numberArr[0][1] ** 2), Math.sqrt(numberArr[0][0] ** 2 + numberArr[0][1] ** 2));
                },

                q4: async () => {
                    let nome = name();
                    let nome2 = name();

                    while (nome == nome2) {
                        nome2 = name();
                    }

                    let dados = [
                        ['\u2580', '\u2580', '\u2580', '\u2580', '\u2580', '\u2580', '\u2580', '\u2580'],
                        ['\u2580', '\u2580', '\u2580', '\u2580', '\u2580', '\u2580', '\u2580', '\u2580'],
                        ['', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', ''],
                        ['\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray],
                        ['\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray, '\u2584'.gray],
                    ];

                    let config = {
                        columns: [
                            { alignment: 'center' },
                            { alignment: 'center' },
                            { alignment: 'center' },
                            { alignment: 'center' }
                        ]
                    };

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\n${nome} e ${nome2} estavam jogando xadrez. Eles contaram quantas peças e casas tem e ficaram com curiosidade de saber quais números determinariam essas quantidades na forma de potências com base igual a 2.\n`);

                    console.log(table(dados, config));

                    let list = () => {
                        let list = [
                            '2^6 peças e 2^6 casas',
                            '2^5 peças e 2^6 casas',
                            '2^5 peças e 2^4 casas',
                            '2^6 peças e 2^5 casas'
                        ];
                        return list;
                    };

                    let lista = shuffle(list());

                    sleep();
                    const resp = await inquirer.prompt({
                        name: 'q1',
                        type: 'list',
                        message: `Quais são as potências que determinam a quantidade de peças e casas no tabuleiro?`,
                        choices: [
                            `A) ${lista[0]}`,
                            `B) ${lista[1]}`,
                            `C) ${lista[2]}`,
                            `D) ${lista[3]}`
                        ]
                    });

                    let r = () => {
                        if (lista[0] == '2^5 peças e 2^6 casas') {
                            return `A) ${lista[0]}`;
                        } else if (lista[1] == '2^5 peças e 2^6 casas') {
                            return `B) ${lista[1]}`;
                        } else if (lista[2] == '2^5 peças e 2^6 casas') {
                            return `C) ${lista[2]}`;
                        } else if (lista[3] == '2^5 peças e 2^6 casas') {
                            return `D) ${lista[3]}`;
                        }
                    };

                    return await verify(resp.q1 == r(), r());
                },

                q5: async () => {
                    let palavras = [
                        'Ralo',
                        'Dado',
                        'Dedo',
                        'Pato',
                        'Gato',
                        'Mato',
                        'Mata'
                    ];

                    let rand = random.int(0, 6);

                    console.clear();
                    await breakword(`${`Questão ${player.question.count}/30`.blue}\n\nQuantos ${colors.bold('anagramas')} é possível fazer com a palavra ${colors.red(palavras[rand])}?\n`);

                    const resp = await inquirer.prompt({
                        name: 'q1',
                        type: 'input',
                        message: 'Resposta?',
                        validate: (input) => {
                            input = input.match('[0-9]+');
                            if (!input) {
                                return 'Por favor informe um número válido!';
                            }
                            return true;
                        }
                    });
                    return await verify(resp.q1 == 24, 24);
                }
            },

            // DIFÍCEIS
            hard: {}
        };

        // IMPLANTAÇÃO DAS QUESTÕES NAS ARRAYS + EMBARALHAMENTO 
        for (const question in questions.easy) {
            easy_questions.push(questions.easy[question]);
        }

        easy_questions = shuffle(easy_questions);

        for (const question in questions.medium) {
            medium_questions.push(questions.medium[question]);
        }

        medium_questions = shuffle(medium_questions);

        for (const question in questions.hard) {
            hard_questions.push(questions.hard[question]);
        }

        hard_questions = shuffle(hard_questions);
        return { easy_questions, medium_questions, hard_questions };
    }
}