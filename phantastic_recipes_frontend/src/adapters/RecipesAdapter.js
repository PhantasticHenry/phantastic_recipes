class RecipesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/recipes'
    }

    getRecipes() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createRecipe() {

        return fetch(`${this.baseUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "appplication/json"
            },
            body: JSON.stringify({
                title: event.target[0].value,
                recipe_link: event.target[1].value,
                image_link: event.target[2].value,
                recipe_origin: event.target[3].value,
                recipe_type: event.target[4].value,
                ingredients: event.target[5].value
            })
        })
        .then(res => res.json()
        )
    }
}