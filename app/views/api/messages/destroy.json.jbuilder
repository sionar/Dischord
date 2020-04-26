json.entities do
  json.messages do
    json.set! @message.id, nil
  end
end

json.partial! '/api/errors/message_errors'