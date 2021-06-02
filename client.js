const fsPromise = require('fs/promises')
const axios = require('axios')

/* Correction:
L'url est bonne, il faut assigner des valeurs à op1 et op2 et passer url1 à axios.get()
Dommage.
*/
const main = async () => {
  try {
    const op1 = []

    const url1 = `http://localhost:3333/calc/${op1}/${op2}`
  } catch (e) {
    console.error(e.message)
  }
}
