json.entities do
  json.servers do
    json.set! @server.id, nil
  end
end

json.partial! '/api/errors/server_errors'