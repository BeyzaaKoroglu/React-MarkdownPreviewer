import { useSelector, useDispatch } from "react-redux";
import { setHelp } from "../../redux/texts/textsSlice";
import { Styled } from "./Header.styled";

const Header = () => {
  const help = useSelector((state) => state.texts.help);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setHelp());
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
