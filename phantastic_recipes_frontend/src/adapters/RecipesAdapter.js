class RecipesAdapter {
	constructor() {
		this.baseUrl = "http://localhost:3000/recipes";
	}

	getRecipes() {
		return fetch(this.baseUrl).then((res) => res.json());
	}

	createRecipe(form) {
		return fetch(`${this.baseUrl}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: titleCase(form[0].value),
				recipe_link: form[1].value,
				image_link: form[2].value,
				recipe_origin: form[3].value.toUpperCase(),
				recipe_type: titleCase(form[4].value),
				ingredients: titleCase(form[5].value).split(", "),
			}),
		})
			.then((res) => res.json())
			.catch((error) => alert(`Error: ${error}`));
	}
}
