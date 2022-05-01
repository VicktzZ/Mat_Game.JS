import { numbers } from './lib/consts.js'

let num = randomInt(1, 10)
let num2 = randomInt(0, 10)
let op = () => {
    let rand = randomInt(1, 4)
    if (rand == 1) {
        return '+'
    } else if (rand == 2) {
        return '-'
    } else if (rand == 3) {
        return '*'
    } else return '/'
}

let x = () => {
    return {x: numbers.simple()}
}

let y = x()

console.log(num);
console.log(num2);

let e = parse(`${num}x${op()}${num2}`)
console.log(e.toString());
console.log(e.evaluate(y))

console.log(y.x);