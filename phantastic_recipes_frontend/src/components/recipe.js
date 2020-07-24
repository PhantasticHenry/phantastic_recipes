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
        ingredientsBtn.setAttribute('class', 'recipe-ingredients-open-button')
        ingredientsBtn.addEventListener('click', () => document.querySelector(`#ingredientsPopup-${this.id}`).style.display = "block")
        ingredientsContainer.setAttribute('id', `ingredientsPopup-${this.id}`)
        ingredientsContainer.setAttribute('class', 'recipe-ingredients-popup')
        ingredientsPopup.setAttribute('class', 'recipe-ingredients-container')
        ingredientsBtn.appendChild(ingredientsPopup)
        
        title.innerHTML = this.title
        link.href = this.recipe_link
        img.src = this.image_link
        ingredientsBtn.innerText = 'Ingredients'
        
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

        close.setAttribute('type', 'button')
        close.setAttribute('class', 'recipe-ingredients-remove-button')
        close.addEventListener('click', () => document.querySelector(`#ingredientsPopup-${this.id}`).style.display = "none")
        close.innerText = 'Close'

        ingredientsContainer.appendChild(ul)
        ingredientsContainer.appendChild(close)
        document.querySelector('.recipe-card-container').appendChild(card)
    }   
}
        
