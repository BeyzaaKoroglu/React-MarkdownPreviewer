import styled from "styled-components";

export const Styled = styled.header`
  display: flex;
  flex-direction: column;
  h1 {
    order: 2;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }
  div {
    align-self: flex-end;
    width: 40px;
    height: 40px;
    margin: 20px;
    text-align: center;
    box-shadow: 10px 10px #646464;
    background-color: #ffeeb4;
    cursor: pointer;
    transition: box-shadow 0.2s ease-out;
    i {
      font-size: 2.1em;
    }
    &:hover {
      box-shadow: 7px 7px #646464;
    }
    &.active {
      box-shadow: none;
    }
  }
`;
