class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    unless @user
      flash.now[:errors] = ['Email does not exist.']
      render partial: 'api/errors/session_errors', status: 422
    else
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      unless @user
        flash.now[:errors] = ['Password does not match.']
        render partial: 'api/errors/session_errors', status: 422
      else
        @current_user = @user
        session[:session_token] = @user.reset_session_token!
        render :create, status: 200
      end
    end
  end

  def destroy
    unless logged_in?
      flash.now[:errors] = ['Not logged in.']
      render partial: 'api/errors/session_errors', status: 412
    else
      logout!
      render :destroy, status: 200
    end
  end
end
