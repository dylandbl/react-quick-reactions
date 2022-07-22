import { useCallback, useState } from "react";
import QuickReactions from "react-quick-reactions";
import { PlacementType } from "../../../../../lib/esm/types";
import { gridEmojis } from "../../../utils/sampleData";
import { Grid, GridItem, EmojiDisplay } from "./GridShowcaseStyles";

export const gridItems: { title: PlacementType | null; show: boolean }[] = [
  {
    title: null,
    show: false,
  },
  {
    title: "top-start",
    show: false,
  },
  {
    title: "top",
    show: false,
  },
  {
    title: "top-end",
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: "left-start",
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: "right-start",
    show: false,
  },
  {
    title: "left",
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: "right",
    show: false,
  },
  {
    title: "left-end",
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: "right-end",
    show: false,
  },
  {
    title: null,
    show: false,
  },
  {
    title: "bottom-start",
    show: false,
  },
  {
    title: "bottom",
    show: false,
  },
  {
    title: "bottom-end",
    show: false,
  },
  {
    title: null,
    show: false,
  },
];

export const GridShowcase = () => {
  const [gridItemsArray, setGridItemsArray] = useState(gridItems);
  const [currentEmoji, setCurrentEmoji] = useState<string | null | undefined>(
    ""
  );

  const handleVisibility = useCallback(
    (title: string | null, show: boolean) => {
      if (show === null) return;
      const gridItemsArrayCopy = gridItemsArray;

      // Get the index of the item to update and create an updated object.
      const itemToUpdateIndex = gridItemsArrayCopy.findIndex(
        (item) => item.title === title
      );
      const updatedItem = {
        title: gridItemsArrayCopy[itemToUpdateIndex]?.title,
        show,
      };

      // Remove the itemToUpdate from gridItemsArrayCopy.
      const beforeSlice = gridItemsArrayCopy.slice(0, itemToUpdateIndex);
      const afterSlice = gridItemsArrayCopy.slice(
        itemToUpdateIndex + 1,
        gridItemsArrayCopy.length
      );
      // Splice it into the new array.
      const updatedArray = [...beforeSlice, updatedItem, ...afterSlice];

      setGridItemsArray(updatedArray);
    },
    [gridItemsArray]
  );

  return (
    <>
      <h2>Try it</h2>
      <Grid>
        {gridItemsArray.map((item, index) => {
          return (
            <QuickReactions
              key={item?.title + index.toString()}
              onClickReaction={(element) => {
                setCurrentEmoji(element.textContent);
                handleVisibility(item.title, false);
              }}
              isVisible={item.show}
              onClose={() => handleVisibility(item.title, false)}
              reactionsArray={gridEmojis}
              placement={item?.title ? item.title : undefined}
              trigger={
                <GridItem
                  hasTitle={Boolean(item.title)}
                  onClick={() => handleVisibility(item.title, true)}
                >
                  {item.title}
                </GridItem>
              }
            />
          );
        })}
      </Grid>
      <EmojiDisplay>{currentEmoji}</EmojiDisplay>
    </>
  );
};
