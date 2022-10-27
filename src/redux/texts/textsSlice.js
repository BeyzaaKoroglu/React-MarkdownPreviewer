import { createSlice } from "@reduxjs/toolkit";

export const textsSlice = createSlice({
  name: "texts",
  initialState: {
    help: false,
    helpText: `
Heading
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
`,
    userText: `**Enter your text here...**`,
    currentText: "",
  },
  reducers: {
    setHelp: {
      reducer: (state) => {
        state.help = !state.help;
      },
    },
    setCurrentText: {
      reducer: (state) => {
        state.currentText = state.help ? state.helpText : state.userText;
      },
    },
    changeUserText: {
      reducer: (state, action) => {
        state.userText = action.payload;
        state.currentText = action.payload;
      },
    },
  },
});

export const { setHelp, setCurrentText, changeUserText } = textsSlice.actions;
export default textsSlice.reducer;
