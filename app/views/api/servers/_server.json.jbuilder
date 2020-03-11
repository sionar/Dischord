json.set! server.id do
  json.id server.id
  json.name server.name
  json.ownerId server.owner_id
  json.private server.private
  json.imageUrl url_for(server.image)
  json.activeChannel active_channels[server.id] || 0
end



