json.entities do
  json.channels do
    json.partial! 'channel', channel: @channel
  end
end

json.partial! '/api/errors/channel_errors'