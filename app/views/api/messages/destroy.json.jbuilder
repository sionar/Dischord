json.entities do
  json.mesages do
    json.set! @message.id, nil
  end
end

json.partial! '/api/errors/message_errors'