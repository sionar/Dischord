json.errors do
  if flash[:errors]
    json.messageErrors flash[:errors]
  else
    json.messageErrors Array.new
  end
end