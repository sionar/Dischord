class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "server-#{params["id"]}"
  end

  def unsubscribed; end
end
