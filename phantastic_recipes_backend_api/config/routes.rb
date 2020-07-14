Rails.application.routes.draw do
  
  get '/ingredients' => 'ingredients#index'

  get '/recipes' => 'recipes#index'
  get '/recipes:ingredient_name' => 'recipes#show'
  post '/recipes' => 'recipes#create'

end
