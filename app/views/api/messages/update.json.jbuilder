json.entities do
  json.messages do
    json.partial! 'message', message: @message
  end
end

json.partial! '/api/errors/message_errors'