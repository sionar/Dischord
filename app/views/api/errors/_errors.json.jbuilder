json.errors do
  if flash[:errors]
    json.sessionErrors flash[:errors]
  else
    json.sessionErrors Array.new
  end
end