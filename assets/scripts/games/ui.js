const store = require('../store')

const gameStartSuccess = function (game) {
  console.log(game, 'game started')
  store.game = game
}

let turn = true

store.player = 'X'

const clickPosition = function (response) {
  store.game = response.game
  $(store.clickedCell).text(store.player)
  const player = turn ? 'O' : 'X'
  console.log(player)
  turn = !turn
  store.player = player
  $('#playersTurn').text('Player ' + store.player)
  // for loop to go through the array of winning combos
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
  for (let i = 0; i < winningCombos.length; i++) {
    // assign combos to winningCombos[i] so I dont have to retype as much
    const combos = winningCombos[i]
    console.log(response.game.cells[combos[0]] + response.game.cells[combos[1]] + response.game.cells[combos[2]])
    // compare cells that have been clicked on to each index of winningCombos
    if (response.game.cells[combos[0]] === response.game.cells[combos[1]] && response.game.cells[combos[1]] === response.game.cells[combos[2]] && response.game.cells[combos[2]] !== '') {
      ($('#playersTurn').text('Player ' + store.player + ' wins!'))
    }
  }
}

// else if (response.game.cells[2] !== '' && response.game.cells[2] === response.game.cells[4] && response.game.cells[2] === response.game.cells[6]) {
//     ($('#player-message').text('Player ' + response.game.cells[2] + ' wins!'))
//   }

module.exports = {
  gameStartSuccess: gameStartSuccess,
  clickPosition: clickPosition
}
