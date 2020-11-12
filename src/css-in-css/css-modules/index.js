import React from "react";
import styles from "./style.module.css";
import recipes from "../../data.json";

function CssModules() {
  const [recipe, setRecipe] = React.useState(recipes.oliebollen);

  return (
    <section className={styles.recipe}>
      <h1>{recipe.name} </h1>
      <p>{recipe.description}</p>
      <ol className={styles["ordered-list"]}>
        {recipe.ingredients.map((item) => (
          <li key={item.name}>
            {item.amount && `${item.amount} `}
            {item.unit && `${item.unit} `}
            {item.name}
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

export default CssModules;
