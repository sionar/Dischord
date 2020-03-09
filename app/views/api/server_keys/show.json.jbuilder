json.entities do
  json.servers do
    json.partial! '/api/servers/server', server: @server
  end

  json.users do
    @users.each do |user|
      json.partial! 'api/users/user', user: user
    end
  end

  json.subscriptions do
    @subscriptions.each do |subscription|
      json.partial! 'api/subscriptions/subscription', subscription: subscription
    end
  end

  json.serverKeys do
    @server_keys.each do |server_key|
      json.partial! 'server_key', server_key: server_key
    end
  end
end

json.partial! '/api/errors/server_key_errors'