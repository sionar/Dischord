json.entities do
  json.servers do
    json.partial! 'server', server: @server
  end

  json.subscriptions do
    json.partial! 'api/subscriptions/subscription', subscription: @subscription
  end
end

json.partial! '/api/errors/server_errors'