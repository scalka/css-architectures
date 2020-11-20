import React from "react";
import styles from "./style.module.css";
import recipes from "../../data.json";

function CssModules() {
  const [recipe, setRecipe] = React.useState(recipes.kruidnoten);

  return (
    <section className={styles.recipe}>
      <h1 className={styles.name}>
        <marquee>{recipe.name}</marquee>
      </h1>
      <p>{recipe.description}</p>
      <ol className={styles["ordered-list"]}>
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
      <img className={styles.image} src={recipe.image} alt={recipe.name} />
    </section>
  );
}

export default CssModules;
