import React from 'react';
import styled from 'styled-components';

const LibraryButton2 = () => {
  return (
    <StyledWrapper>
      <button className="button type1">
        <span className="btn-txt">See More</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    height: 50px;
    width: 200px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #a855f7;
    overflow: hidden;
    border-radius: 30px;
    color: #a855f7;
    transition: all 0.5s ease-in-out;
  }

  .btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 4px;
  }

  .button:hover {
    box-shadow: 1px 1px 200px #a855f7;
    color: #fff;
    background-color: #a855f7;
  }

  .type1:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
  }`;

export default LibraryButton2;
