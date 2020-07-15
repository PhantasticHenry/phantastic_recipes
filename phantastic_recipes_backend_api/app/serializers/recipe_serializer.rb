class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :recipe_link, :image_link, :recipe_origin, :recipe_type
  has_many :ingredients
end
