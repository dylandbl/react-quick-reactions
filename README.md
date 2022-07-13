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
```TS
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
| `changeHeaderOnReactionElemHover` | `boolean`                   | `true`        |             |
| `closeButtonAlt`                  | `string \| JSX.Element`     | -             |             |
| `disableClickAwayToClose`         | `boolean`                   | -             |             |
| `headerAlt`                       | `string`                    | `"Quick reactions"` |       |
| `hideCloseButton`                 | `boolean`                   | -             |             |
| `hideHeader`                      | `boolean`                   | -             |             |
| `isVisible`                       | `boolean`                   | `false`       |             |
| `setIsVisible`                    | `(value: boolean) => void`  | -             |             |
| `onClickEmoji`                    | `(value?: Element) => void` | -             |             |
| `reactionsArray`                  | `ReactionObj[]`             | -             |             |
| `wide`                            | `boolean`                   | -             |             |
| `closeButtonClassName`            | `string`                    | -             |             |
| `outerDivClassName`               | `string`                    | -             |             |
| `reactionElementClassName`        | `string`                    | -             |             |
| `selectionContainerClassName`     | `string`                    | -             |             |
