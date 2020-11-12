import React from "react";
import styled from "styled-components";
import recipes from "../../data.json";

const OrderedList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  color: tomato;
`;

function StyledComponents() {
  const [recipe, setRecipe] = React.useState(recipes.kruidnoten);

  return (
    <section>
      <h1>{recipe.name} </h1>
      <p>{recipe.description}</p>
      <OrderedList>
        {recipe.ingredients.map((item) => (
          <ListItem key={item.name}>
            {item.amount && `${item.amount} `}
            {item.unit && `${item.unit} `}
            {item.name}
          </ListItem>
        ))}
      </OrderedList>

      <OrderedList>
        {recipe.step.map((item, index) => (
          <ListItem key={index}>{item.description}</ListItem>
        ))}
      </OrderedList>
      <img src={recipe.image} alt={recipe.name} />
    </section>
  );
}

export default StyledComponents;
