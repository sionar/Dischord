json.entities do
  json.servers do
    json.partial! 'server', server: @server
  end

  json.subscriptions do
    json.partial! 'api/subscriptions/subscription', subscription: @subscription
  end

  json.serverKeys do
    json.partial! 'api/server_keys/server_key', server_key: @server_key
  end
end

json.partial! '/api/errors/server_errors'