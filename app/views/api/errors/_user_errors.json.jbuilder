json.errors do
  debugger
  if flash[:errors]
    json.userErrors flash[:errors]
  else
    json.userErrors Array.new
  end
end