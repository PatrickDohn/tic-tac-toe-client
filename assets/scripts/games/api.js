const config = require('../config')
const store = require('../store')

const newGame = function (formData) {
  console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData
  })
}

const gamePosition = function (index, player) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: player
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame: newGame,
  gamePosition: gamePosition
}
