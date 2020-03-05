class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if !@user
      flash.now[:errors] = ['Email does not exist.']
      render partial: 'api/errors/session_errors', status: 422
    else
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user
        @current_user = @user
        session[:session_token] = @user.reset_session_token!
        render :create
      else
        flash.now[:errors] = ['Password does not match.']
        render partial: 'api/errors/session_errors', status: 422
      end
    end
  end

  def destroy
    if logged_in?
      logout!
      render :destroy
    else
      flash.now[:errors] = ['Not logged in.']
      render partial: 'api/errors/session_errors', status: 412
    end
  end
end
