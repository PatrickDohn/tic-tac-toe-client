const store = require('../store')

const newGameSuccess = function (response) {
  console.log(response, response.game)
  store.game = response.game
  $('.game-position').text('')
  $('.board-div').show()
}

let turn = true

store.player = 'X'

const clickPosition = function (response) {
  console.log(response.game)
  store.game = response.game
  $(store.clickedCell).text(store.player)
  const player = turn ? 'O' : 'X'
  console.log(player)
  turn = !turn
  store.player = player
  $('#playersTurn').text('Player ' + store.player + ' turn!')
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
      $('#gameMessage').text('Player ' + response.game.cells[combos[0]] + ' wins')
      $('.game-position').off('click')
    }
  }
}

module.exports = {
  newGameSuccess: newGameSuccess,
  clickPosition: clickPosition
}
