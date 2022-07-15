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
        onClose={() => setIsVisible(false)}
        reactionsArray={[
          {
            name: "Laughing",
            content: "😂",
          }
        ]}
        trigger={
         <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            Show
          </button>
        }
      />
    </div>
  );
}
```

## API

| Prop name                         | Type                        | Default value | Description |
| --------------------------------- | --------------------------- | ------------- | ----------- |
| `changeHeaderOnReactionElemHover` | `boolean`                   | `true`        | When `true, the popup's header updates on emoji mouseover to display the emoji's name. |
| `closeButton`                     | `string \| JSX.Element`     | -             | String or element to replace the default close button.       |
| `disableClickAwayToClose`         | `boolean`                   | -             | Disables closing by clicking away from the popup.            |
| `header`                          | `string`                    | `"Quick reactions"` | Alternative default title for popup's header.          |
| `hideCloseButton`                 | `boolean`                   | -             | Hides the close button.                                      |
| `hideHeader`                      | `boolean`                   | -             | Hides the header                                             |
| `isVisible`                       | `boolean`                   | `false`       | Determines if popup visibility.                              |
| `onClickEmoji`                    | `(value?: Element) => void` | -             | Function called when an emoji is clicked.                    |
| `onClose`                         | `() => void`                | -             | Function called on popup close.                              |
| `reactionsArray`                  | [`ReactionObj[]`](#reactionobj) | -         | Array of emojis.                                             |
| `wide`                            | `boolean`                   | -             | Makes the popup wide instead of tall. Eight emojis wide, by default. |
| `closeButtonClassName`            | `string`                    | -             | Optional classes for the close button span.                  |
| `outerDivClassName`               | `string`                    | -             | Optional classes for the popup container div.                |
| `reactionElementClassName`        | `string`                    | -             | Optional classes for the emoji spans.                        |
| `selectionContainerClassName`     | `string`                    | -             | Optional classes for the div containing the array of emojis. |

### `ReactionObj`

```TSX
type ReactionObj = {
  id?: string;  // Used as element's #id.
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
    id: "screaming",
    name: "Screaming",
    content: "😱",
  },
];
  ```
