'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game auth
  $('#game-start').on('click', gameEvents.onGameStart)
  $('.game-position').on('click', gameEvents.onGamePosition)
})
