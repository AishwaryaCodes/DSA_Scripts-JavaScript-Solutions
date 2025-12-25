// Find All Possible Recipes from Given Supplies

const findRecipes = (recipes, ingredients, supplies) => {

    const result = [];

    let graph = new Map();
    let needCount = new Map();

    for(let i = 0; i < recipes.length; i++){
        const recipe = recipes[i];

        needCount.set(recipe, ingredients[i].length);

        for(const ing of ingredients[i]) {
            if(!graph.has(ing)) {
                graph.set(ing, []);
            }
            graph.get(ing).push(recipe);
        }
        //console.log(needCount);
        //console.log(graph);
    }

    const queue = [];

    for(const s of supplies) {
        queue.push(s);
        //console.log(queue);
    }

    while(queue.length > 0) {
        const item = queue.shift();

        if(!graph.has(item)) continue;

        for(const recipe of graph.get(item)) {
            needCount.set(recipe, needCount.get(recipe) - 1);

            if(needCount.get(recipe) === 0) {
                result.push(recipe);
                queue.push(recipe);
            }
        }
        
         
    }

    return result;

}

recipes = ["bread","sandwich"]
ingredients = [["yeast","flour"],["bread","meat"]]
supplies = ["yeast","flour","meat"]
// O/P =  ["bread","sandwich"]


console.log(findRecipes(recipes, ingredients, supplies));