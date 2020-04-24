class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room-#{params["id"]}:messages"
  end

  def unsubscribed; end
end
