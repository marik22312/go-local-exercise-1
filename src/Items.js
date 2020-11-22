import React from "react";
import data from "./data/items";
import {
  ItemsContainer,
  Item,
  Price,
  Image,
  Buttons,
  Description
} from "./Items.styles";

const Items = () => {
  const { items } = data;

  return (
    <ItemsContainer>
      {items.map((item) => {
        const { id, name, image, price, description } = item;
        return (
          <Item key={id}>
            <h3>{name}</h3>
            <Price>Price: {price}$</Price>
            <Image src={image} alt={name} />
            <Description>{description}</Description>
            <Buttons>
              <button>Add To Cart</button>
              <button>Remove</button>
            </Buttons>
            <div>ID: {id}</div>
          </Item>
        );
      })}
    </ItemsContainer>
  );
};

export default Items;
