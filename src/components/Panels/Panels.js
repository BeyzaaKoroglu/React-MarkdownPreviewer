import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserText, setCurrentText } from "../../redux/texts/textsSlice";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Styled } from "./Panels.styled";

const Panels = () => {
  const dispatch = useDispatch();
  const currentText = useSelector((state) => state.texts.currentText);
  const help = useSelector((state) => state.texts.help);

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
      <div className="text-panel-right">
        <ReactMarkdown
          children={`${currentText}`}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </Styled>
  );
};

export default Panels;
