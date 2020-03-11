class Api::ChannelsController < ApplicationController
  before_action :require_login, :require_owner

  def create
    @channel = Channel.create(channel_params)
    unless @channel.id
      flash.now[:errors] = @channel.errors.full_messages
      render partial: 'api/errors/channel_errors', status: 422
    else
      render :create, status: 200
    end

  end

  def update
    @channel = Channel.find_by(id: params[:channel][:id])
    unless @channel.update(channel_params)
      flash.now[:errors] = @channel.errors.full_messages
      render partial: 'api/errors/channel_errors', status: 422
    else
      render :update, status: 200
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    if @channel
      if @channel.destroy
        render :destroy, status: 200
      else
        flash.now[:errors] = @channel.errors.full_messages
        render partial: 'api/errors/channel_errors', status: 422
      end
    else
      flash.now[:errors] = ['Channel not found.'] 
      render partial: 'api/errors/channel_errors', status: 404
    end
  end

  private
  def channel_params
    chan_params = params.require(:channel).permit(:name, :description)
    chan_params[:server_id] = params[:channel][:serverId]
    chan_params
  end

  def require_owner
    server = Server.find_by(id: params[:server_id])
    unless server && server.owner_id == current_user.id
      flash.now[:errors] = ['You do not own this server.']
      render partial: 'api/errors/channel_errors', status: 403
    end
  end
end

