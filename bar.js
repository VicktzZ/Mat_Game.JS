import { shuffle } from './lib/functions/misc.js'

let list = [
    {
        t: 'A',
        correto: true
    },
    {
        t: 'B',
        correto: false
    },
    {
        t: 'C',
        correto: false
    },
    {
        t: 'D',
        correto: true
    }
]

let lista = shuffle(list)
let arr

let verificacao = () => {
    let index = 1
    arr = []
    let count = 0

    lista.forEach(element => {
        console.log(index);
        for (let i = index; i < lista.length; i++) {
            if (element.correto == true && lista[i].correto == true) {
                
                arr.push(
                    i == 1 ? 'I' :
                    i == 2 ? 'II' :
                    i == 3 ? 'III' : 0
                )

            } else continue
            count ++
        }
        index ++
        console.log(index);

        console.log(arr.join(', '))
    });
}

verificacao()

console.table(lista);
console.table(arr)