import random from "random"

export let player = {
    name: '',
    score: 5300,
    lifes: 5,
    question: {
        count: 0,
        isCorrect: 0
    }
}

export let numbers = {
    simple: () => {
        let rand = random.int(1, 10)  
        return rand
    },

    intermedium: () => {
        let rand = random.int(2, 18)
        return rand
    },

    medium: () => {
        let rand = random.int(10, 30)
        return rand
    },

    hard: () => {
        let rand = random.int(30, 90)
        return rand
    },

    complex: () => {
        let rand = random.int(55, 150)
        return rand
    }
}