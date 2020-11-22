import React from "react";
import styled from "styled-components";

const TotalContainer = styled.div`
  overflow: visible;
`;

const Sticky = styled.div`
  min-width: 250px;
  position: sticky;
  top: 0;
`;

const Item = ({ name, price }) => {
  return (
    <div style={{ fontSize: 12, padding: "5px" }}>
      {name} ({price}$)
    </div>
  );
};

const Total = () => {
  return (
    <TotalContainer>
      <Sticky>
        <h3>Total:</h3>
        <Item name="Lenovo Chromebook Flex" price={409} />
        <Item name="Acer Aspire 5 Slim Laptop" price={349} />
        <div>- - - - - - - - - - - - - - - -</div>
        <div>Total: 704$</div>
      </Sticky>
    </TotalContainer>
  );
};

export default Total;
