const store = require('../store')
const api = require('./api')

let counterSquare = 0


const newGameSuccess = function (response) {
  //console.log(response, response.game)
  store.game = response.game
  store.player = 'X'
  $('#playersTurn').text('')
  $('#winningMessage').text('')
  $('.game-position').css('pointer-events', 'auto')
  $('.game-position').text('')
  $('.board-div').show()
  $('#gamesPlayed').text('')
  $('#message').text('')
  counterSquare = 0
}

const showGamesPlayedSuccess = function (response) {
  const gamesPlayed = response.games.length
  $('#gamesPlayed').text('You have played' + gamesPlayed + ' games')
}

const switchPlayer = function () {
  store.player = (store.player === 'X') ? 'O' : 'X'
  $('#playersTurn').text('Player ' + store.player + '\'s' + ' turn!')
}

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

const clickPosition = function (response) {
  store.game = response.game

  $(store.clickedCell).text(store.player)

  // for loop to go through the array of winning combos
  for (let i = 0; i < winningCombos.length; i++) {
    // assign combos to winningCombos[i] so I dont have to retype as much
    // const fullBoard = ['', '', '', '', '', '', '', '', '']
    const combos = winningCombos[i]
    const gameCells = response.game.cells
    // console.log(gameCells[combos[0]] + gameCells[combos[1]] + gameCells[combos[2]])
    // compare cells that have been clicked on to each index of winningCombos
    if (gameCells[combos[0]] === gameCells[combos[1]] && gameCells[combos[1]] === gameCells[combos[2]] && gameCells[combos[2]] !== '') {
      $('#winningMessage').text('Player ' + store.player + ' wins!')
      $('.game-position').css('pointer-events', 'none')
    }
  }
  switchPlayer()
}

const tieGame = function (event) {
  $('.box').on('click', function () {
    const tieCount = ++counterSquare
    if (tieCount === 9) {
      $('#winningMessage').text('Tie game')
      counterSquare = 0
    }
  })
}
tieGame()

module.exports = {
  newGameSuccess: newGameSuccess,
  clickPosition: clickPosition,
  showGamesPlayedSuccess: showGamesPlayedSuccess

}
