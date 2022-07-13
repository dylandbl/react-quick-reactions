# react-quick-reactions

A lightweight popup component for quick reactions and emojis, à la GitHub's reaction popup or Facebook's "likes".

## Installation

```sh
npm install react-quick-reactions
```

Or with yarn:

```sh
yarn add react-quick-reactions
```

## Example implementation
```TSX
import { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="App">
      <QuickReactions
        onClickEmoji={(e) => {
          window.alert(e?.textContent);
        }}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        reactionsArray={[
          {
            name: "Laughing",
            content: "😂",
          }
        ]}
      />
      
     <button
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Show
      </button>
    </div>
  );
}
```

## API

| Prop name                         | Type                        | Default value | Description |
| --------------------------------- | --------------------------- | ------------- | ----------- |
| `changeHeaderOnReactionElemHover` | `boolean`                   | `true`        | When `true`, changes the header value on emoji mouseover.    |
| `closeButton`                     | `string \| JSX.Element`     | -             | String or element to replace the default close button.       |
| `disableClickAwayToClose`         | `boolean`                   | -             | Disables closing by clicking away from the popup.            |
| `header`                          | `string`                    | `"Quick reactions"` | Alternative default title for popup's header.          |
| `hideCloseButton`                 | `boolean`                   | -             | Hides the close button.                                      |
| `hideHeader`                      | `boolean`                   | -             | Hides the header                                             |
| `isVisible`                       | `boolean`                   | `false`       | Determines if popup is visible.                              |
| `setIsVisible`                    | `(value: boolean) => void`  | -             | `useState` function to set visibility state.                 |
| `onClickEmoji`                    | `(value?: Element) => void` | -             | Function called when an emoji is clicked.                    |
| `reactionsArray`                  | [`ReactionObj[]`](#reactionobj) | -         | Array of emojis.                                             |
| `wide`                            | `boolean`                   | -             | Makes the popup wide instead of tall. Eight emojis wide, by default. |
| `closeButtonClassName`            | `string`                    | -             | Optional classes for the close button span.                  |
| `outerDivClassName`               | `string`                    | -             | Optional classes for the popup container div.                |
| `reactionElementClassName`        | `string`                    | -             | Optional classes for the emoji spans.                        |
| `selectionContainerClassName`     | `string`                    | -             | Optional classes for the div containing the array of emojis. |

### `ReactionObj`

```TSX
type ReactionObj = {
  id?: string;  // Used as element's ID.
  name: string; // Displayed in popup header.
  content: string | JSX.Element;
};
```

#### Example
```TSX
const emojiArr1 = [
  {
    id: "laughing",
    name: "Laughing",
    content: "😂",
  },
  {
    id: "crying",
    name: "Crying",
    content: "😢",
  },
  {
    id: "thinking",
    name: "Thinking",
    content: "🤔",
  },
  {
    id: "thinking",
    name: "Screaming",
    content: "😱",
  },
];
  ```
