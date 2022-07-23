import { useCallback, useEffect, useState } from "react";
import QuickReactions from "react-quick-reactions";
import { gridItems, mobileGridItems } from "../../../utils/gridShowcaseArr";
import { useWindowMediaQuery } from "../../../utils/hooks";
import { gridEmojis } from "../../../utils/sampleData";
import { Grid, GridItem, EmojiDisplay } from "./GridShowcaseStyles";

export const GridShowcase = () => {
  const isMobile = useWindowMediaQuery() < 750;
  const [gridItemsArray, setGridItemsArray] = useState(gridItems);
  const [currentEmoji, setCurrentEmoji] = useState<string | null | undefined>(
    ""
  );

  // Update the grid array to use based on screen size.
  useEffect(() => {
    if (isMobile) setGridItemsArray(mobileGridItems);
    else setGridItemsArray(gridItems);
  }, [isMobile]);

  const handleVisibility = useCallback(
    (title: string | null, show: boolean) => {
      if (show === null) return;
      const gridItemsArrayCopy = gridItemsArray;

      // Get the index of the item to update and create an updated object.
      const itemToUpdateIndex = gridItemsArrayCopy.findIndex(
        (item) => item.title === title
      );
      const updatedItem = {
        title: gridItemsArrayCopy[itemToUpdateIndex].title,
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
      <Grid isMobile={isMobile}>
        {gridItemsArray.map((item, index) => (
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
        ))}
      </Grid>
      <EmojiDisplay>{currentEmoji}</EmojiDisplay>
    </>
  );
};
