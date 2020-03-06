json.entities do
  json.serverKeys do
      json.partial! 'server_key', server_key: @server_key
  end
end

json.partial! '/api/errors/server_key_errors'