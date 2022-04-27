import load from "./lib/load.js";
import start from "./lib/start.js";

(async function main(){

    await load()
    await start()

})()