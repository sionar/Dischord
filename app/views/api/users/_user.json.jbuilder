json.entities do
  if user.id
    json.users do
      json.set! user.id do
        json.id user.id
        json.username user.username
        json.usertag user.usertag
      end
    end
  else
    json.users do
      json.set! user.id do
        json.id nil
        json.username nil
        json.usertag nil
      end
    end
  end
end

json.session do
  json.id user.id
end