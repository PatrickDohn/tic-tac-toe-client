curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
