# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mini_cheesecakes = Recipe.create( title: "Mini Cheesecakes", recipe_link: "https://www.cookingclassy.com/cheesecake-cupcakes/", image_link: "https://www.cookingclassy.com/wp-content/uploads/2013/04/mini-cheesecakes-01.jpg", recipe_origin: "Greece", recipe_type: "Dessert" )
mini_cheesecakes.ingredients << [ Ingredient.find_or_create_by(name: "Graham Crackers"), Ingredient.find_or_create_by(name: "Granulated Sugar"), Ingredient.find_or_create_by(name: "Butter"), Ingredient.find_or_create_by(name: "Cream Cheese"), Ingredient.find_or_create_by(name: "All Purpose Flour"), Ingredient.find_or_create_by(name: "Eggs"), Ingredient.find_or_create_by(name: "Vanilla Extract"), Ingredient.find_or_create_by(name: "Sour Cream"), Ingredient.find_or_create_by(name: "Heavy Cream") ]


chocolate_covered_strawberries = Recipe.create( title: "Chocolate Covered Strawberries", recipe_link: "https://www.cookingclassy.com/chocolate-covered-strawberries/", image_link: "https://www.cookingclassy.com/wp-content/uploads/2020/01/chocolate-covered-strawberries-15-768x1152.jpg", recipe_origin: "America", recipe_type: "Dessert" )
chocolate_covered_strawberries.ingredients << [ Ingredient.find_or_create_by(name: "Chocolate Chips"), Ingredient.find_or_create_by(name: "Fresh Strawberries"), Ingredient.find_or_create_by(name: "Coconut Oil") ]

banana_bread_muffins = Recipe.create( title: "Banana Bread Muffins", recipe_link: "https://www.lovefromtheoven.com/banana-bread-muffins/", image_link: "https://www.lovefromtheoven.com/wp-content/uploads/2018/01/muffin-recipes-9845.webp", recipe_origin: "America", recipe_type: "Dessert")
banana_bread_muffins.ingredients << [ Ingredient.find_or_create_by(name: "All Purpose Flour"), Ingredient.find_or_create_by(name: "Baking Powder"), Ingredient.find_or_create_by(name: "Salt"), Ingredient.find_or_create_by(name: "Ripe Bananas"), Ingredient.find_or_create_by(name: "Butter"), Ingredient.find_or_create_by(name: "Brown Sugar"), Ingredient.find_or_create_by(name: "Eggs"), Ingredient.find_or_create_by(name: "Vanilla"), Ingredient.find_or_create_by(name: "Chocolate Chips") ]