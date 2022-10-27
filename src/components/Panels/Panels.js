import { marked } from "marked";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserText, setCurrentText } from "../../redux/texts/textsSlice";
import { Styled } from "./Panels.styled";

const Panels = () => {
  const dispatch = useDispatch();
  const currentText = useSelector((state) => state.texts.currentText);
  const help = useSelector((state) => state.texts.help);
  const parsedText = marked(currentText, { sanitize: true });
  const processedText = { __html: parsedText };

  useEffect(() => {
    dispatch(setCurrentText());
  }, [help]);

  const handleChange = (e) => {
    dispatch(changeUserText(e.target.value));
  };
  return (
    <Styled>
      <textarea
        value={currentText}
        onChange={handleChange}
        readOnly={help}
        className="text-panel-left"
      />
      <div
        dangerouslySetInnerHTML={processedText}
        className="text-panel-right"
      />
    </Styled>
  );
};

export default Panels;
