class Api::SubscriptionsController < ApplicationController
  def destroy
    @subscription = Subscription.find_by(id: params[:id])
    if @subscription
      if @subscription.user_id == current_user.id
        if @subscription.destroy
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
end
