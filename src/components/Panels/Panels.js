import { marked } from "marked";
import React from "react";
import { Styled } from "./Panels.styled";

const Panels = () => {
  const textCurrent = `Heading
  =======
  
  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a
  line break
  
  Text attributes *italic*, **bold**,
  \`monospace\`, ~~strikethrough~~ .
  
  Shopping list:
  
    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  The rain---not the reign---in
  Spain.`;

  const parsedText = marked(textCurrent, { sanitize: true });
  const processedText = { __html: parsedText };
  return (
    <Styled>
      <textarea value={textCurrent} className="text-panel-left" />
      <div
        dangerouslySetInnerHTML={processedText}
        className="text-panel-right"
      />
    </Styled>
  );
};

export default Panels;
