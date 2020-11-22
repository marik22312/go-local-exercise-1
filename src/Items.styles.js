import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const Item = styled.div`
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

export const Price = styled.span`
  font-size: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  margin: 10px 0px;
  display: block;
`;

export const Description = styled.span`
  font-size: 10px;
`;

export const Buttons = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: block;
    margin: 10px;
  }
`;
