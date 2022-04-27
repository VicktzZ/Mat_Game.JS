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
  
  async function asyncCall(word, ms) {
    await pausa(word, ms);
  }
  
  export default asyncCall