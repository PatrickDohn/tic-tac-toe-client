const config = require('../config')
const store = require('../store')

const gameStart = function (formData) {
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

const gamePosition = function (cellIndex) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: store.player
        },
        over: false
      }
    }
  })
}

module.exports = {
  gameStart: gameStart,
  gamePosition: gamePosition
}
