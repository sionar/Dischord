if user
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.usertag user.usertag
  end
end


