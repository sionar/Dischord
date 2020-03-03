json.entities do
  if user
    json.users do
      json.set! user.id do
        json.id user.id
        json.username user.username
        json.usertag user.usertag
      end
    end
  end
end

if user 
  json.session do
    json.id user.id
  end
end