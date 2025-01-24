import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 1000px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
      linear-gradient(
        -135deg,
        #151149 25%,
        #272089 25%,
        #272089 75%,
        #151149 75%
      );
    background-size: 50px 50px;
  }
`;

export default Pattern;
