class Recipe {
    constructor({id, title, recipe_link, image_link, recipe_origin, recipe_type, ingredients}) {
        Object.assign(this, { id, title, recipe_link, image_link, recipe_origin, recipe_type, ingredients })
    }
    
    createRecipeCard() {
        const card = document.createElement('div')
        const title = document.createElement('h3')
        const link = document.createElement('a')
        const img = document.createElement('img')
        const ingredientsBtn = document.createElement('div')
        const ingredientsContainer = document.createElement('div')
        const ingredientsPopup = document.createElement('div')
        const ul = document.createElement('ul')
        const close = document.createElement('button')
        
        card.setAttribute('class', 'recipe-card')
        ingredientsBtn.setAttribute('id', `recipeIngredients-${this.id}`)
        ingredientsBtn.setAttribute('class', 'recipe-ingredients-book-button')
        ingredientsContainer.setAttribute('id', `ingredientsBook-${this.id}`)
        ingredientsContainer.setAttribute('class', 'recipe-ingredients-book')
        ingredientsPopup.setAttribute('class', 'recipe-ingredients-container')
        ingredientsBtn.appendChild(ingredientsPopup)
        close.setAttribute('type', 'button')
        close.setAttribute('class', 'recipe-ingredients-remove-button')
        
        title.innerHTML = this.title
        link.href = this.recipe_link
        img.src = this.image_link
        ingredientsBtn.innerText = 'Ingredients'
        close.innerText = 'Close'
        
        card.appendChild(title)
        card.appendChild(link)
        link.appendChild(img)
        card.appendChild(ingredientsBtn)
        card.appendChild(ingredientsContainer)
        
        for(let ingredients of this.ingredients) {
            const li = document.createElement('li')
            li.innerHTML = ingredients.name
            ul.appendChild(li)
        }
        
        ingredientsBtn.addEventListener('click', () => document.querySelector(`#ingredientsBook-${this.id}`).style.display = "block")
        close.addEventListener('click', () => document.querySelector(`#ingredientsBook-${this.id}`).style.display = "none")
        ingredientsContainer.appendChild(ul)
        ingredientsContainer.appendChild(close)
        document.querySelector('.recipe-card-container').appendChild(card)
    }   
}
        
