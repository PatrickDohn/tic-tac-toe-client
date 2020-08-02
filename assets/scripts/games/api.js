const config = require('../config')
const store = require('../store')

const newGame = function (formData) {
  //console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData
  })
}

const gamePosition = function (player) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: store.clickedCell.getAttribute('data-cell-index'),
          value: player
        },
        over: false
      }
    }
  })
}

const getGames = function () {
  // console.log('am I working')
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

module.exports = {
  newGame: newGame,
  gamePosition: gamePosition,
  getGames: getGames
}
