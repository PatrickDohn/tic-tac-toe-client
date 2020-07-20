const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const onGameStart = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  store.player = 'X'
  api.gameStart(formData)
    .then(ui.gameStartSuccess)
    .catch(ui.gameStartFailure)
}

const switchPlayer = function () {
  if (store.player === 'X') {
    store.player = 'O'
  } else if (store.player === 'O') {
    store.player = 'X'
  }
}

const onGamePosition = function (event) {
  console.log(store.player)
  const cell = event.target.id
  // if cell value is not null make Api request if not alert cell full
  console.log('you clicked' + cell)
  event.preventDefault()
  api.gamePosition(parseInt(cell) - 1)
    .then(response => {
      console.log('response object')
      console.log(response.game.cells)
      ui.clickPosition(cell, response)
      whoWon(response.game.cells)
      switchPlayer()
    })
}

const whoWon = function (cells) {
  if (cells[0, 1, 2] ===

  }
}

module.exports = {
  onGameStart: onGameStart,
  onGamePosition: onGamePosition,
  winningCombos: winningCombos,
  switchPlayer: switchPlayer

}

// use the store to hold what piece is being played. Use the game array to find patterns for winning positions. Verify position being filled.

// start game also need to reset board
