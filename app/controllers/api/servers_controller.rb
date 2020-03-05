class Api::ServersController < ApplicationController
  def index
      unless current_user

      else
        flash[:errors] = ['User ']
      end
  end

  def create

  end

  def update

  end

  def destroy

  end
end
