class Api::ServersController < ApplicationController
  def index
    user = User.includes(:servers).find_by(session_token: session[:session_token])
    if user
      @servers = user.subscribed_servers
      @users = Array.new
      @servers.each do |server|
        @users += server.subscribed_users
      end
      render :index, status: 200
    else
      flash.now[:errors] = ['Not logged in.']
      render :index, status: 401
    end
  end

  def create
    @server = Server.create(server_params)
    if @server
      Subscriber.create(user_id: current_user.id, server_id: @server.id)
      render :create, status: 200
    else
      flash.now[:errors] = @server.errors.full_messages
      render :create, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server
      if @server.owner_id == current_user.id
        if @server.update(server_params)
          render :update, status: 200
        else
          flash.now[:errors] = @server.errors.full_messages
          render :update, status: 422
        end
      else
        flash.now[:errors] = ['You do not own this server.']
        render :update, status: 403
      end
    else
      flash.now[:errors] = ['Server not found.'] 
      render :update, status: 404
    end
  end

  def destroy

  end

  def server_params
    serv_params = params.require(:server).permit(name, private)
    serv_params[:owner_id] = current_user.id
  end
end
