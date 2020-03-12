class Api::MessagesController < ApplicationController
  before_action :require_login
  before_action :require_owner, only: [:update, :destroy]

  def create
    @message = Message.create(create_params)
    unless @message.id
      flash.now[:errors] = @message.errors.full_messages
      render partial: 'api/errors/message_errors', status: 422
    else
      render :create, status: 200
    end
  end

  def update
    unless @message.update(update_params)
      flash.now[:errors] = @channel.errors.full_messages
      render partial: 'api/errors/message_errors', status: 422
    else
      render :update, status: 200
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    if @message
      if @message.destroy
        render :destroy, status: 200
      else
        flash.now[:errors] = @message.errors.full_messages
        render partial: 'api/errors/message_errors', status: 422
      end
    else
      flash.now[:errors] = ['Message not found.'] 
      render partial: 'api/errors/message_errors', status: 404
    end
  end

  private
  def create_params
    m_params = params.require(:message).permit(:content, :content_type)
    m_params[:channel_id] = params[:channel_id]
    m_params[:user_id] = current_user.id
    m_params[:edited] = false
    m_params
  end

  def update_params
    m_params = params.require(:message).permit(:content, :content_type)
    m_params[:edited] = true
    m_params
  end

  def require_owner
    @message = Message.find_by(id: params[:id])
    unless @message.user_id == current_user.id
      flash.now[:errors] = ['You do not own this message.']
      render partial: 'api/errors/channel_errors', status: 403
    end
  end
end
