class Api::ServerKeysController < ApplicationController
  before_action :require_login
  before_action :require_subscribed, only: [:index, :create]

  def index
    server = Server.find_by(id:params[:server_id])
    unless server
      flash[:errors] = ['Server not found']
      render partial: 'api/errors/server_key_errors', status: 422
    else
      @server_keys = server.server_keys
      render :index, status: 200  
    end
  end

  def show
    server_key = ServerKey.find_by(server_key: params[:server_key])
    unless server_key
      flash[:errors] = ['This invite is invalid or has expired.']
      render partial: 'api/errors/server_key_errors', status: 422
    else
      @server = Server.includes(:subscribed_users, :server_keys, :channels, :messages).find_by(id: server_key.server_id)
      user = Subscription.find_by(server_id: @server.id, user_id: current_user.id)
      if user
        flash[:errors] = ['You are already connected to this server!']
        render partial: 'api/errors/server_key_errors', status: 422
      else
        @users = @server.subscribed_users
        @server_keys = @server.server_keys
        @channels = @server.channels
        @subscription = Subscription.create(user_id: current_user.id, server_id: @server.id)
        @subscriptions = @server.subscriptions.push(@subscription)
        @active_channels = Hash.new
        @active_channels[@server.id] = @channels.first.id unless @channels.empty?
        @messages = @server.messages
        broadcast('receiveUser', @subscription)
        render :show, status: 200
      end
    end
  end

  def create
    @server_key = ServerKey.create(server_id: params[:server_id])
    unless @server_key
      flash[:errors] = @server_key.errors.full_messages
      render partial: 'api/errors/server_errors', status: 422
    else
      render :create, status: 200
    end
  end

  private
  def require_subscribed
    @subscription = Subscription.find_by(server_id:params[:server_id], user_id: current_user.id)
    unless @subscription
      flash[:errors] = ['Current user not subscribed to the server.']
      render partial: 'api/errors/server_errors', status: 422
    end
  end

  def broadcast(action, subscription)
    user = User.find_by(id: subscription.user_id)
    response = Hash.new
    response[:action] = action
    response[:payload] = Hash.new
    response[:payload][:subscriptions] = Hash.new
    response[:payload][:subscriptions][subscription.id] = {
      id: subscription.id,
      userId: subscription.user_id,
      serverId: subscription.server_id
    }
    response[:payload][:users] = Hash.new
    response[:payload][:users][user.id] = {
      id: user.id,
      username: user.username,
      usertag: user.usertag,
      imageUrl: url_for(user.image)
    }
    ActionCable.server.broadcast("server-#{subscription.server_id}", response)
  end
end
