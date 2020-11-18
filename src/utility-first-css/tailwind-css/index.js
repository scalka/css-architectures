import React from "react";
import "../tailwind.generated.css";
import recipes from "../../data.json";

function TailwindCss() {
  const [recipe, setRecipe] = React.useState(recipes.poffertjes);

  return (
    <section>
      <h1 className="bold text-blue-800">{recipe.name} </h1>
      <p className="italic text-red-700">{recipe.description}</p>
      <ol>
        {recipe.ingredients.map(({ amount = "", unit = "", name = "" }) => (
          <li key={name}>
            {`${amount} `}
            {`${unit} `}
            {name}
          </li>
        ))}
      </ol>
      <ol>
        {recipe.step.map((item, index) => (
          <li key={index}>{item.description}</li>
        ))}
      </ol>
      <img src={recipe.image} alt={recipe.name} />
    </section>
  );
}

export default TailwindCss;
