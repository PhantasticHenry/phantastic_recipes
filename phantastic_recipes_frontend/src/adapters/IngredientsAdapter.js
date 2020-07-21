class IngredientsAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/ingredients"
    }

    getIngredients() {
        return fetch(this.baseURL).then(res => res.json())
    }
}