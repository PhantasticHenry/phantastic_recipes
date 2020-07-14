class RecipesController < ApplicationController

    def index 
        recipes = Recipe.all 

        render json: RecipeSerializer.new(recipes)
    end

    def show 
        
    end

    def create
        recipe = Recipe.new(recipe_params)
        byebug
    end

    private
    
    def recipe_params 
        params.require(:recipe).permit(:title, :recipe_link, :image_link, :recipe_origin, :recipe_type)
    end

end
