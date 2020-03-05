json.entities do
  json.servers do
    json.partial! '/api/servers/server', server: @server
  end
  json.users do
    @users.each do |user|
      json.partial! 'api/users/user', user: user
    end
  end
end

json.partial! '/api/errors/server_errors'