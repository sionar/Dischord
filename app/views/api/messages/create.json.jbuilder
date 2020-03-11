json.entities do
  json.messages do
    json.partial! 'channel', channel: @channel
  end
end

json.partial! '/api/errors/message_errors'