export function shuffle(arr) {
    return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)        
}

export async function breakword(word, ms) {
    await pausa(word, ms);
}

export function sleep(ms = 2000) {
    return new Promise(r => setTimeout(r, ms))
}

function pausa(word, ms = 60) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve();
        }, 40 * word.length);

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

