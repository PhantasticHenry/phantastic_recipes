class Ingredients {
    constructor() {
        this.adapter = new IngredientsAdapter();
        this.fetchAndLoadIngredients();
    }

    fetchAndLoadIngredients() {
        this.adapter.getIngredients().then(data => this.sortedIngredientsList(data))
    }

    sortedIngredientsList(data) {
        const div = document.querySelector('#all-ingredients')
        const ul = document.createElement('ul')
        data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        for (let ingredient of data) {
            const li = document.createElement('li')
            li.innerText = ingredient.name
            ul.appendChild(li)
        }
        div.appendChild(ul)
    }
    
}