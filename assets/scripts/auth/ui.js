const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome back!')
  //console.log(store)
  store.user = response.user
  //console.log('store:', store)
  //console.log('token:', store.user.token)
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('.board-div').hide()
}
const signInFail = function () {
  $('#message').text('Sign in failed')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password!')
}

const changePasswordFail = function () {
  $('#message').text('Password change failed')
}

const signOutSuccess = function () {
  $('#message').text('Signed out success!')
  $('#unauthenticated').show()
  $('#authenticated').hide()
  $('#gamesPlayed').text('')
  $('#playersTurn').text('')
  $('#winningMessage').text('')
}

const signOutFail = function () {
  $('#message').text('Signed out fail')
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFail: signInFail,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFail: changePasswordFail,
  signOutSuccess: signOutSuccess,
  signOutFail: signOutFail
}
