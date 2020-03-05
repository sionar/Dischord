class Api::ServerKeysController < ApplicationController
  def index
    server = Server.find_by(id:params[:server_id])
    @server_keys = server.server_keys
    render :index
  end

  def show
    if current_user
      # connect to server
    else
      flash.now[:errors] = ['Not logged in.']
      render :index, status: 401
    end
  end

  def create
    @server_key = ServerKey.create(server_id: params[:server_id])
    render :create
  end
end
