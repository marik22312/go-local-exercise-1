import React from "react";
import styled from "styled-components";
import Items from "./Items";
import Total from "./Total";

const MainBodyContainer = styled.div`
  display: flex;
`;

const MainBody = () => {
  return (
    <MainBodyContainer>
      <Items />
      <Total />
    </MainBodyContainer>
  );
};

export default MainBody;
