json.set! user.id do
  json.id user.id
  json.username user.username
  json.usertag user.usertag
  json.imageUrl url_for(user.image)
end
