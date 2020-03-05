json.errors do
  if flash[:errors]
    json.serverErrors flash[:errors]
  else
    json.serverErrors Array.new
  end
end