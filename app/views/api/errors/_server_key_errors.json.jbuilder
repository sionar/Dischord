json.errors do
  if flash[:errors]
    json.serverKeyErrors flash[:errors]
  else
    json.serverKeyErrors Array.new
  end
end