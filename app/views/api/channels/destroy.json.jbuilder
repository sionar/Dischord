json.entities do
  json.channels do
    json.set! @channel.id, nil
  end
end

json.partial! '/api/errors/channel_errors'