class Api::SubscriptionsController < ApplicationController
  def destroy
    @subscription = Subscription.find_by(id: params[:id])
    if @subscription
      if @subscription.user_id == current_user.id
        if @subscription.destroy
          broadcast('foreignLeaveServer', @subscription)
          render :destroy, status: 200
        else
          flash.now[:errors] = @subscription.errors.full_messages
          render partial: 'api/errors/subscription_errors', status: 422
        end
      else
        flash.now[:errors] = ['You do not own this subscription.']
        render partial: 'api/errors/subscription_errors', status: 403
      end
    else
      flash.now[:errors] = ['Subscription not found.'] 
      render partial: 'api/errors/subscription_errors', status: 404
    end
  end

  private
  def broadcast(action, subscription)
    response = Hash.new
    response[:action] = action
    response[:payload] = Hash.new
    response[:payload][:subscriptions] = Hash.new
    response[:payload][:subscriptions][subscription.id] = {
      id: subscription.id,
      userId: subscription.user_id,
      serverId: subscription.server_id
    }
    ActionCable.server.broadcast("server-#{subscription.server_id}", response)
  end
end
