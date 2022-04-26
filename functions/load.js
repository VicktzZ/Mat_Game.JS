import cliSpinners from 'cli-spinners'
import sleep from "./sleep.js"

export default async function load() {
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
    
            console.clear()
            console.log(`   ${cliSpinners.dots.frames[j]} Carregando...`);
            j++
            await sleep(100)
        }    
    }

}