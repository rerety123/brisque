function getRecipeData() {
	var request = new XMLHttpRequest();
	request.open('GET', recipe_url, true);

	request.onload = function() {
		simple_recipes_array = JSON.parse(request.responseText);
		displayRecipes(difficulty);
	};
	request.send();
}

function displayRecipes(difficulty){
	var table = document.getElementById("simpleRecipes");
	table.innerHTML = "";
	totalRecipes = simple_recipes_array.length;

	for (var count = 0; count < totalRecipes; count++) {
		if (simple_recipes_array[count].category === difficulty) {
			var image = simple_recipes_array[count].image;
			var name = simple_recipes_array[count].name;

			var card = '<div class="card" style="width: 18rem;">	\
				<img class="card-img-top" src="..." alt="Card image cap">	\
				<div class="card-body">		\
				<h5 class="card-title">Card title</h5>		\
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>		\
				<a href="#" class="btn btn-primary">Go somewhere</a>		\
				</div>		\
				</div>';

			table.insertAdjacentHTML('beforeend', cell);
		}
	}
}
