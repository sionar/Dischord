class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
    unless @user
      flash[:errors] = ['User not found']
      ender partial: 'api/errors/session_errors', status: 404
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
      render :create, status: 200
    end
  end

  private
  def user_params
    user_params = params.require(:user).permit(:username, :email, :password)
  end
end
