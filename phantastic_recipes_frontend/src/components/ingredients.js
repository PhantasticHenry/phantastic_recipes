class Ingredients {
    constructor() {
        this.adapter = new IngredientsAdapter();
        this.fetchAndLoadIngredients();
    }

    fetchAndLoadIngredients() {
        clearContainer('#ingredientsSelect')
        this.adapter.getIngredients().then(data => this.sortedIngredientsList(data))
    }
    
    sortedIngredientsList(data) {
        const select = document.querySelector('#ingredientsSelect')
        data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        for (let ingredient of data) {
            const option = document.createElement('option')
            option.value = ingredient.id
            option.innerText = ingredient.name
            select.appendChild(option)
        }
        document.querySelector('#recipes').appendChild(select)
    }

}