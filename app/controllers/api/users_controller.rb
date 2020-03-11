class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
    unless @user
      flash[:errors] = ['User not found']
      render partial: 'api/errors/user_errors', status: 404
    else
      render :show, status: 200
    end
  end

  def create
    @user = User.new(user_params)
    unless @user.save
      flash.now[:errors] = @user.errors.full_messages
      render partial: 'api/errors/session_errors', status: 422
    else
      login!(@user)
      Subscription.create({server_id: Server.first.id, user_id: @user.id})
      Subscription.create({server_id: Server.second.id, user_id: @user.id})
      render :create, status: 200
    end
  end

  def update
    unless current_user.id == params[:id]
      flash.now[:errors] = ['You do not have permissions to edit this user.']
      render partial: 'api/errors/users_errors', status: 403
    else
      @user = current_user
      @user.image.purge
      unless @user.update(edit_params)
        flash.now[:errors] = @user.errors.full_messages
        render partial: 'api/errors/users_errors', status: 422
      else
        render :update, status: 200
      end
    end
  end

  private
  def user_params
    user_params = params.require(:user).permit(:username, :email, :password)
  end

  def edit_params
    user_params = params.require(:user).permit(:image)
  end
end
