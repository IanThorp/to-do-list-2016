get '/users/login' do
  if request.xhr?
    return erb :"/users/login", layout: false
  else
    erb :'/users/login'
  end
end

post '/users/login' do
  user = User.find_by(user_name: params[:user_name])
  if user.authenticate(params[:password])
    session[:id] = user.id
  else
    return "Password Incorrect"
  end
  if !request.xhr?
    redirect '/'
  end
end

get '/users/new' do
  if request.xhr?
    return erb :'/users/new', layout: false
  else
    erb :'/users/new'
  end
end

post '/users' do
  user = User.new(params[:user])
  if user.save
    session[:id] = user.id
    if !request.xhr?
      erb :'/'
    end
  else
    return user.errors.full_messages
  end
end
