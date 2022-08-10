# react-quick-reactions

<img src="https://user-images.githubusercontent.com/48745406/179853953-35c8bdf8-fad1-4377-a2cf-8f757f75c9dd.png" alt="Screenshot of react-quick-reactions" align="right">

✨ **Try it out:** [dylandbl.github.io/react-quick-reactions](https://dylandbl.github.io/react-quick-reactions) ✨

A lightweight, customizable popup component for quick reactions and emojis, à la GitHub's reaction popup or Facebook's "likes".

<img src="https://user-images.githubusercontent.com/48745406/179854484-3c7495ef-c447-45b6-a550-c688587d03fd.png" alt="Screenshot of react-quick-reactions" >

## Installation

```sh
npm install react-quick-reactions
```

Or with yarn:

```sh
yarn add react-quick-reactions
```

## Example use
```TSX
import { useState } from "react";
import QuickReactions from "react-quick-reactions";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="App">
      <QuickReactions
        reactionsArray={[
          {
            name: "Laughing",
            content: "😂",
          }
        ]}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onClickReaction={(reaction) => {
          window.alert(reaction.content);
        }}
        trigger={
          <button
            onClick={() => {
              setIsVisible(!isVisible);
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
| `animation`                       | [`AnimationType`](#animationtype)| `"fade"` | The animation effect used when the popup is displayed. |
| `changeHeaderOnReactionElemHover` | `boolean`                   | `true`        | When `true`, the popup's header updates on emoji mouseover to display the emoji's name. |
| `closeButton`                     | `string \| JSX.Element`     | -             | String or element to replace the default close button.       |
| `disableClickAwayToClose`         | `boolean`                   | -             | Disables closing by clicking away from the popup.            |
| `header`                          | `string`                    | `"Quick reactions"` | Alternative default title for popup's header.          |
| `hideCloseButton`                 | `boolean`                   | -             | Hides the close button.                                      |
| `hideHeader`                      | `boolean`                   | -             | Hides the header                                             |
| `isVisible`                       | `boolean`                   | `false`       | Determines popup visibility.                                 |
| `onClickReaction`                 | `(value: ReactionObj) => void` | -         | Function called when an emoji is clicked. Passes the emoji's `ReactionObj`. |
| `onClose`                         | `() => void`                | -             | Function called on popup close.                              |
| `placement`                       | [`PlacementType`](#placementtype) | `"bottom-start"` | Positions the popup relative to the `trigger`.      |
| `reactionsArray`                  | [`ReactionObj[]`](#reactionobj) | -         | Array of emojis.                                             |
| `wide`                            | `boolean`                   | -             | Makes the popup wide instead of tall. Up to eight emojis wide, by default. |
| `closeButtonClassName`            | `string`                    | -             | Optional classes for the close button span.                  |
| `outerDivClassName`               | `string`                    | -             | Optional classes for the popup container div.                |
| `reactionElementClassName`        | `string`                    | -             | Optional classes for the emoji spans.                        |
| `selectionContainerClassName`     | `string`                    | -             | Optional classes for the div containing the array of emojis. |

### `AnimationType`
```TS
type AnimationType = "drop" | "fade" | "flip" | "zoom" | "none";
```

### `PlacementType`
```TS
type PlacementType =
  | "top-start"
  | "top"
  | "top-end"
  | "left-start"
  | "left"
  | "left-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end";
```

### `ReactionObj`

```TS
type ReactionObj = {
  id?: string;  // Used as element's #id.
  name: string; // Displayed in popup header.
  content: string | JSX.Element;
};
```

#### Example
```TS
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
