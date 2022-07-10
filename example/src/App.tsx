import "./App.css";
import QuickReactions from "react-quick-reactions";
import { emojiArr1 } from "./utils/sampleData";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <QuickReactions
        onClickEmoji={() => {}}
        isVisible={show}
        reactionsArray={emojiArr1}
        hideHeader
        hideCloseButton
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          setShow(true);
        }}
      >
        Show
      </button>
    </div>
  );
}

export default App;
