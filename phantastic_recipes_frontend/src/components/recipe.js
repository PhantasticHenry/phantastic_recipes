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
        // const viewAll = document.querySelector('#viewAll')
        // viewAll.appendChild(ingredientsContainer)
        
        card.setAttribute('class', 'recipe-card')
        ingredientsBtn.setAttribute('id', `recipeIngredients-${this.id}`)
        ingredientsBtn.setAttribute('class', 'recipe-ingredients-open-button')
        ingredientsBtn.setAttribute('onclick', `openRecipeIngredients(${this.id})`)
        //dry up ingredietns list code 

        // console.log('testing', `${recipes.toggleDisplay()}`);
        
        title.innerHTML = this.title
        link.href = this.recipe_link
        img.src = this.image_link
        card.appendChild(title)
        card.appendChild(link)
        link.appendChild(img)
        
        ingredientsBtn.innerText = 'Ingredients'
        card.appendChild(ingredientsBtn)
        
        ingredientsContainer.setAttribute('id', `ingredientsPopup-${this.id}`) // change this
        ingredientsContainer.setAttribute('class', 'recipe-ingredients-popup')
        // ingredients.appendChild(ingredientsContainer)
        card.appendChild(ingredientsContainer) // this needs
        
        ingredientsPopup.setAttribute('class', 'recipe-ingredients-container')
        ingredientsBtn.appendChild(ingredientsPopup)
        // ingredientsContainer.appendChild(ingredientsPopup)
        //ingredients popup content
        for(let ingredients of this.ingredients) {
            const li = document.createElement('li')
            li.innerHTML = ingredients.name
            ul.appendChild(li)
        }

        ingredientsContainer.appendChild(ul)
        //close ingredients popup
        // close.setAttribute('id', 'closePopup')
        close.setAttribute('type', 'button')
        // close.setAttribute('id', 'closeIngredients')
        close.setAttribute('class', 'recipe-ingredients-remove-button')
        close.addEventListener('click', () => {           
            document.getElementById(`ingredientsPopup-${this.id}`).style.display = "none"
        })
        close.innerText = 'Close'
        ingredientsContainer.appendChild(close)
        document.querySelector('.recipe-card-container').appendChild(card)
    }
}