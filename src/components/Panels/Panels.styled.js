import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 10px 10%;
  height: 580px;
  font-size: 18px;

  .text-panel-left,
  .text-panel-right {
    width: 45%;
    height: 100%;
    padding: 10px;
    box-shadow: 10px 10px #646464;
    background-color: #ffdd67;
  }

  .text-panel-left::-webkit-scrollbar,
  .text-panel-right::-webkit-scrollbar {
    width: 10px;
  }

  .text-panel-left::-webkit-scrollbar-track,
  .text-panel-right::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  .text-panel-left::-webkit-scrollbar-thumb,
  .text-panel-right::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  .text-panel-left {
    resize: none;
    outline: none;
    overflow-x: hidden;
    font-size: 0.95em;
    color: #4a4a4a;
    border: 0;
  }

  .text-panel-right {
    font-size: 0.95em;
    overflow: auto;
  }
`;
