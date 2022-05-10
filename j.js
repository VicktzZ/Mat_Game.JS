const colors = require("colors");
const { table } = require("table");
let tabela = [
    ['\u2584'.red + '\n\u2584 \u2584'.yellow + '\n\u2584 \u2584 \u2584'.green],       
]

let config = {
    singleLine: true,
    columns: [
        { alignment: 'center' },
        { verticalAlignment: 'middle' },
    ],
}

console.log(table(tabela, config));