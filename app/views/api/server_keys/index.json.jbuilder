json.entities do
  json.serverKeys do
    @server_keys.each do |server_key|
      json.partial! 'server_key', server_key: server_key
    end
  end
end

json.partial! '/api/errors/server_key_errors'