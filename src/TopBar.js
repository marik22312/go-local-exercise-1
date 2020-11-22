import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  height: 50px;
  background: #92dce5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

const Name = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

const Total = styled.span`
  font-size: 16px;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <Name>
        <span role="img" aria-label="computer emoji">
          💻
        </span>
        TechStore
      </Name>
      <Total>Total: 2 items (price: 704$)</Total>
    </TopBarContainer>
  );
};

export default TopBar;
