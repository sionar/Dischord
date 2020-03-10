json.errors do
  if flash[:errors]
    json.channelErrors flash[:errors]
  else
    json.channelErrors Array.new
  end
end