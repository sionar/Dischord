class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    render :show, status: 200
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :create, status: 200
    else
      flash.now[:errors] = @user.errors.full_messages
      render :create, status: 422
    end
  end

  private
  def user_params
    user_params = params.require(:user).permit(:username, :email, :password)
  end

end
