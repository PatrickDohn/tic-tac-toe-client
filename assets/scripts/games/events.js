const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGameStart = function (event) {
  // prevent refreshing the page everytime
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // assin the first piece to  the value X and store it in the store
  // make requesst to API of new game starting
  api.gameStart(formData)
    .then(ui.gameStartSuccess)
    .catch(ui.gameStartFailure)
}

const onGamePosition = function (clickEvent) {
  console.log(store.player)
  const click = clickEvent.target
  const index = $(click).data('cell-index')
  store.index = index
  store.clickedCell = clickEvent.target
  console.log(index)
  if (clickEvent.target.innerText === '') {
    api.gamePosition(index, store.player)
      .then(ui.clickPosition)
  }
}

module.exports = {
  onGameStart: onGameStart,
  onGamePosition: onGamePosition
  // switchPlayer: switchPlayer,
}

// use the store to hold what piece is being played. Use the game array to find patterns for winning positions. Verify position being filled.

// start game also need to reset board
