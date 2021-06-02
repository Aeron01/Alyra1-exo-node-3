const fsPromise = require('fs/promises')
const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

if (process.argv.length !== 3) {
  console.log('Usage: node client.js url')
  process.exit(1)
}

const url = process.argv[2]
const INFOS_FILE = 'info.json'

const info = async () => {
  try {
    const response = await axios.get(url)
    const dom = new JSDOM(response.data)
    //const url = dom.window.document.querySelectorAll('link')
    const title = dom.window.document.querySelector('title')
    //const contentLength = dom.window.document.querySelector('')
    const nbUrl = dom.window.document.querySelectorAll('a')
    const nbImg = dom.window.document.querySelectorAll('img')

    //console.log de debug
    console.log(url)
    console.log(title.textContent)

    console.log(nbUrl.length)
    console.log(nbImg.length)

    /* Correction:
    Il ne te suffisait plus que d'écrire les informations dans un fichier JSON au lieu de les affichier
    avec un console.log.
    Dommage!!
    */
  } catch (e) {
    throw e
  }
}

info()
/*
const addInfo = async()=>{
  try{
      const emptyJsonString = '{}'
      await fsPromises.writeFile(INFOS_FILE, emptyJsonString)
      await info()
  }catch(e){
throw e
  }
}

const main = async () => {
  try {
    await addInfo()

  } catch (e) {
    console.error(`main: ${e.message}`)
  }
}

main()

*/
