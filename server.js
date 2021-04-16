// importation de axios et d'express
const express = require('express')
const axios = require('axios')


// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 3333

// définition d'une route '/', la route par défaut.
// lorsqu'un client effectuera une requête sur ce endpoint
// on lui retournera le texte 'Hello World!' via la callback/
// Cette callback est aussi appellée 'handler function'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/calc/add/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: isNbOp1, op2: isNbOp2, error: 'A operande is not a number' }
      res.json(error)

    } else {
      const isNbOp1 = Number(op1)
      const isNbOp2 = Number(op2)
      const rest = isNbOp1 + isNbOp2
      const result = { op: 'add', op1: isNbOp1, op2: isNbOp2, result: rest }
      res.json(result)

    }
  } catch (e) {
    console.log(e.message)
  }
})

app.get('/calc/sub/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: isNbOp1, op2: isNbOp2, error: 'A operande is not a number' }
      res.json(error)

    } else {
      const isNbOp1 = Number(op1)
      const isNbOp2 = Number(op2)
      const rest = isNbOp1 - isNbOp2
      const result = { op: 'add', op1: isNbOp1, op2: isNbOp2, result: rest }
      res.json(result)

    }
  } catch (e) {
    console.log(e.message)
  }
})

app.get('/calc/mul/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: isNbOp1, op2: isNbOp2, error: 'A operande is not a number' }
      res.json(error)

    } else {
      const isNbOp1 = Number(op1)
      const isNbOp2 = Number(op2)
      const rest = isNbOp1 * isNbOp2
      const result = { op: 'add', op1: isNbOp1, op2: isNbOp2, result: rest }
      res.json(result)

    }
  } catch (e) {
    console.log(e.message)
  }
})

app.get('/calc/div/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: isNbOp1, op2: isNbOp2, error: 'A operande is not a number' }
      res.json(error)

    } else {
      const isNbOp1 = Number(op1)
      const isNbOp2 = Number(op2)
      const rest = isNbOp1 / isNbOp2
      const result = { op: 'add', op1: isNbOp1, op2: isNbOp2, result: rest }
      res.json(result)

    }
  } catch (e) {
    console.log(e.message)
  }
})

app.get('/calc/mod/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: isNbOp1, op2: isNbOp2, error: 'A operande is not a number' }
      res.json(error)

    } else {
      const isNbOp1 = Number(op1)
      const isNbOp2 = Number(op2)
      const rest = isNbOp1 % isNbOp2
      const result = { op: 'add', op1: isNbOp1, op2: isNbOp2, result: rest }
      res.json(result)

    }
  } catch (e) {
    console.log(e.message)
  }
})

app.get(`/hello/:firstName`, (req, res) => {
  res.send(`Bienvenue, Maître ${req.params.firstName}.`)
})


app.get('/people/:peopleId', async (req, res) => {
  try {
    const id = req.params.peopleId
    const response = await axios.get(`https://swapi.dev/api/people/${id}`)
    res.send(response.data)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/starships/:starId', async (req, res) => {
  try {
    const id = req.params.starId
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
    res.send(response.data)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/wiki/:word', async (req, res) => {
  try {
    const word = req.params.word
    const response = await axios.get(`https://en.wikipedia.org/wiki/${word}`)
    res.send(response.data)
  } catch (e) {
    console.log(e.message)
  }

})

app.get('/calc/add/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2
    const result = { op: 'add', op1: op1, op2: op2, result: op1 + op2 }

    res.json(result)
  } catch (e) {
    console.log(e.message)
  }
})

// démarrage de notre serveur sur le port 3000
app.listen(PORT, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`server listening at http://localhost:${PORT}`)
})