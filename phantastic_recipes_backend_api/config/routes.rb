Rails.application.routes.draw do
  
  get '/ingredients' => 'ingredients#index'

  get '/recipes' => 'recipes#index'
  post '/recipes' => 'recipes#create'
end
