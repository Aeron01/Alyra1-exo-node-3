// importation de axios et d'express
const express = require('express')
const axios = require('axios')


// définition  mon appli
const appSrvXPRS = express()

// le port d'écoute de notre serveur
const PORT = 3333

// définition d'une route '/' par défaut.
// et retour d'un message de bienvenue via la callback
app.get('/', (req, res) => {
  res.send('Welcom stranger')
})

// fonction calculatrice de l'app
// partie addition
app.get('/calc/add/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1 //
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) { // check pour savoir si l'opérande est un chiffre ou non
      const error = { op: 'add', op1: op1, op2: op2, error: 'one of the operands is not a number.' } // mise en forme d'une variable de l'erreur sous forme de JSon
      res.json(error) // affichage du message d'erreur dans le navigateur

    } else {
      const isNbOp1 = Number(op1) //passage de isNbOp1 qui est une string en nombre
      const isNbOp2 = Number(op2)
      const rest = isNbOp1 + isNbOp2 // calcul des deux opérandes, ici une addition
      const result = { op: 'add', op1: isNbOp1, op2: isNbOp2, result: rest } // mise en forme d'une variable du résultat sous forme de JSon
      res.json(result) // affichage du résultat dans le navigateur

    }
  } catch (e) {
    console.log(e.message)
  }
})

// partie soustraction

app.get('/calc/sub/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: op1, op2: op2, error: 'one of the operands is not a number.' }
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

// partie multiplication

app.get('/calc/mul/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = {
        op: 'add', op1: op1, op2: op2, error: 'one of the operands is not a number.'
      }
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

// partie division

app.get('/calc/div/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: op1, op2: op2, error: 'one of the operands is not a number.' }
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

// partie modulo

app.get('/calc/mod/:op1/:op2', async (req, res) => {
  try {
    const op1 = req.params.op1
    const op2 = req.params.op2

    if (isNaN(op1) || isNaN(op2)) {
      const error = { op: 'add', op1: op1, op2: op2, error: 'one of the operands is not a number.' }
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



// démarrage du serveur sur le port 3333
app.listen(PORT, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`server appSrvXPRS listening at http://localhost:${PORT}`)
})