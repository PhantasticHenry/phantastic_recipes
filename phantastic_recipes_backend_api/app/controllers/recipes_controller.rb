class RecipesController < ApplicationController

    def index 
        recipes = Recipe.all 
        
        render json: recipes
    end

    def show 
        recipes = Ingredient.find_by(name: params[:ingredient_name]).recipes

        render json: recipes
    end

    def create
        recipe = Recipe.new(recipe_params)
        ingredients = params[:ingredients].map { |ingredient| Ingredient.find_or_create_by(name: ingredient) }
        recipe.ingredients << ingredients
        # byebug
        # recipe.save
        render json: recipe
    end

    private
    
    def recipe_params 
        params.require(:recipe).permit(:title, :recipe_link, :image_link, :recipe_origin, :recipe_type)
    end

end
