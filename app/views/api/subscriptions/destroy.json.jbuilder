json.entities do
  json.subscriptions do
    json.set! @subscription.id, nil
  end
end

json.partial! '/api/errors/server_errors'