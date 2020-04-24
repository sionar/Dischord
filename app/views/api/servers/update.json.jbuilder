json.entities do
  json.servers do
    json.partial! 'server', server: @server, active_channels: @active_channels
  end
end

json.partial! '/api/errors/server_errors'