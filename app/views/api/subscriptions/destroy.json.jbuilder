json.entities do
  json.subscriptions do
    json.partial! 'subscription', subscription: @subscription
  end
end

json.partial! '/api/errors/server_errors'