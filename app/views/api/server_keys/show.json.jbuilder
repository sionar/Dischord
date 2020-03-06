json.entities do
  json.servers do
    json.partial! '/api/servers/server', server: @server
  end

  json.users do
    @users.each do |user|
      json.partial! 'api/users/user', user: user
    end
  end

  json.subscribers do
    @subscribers.each do |subscriber|
      json.partial! 'api/subscribers/subscriber', subscriber: subscriber
    end
  end
end

json.partial! '/api/errors/server_key_errors'