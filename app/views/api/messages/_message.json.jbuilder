json.set! message.id do
  json.id message.id
  json.userId message.user_id
  json.channelId message.channel_id
  json.content message.content
  json.contentType message.content_type
  json.edited message.edited
  json.createdAt message.created_at
end
