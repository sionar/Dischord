class Api::ServerKeysController < ApplicationController
  def create
    @server_key = ServerKey.create(server_id: params[:server_id])
  end

  def show

  end

end
