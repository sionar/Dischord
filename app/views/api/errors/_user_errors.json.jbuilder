json.errors do
  if flash[:errors]
    json.userErrors flash[:errors]
  else
    json.userErrors Array.new
  end
end