json.partial! 'user', user: @user
json.partial! '/api/sessions/session', user: @user
json.partial! '/api/errors/errors'