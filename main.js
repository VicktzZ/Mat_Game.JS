const chalkAnimation = import("chalk-animation");
const { createSpinner } = require("nanospinner");
const { sleep } = require("./lib/functions/sleep.js");
const { game } = require("./lib/game.js");
const { start } = require("./lib/start.js");

(async function main(){

    // "Tela de carregamento"
    console.clear()
    let spinner = createSpinner('Carregando...')

    spinner.start()
    await sleep(3000)
    spinner.stop()

    // Introdução
    await start()
    
    // Inicio do jogo
    await game()

})()