# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mini_cheesecakes = Recipe.create( title: "Mini Cheesecakes", recipe_link: "https://www.cookingclassy.com/cheesecake-cupcakes/", image_link: "https://www.cookingclassy.com/wp-content/uploads/2013/04/mini-cheesecakes-01.jpg", recipe_origin: "greece", recipe_type: "dessert" )
mini_cheesecakes.ingredients << [ Ingredient.find_or_create_by(name: "graham crackers"), Ingredient.find_or_create_by(name: "granulated sugar"), Ingredient.find_or_create_by(name: "butter"), Ingredient.find_or_create_by(name: "cream cheese"), Ingredient.find_or_create_by(name: "all purpose flour"), Ingredient.find_or_create_by(name: "eggs"), Ingredient.find_or_create_by(name: "vanilla extract"), Ingredient.find_or_create_by(name: "sour cream"), Ingredient.find_or_create_by(name: "heavy cream") ]

chocolate_covered_strawberries = Recipe.create( title: "Chocolate Covered Strawberries", recipe_link: "https://www.cookingclassy.com/chocolate-covered-strawberries/", image_link: "https://www.cookingclassy.com/wp-content/uploads/2020/01/chocolate-covered-strawberries-15-768x1152.jpg", recipe_origin: "america", recipe_type: "dessert" )
chocolate_covered_strawberries.ingredients << [ Ingredient.find_or_create_by(name: "chocolate chips"), Ingredient.find_or_create_by(name: "fresh strawberries"), Ingredient.find_or_create_by(name: "coconut oil") ]

banana_bread_muffins = Recipe.create( title: "Banana Bread Muffins", recipe_link: "https://www.lovefromtheoven.com/banana-bread-muffins/", image_link: "https://www.lovefromtheoven.com/wp-content/uploads/2018/01/muffin-recipes-9845.webp", recipe_origin: "america", recipe_type: "dessert")
banana_bread_muffins.ingredients << [ Ingredient.find_or_create_by(name: "all purpose flour"), Ingredient.find_or_create_by(name: "baking powder"), Ingredient.find_or_create_by(name: "salt"), Ingredient.find_or_create_by(name: "ripe bananas"), Ingredient.find_or_create_by(name: "butter"), Ingredient.find_or_create_by(name: "brown sugar"), Ingredient.find_or_create_by(name: "eggs"), Ingredient.find_or_create_by(name: "vanilla"), Ingredient.find_or_create_by(name: "chocolate chips") ]