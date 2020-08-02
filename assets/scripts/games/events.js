const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onNewGame = function (event) {
  // prevent refreshing the page everytime
  event.preventDefault()
  const form = event.target
  //console.log('Waht am i', form)
  const formData = getFormFields(form)
  //console.log('What am i?', formData)
  api.newGame(formData)
    .then(ui.newGameSuccess)
}

const onGamePosition = function (clickEvent) {
  //console.log(store.player)
  store.clickedCell = clickEvent.target
  if (store.clickedCell.innerText === '') {
    api.gamePosition(store.player)
      .then(ui.clickPosition)
  }
}

const onGetGames = function () {
  //console.log('This is onGetGames')
  api.getGames()
    .then(ui.showGamesPlayedSuccess)
}
module.exports = {
  onNewGame: onNewGame,
  onGamePosition: onGamePosition,
  onGetGames: onGetGames
}

// use the store to hold what piece is being played. Use the game array to find patterns for winning positions. Verify position being filled.

// start game also need to reset board
