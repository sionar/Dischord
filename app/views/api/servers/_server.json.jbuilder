json.set! server.id do
  json.id server.id
  json.name server.name
  json.private server.private
  json.imageUrl url_for(server.image)
  json.activeChannel active_channels[server.id]
end



