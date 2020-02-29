class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show, status: 200
    else
      flash.now[:errors] = @user.errors.full_messages
      render :show, status: 422
    end
  end

  private
  def user_params
    user_params = params.require(:user).permit(:username, :email, :password)
    already_taken = true
    while already_taken do
      usertag = rand(1000..9999)
      already_taken = false unless User.find_by(username: params[:user][:username], usertag: usertag) 
    end
    user_params[:usertag] = usertag
    user_params
  end

end
