json.errors do
  if flash[:errors]
    json.session flash[:errors]
  else
    json.session Array.new
  end
end