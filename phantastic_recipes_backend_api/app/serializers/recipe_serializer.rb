class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :recipe_link, :image_link, :recipe_origin, :recipe_type
  has_many :ingredients
end
