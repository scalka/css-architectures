import React from "react";
import styled from "styled-components";
import recipes from "../../data.json";

const IngredientsList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const IngredientsListItem = styled.li`
  max-width: 50vw;
  font-size: bigger;
  color: tomato;
  border: 3px dashed #9cff00;
  outline: 3px dashed #ff00ca;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  cursor: pointer;

  &:hover {
    background-color: #9cff00;
    color: #ff00ca;
    height: 5rem;
    display: block;
  }
`;

const RecipeList = styled.ol`
  margin: 10px;
`;

const ListItem = styled.li`
  color: tomato;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff00ca;
  }
`;

const Image = styled.img`
  mix-blend-mode: overlay;
  display: block;
  margin: auto;
  transition: mix-blend-mode 0.3s ease-in-out;

  &:hover {
    mix-blend-mode: multiply;
  }
`;

const Section = styled.section`
  background-color: #9cff00;
`;

function StyledComponents() {
  const [recipe, setRecipe] = React.useState(recipes.oliebollen);

  return (
    <Section>
      <h1>{recipe.name} </h1>
      <p>{recipe.description}</p>
      <IngredientsList>
        {recipe.ingredients.map(({ amount = "", unit = "", name = "" }) => (
          <IngredientsListItem key={name}>
            <span>
              {`${amount} `}
              {`${unit} `}
            </span>
            {name}
          </IngredientsListItem>
        ))}
      </IngredientsList>

      <RecipeList>
        {recipe.step.map((item, index) => (
          <ListItem key={index}>{item.description}</ListItem>
        ))}
      </RecipeList>
      <Image src={recipe.image} alt={recipe.name} />
    </Section>
  );
}

export default StyledComponents;
