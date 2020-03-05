json.entities do
  json.servers do
    json.partial! 'server', server: @server
  end
end

json.partial! '/api/errors/server_errors'