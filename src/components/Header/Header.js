import { useState } from "react";
import { Styled } from "./Header.styled";

const Header = () => {
  const [help, setHelp] = useState(false);

  const handleClick = () => {
    setHelp(!help);
  };
  return (
    <Styled>
      <h1>Markdown Previewer</h1>
      <div onClick={handleClick} className={`${help && "active"}`}>
        <i>?</i>
      </div>
    </Styled>
  );
};

export default Header;
