Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :create, :update, :destroy] do
      resources :server_keys, only: [:index, :create]
    end
    get '/server_key/:server_key', to: 'server_keys#show', as: :server_key
  end

  root to: 'static_pages#root'
end
