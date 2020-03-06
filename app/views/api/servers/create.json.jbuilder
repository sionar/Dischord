json.entities do
  json.servers do
    json.partial! 'server', server: @server
  end

  json.subscribers do
    json.partial! 'api/subscribers/subscriber', subscriber: @subscriber
  end
end

json.partial! '/api/errors/serverErrors'