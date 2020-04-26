json.errors do
  if flash[:errors]
    json.subscriptionErrors flash[:errors]
  else
    json.subscriptionErrors Array.new
  end
end