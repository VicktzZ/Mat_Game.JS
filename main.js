import { createSpinner } from "nanospinner";
import { sleep } from "./lib/functions/misc.js";
import { game } from "./lib/game.js";
import start from "./lib/start.js";

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