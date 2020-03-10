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
      @server = Server.find_by(id: server_key.server_id)
      user = Subscription.find_by(server_id: @server.id, user_id: current_user.id)
      if user
        flash[:errors] = ['You are already connected to this server!']
        render partial: 'api/errors/server_key_errors', status: 422
      else
        @subscription = Subscription.create(user_id: current_user.id, server_id: @server.id)
        @users = @server.subscribed_users
        @server_keys = @server.server_keys
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
end
