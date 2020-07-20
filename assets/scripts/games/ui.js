const store = require('../store')

const gameStartSuccess = function (game) {
  console.log(game, 'game started')
  store.game = game
}





const clickPosition = function (id, game) {
  console.log('You played X')
  console.log(game)
  store.game = game
  $('#' + id).text(store.player)
  console.log(id)
}

module.exports = {
  gameStartSuccess: gameStartSuccess,
  clickPosition: clickPosition
}
