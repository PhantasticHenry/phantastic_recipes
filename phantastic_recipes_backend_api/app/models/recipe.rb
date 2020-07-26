class Recipe < ApplicationRecord
    has_many :recipe_ingredients, dependent: :delete_all 
    has_many :ingredients, through: :recipe_ingredients

    validates :title, :recipe_link, :image_link, :recipe_origin, :recipe_type,
                :presense => true,
                :allow_blank => false,
                :uniqueness => true, { message: "Input already taken" }
end
