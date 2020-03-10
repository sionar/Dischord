json.entities do
  json.servers do
    @servers.each do |server|
      json.partial! 'server', server: server
    end
  end

  json.users do
    @users.each do |user|
      json.partial! '/api/users/user', user: user
    end
  end

  json.subscriptions do
    @subscriptions.each do |subscription|
      json.partial! 'api/subscriptions/subscription', subscription: subscription
    end
  end

  json.serverKeys do
    @server_keys.each do |server_key|
      json.partial! 'api/server_keys/server_key', server_key: server_key
    end
  end

  json.channels do
    @channels.each do |channel|
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end

json.partial! '/api/errors/server_errors'