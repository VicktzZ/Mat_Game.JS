const { player } = require('../consts.js')

module.exports = {
    star: () => {
        if (player.score >= 13500) {
            return 5
        } else if (player.score >= 10800){
            return 4
        } else if (player.score >= 8100){
            return 3
        } else if (player.score >= 5400){
            return 2
        } else if (player.score >= 2700){
            return 1
        }
    }
}