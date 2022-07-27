import { useState } from "react";
import QuickReactions from "react-quick-reactions";
import { AnimationType, PlacementType } from "../../../../../lib/esm/types";
import {
  animationOptions,
  emojiArr1,
  positionOptions,
} from "../../../utils/sampleData";
import { Codeblock } from "../codblock/Codeblock";
import { GridItem } from "../gridShowcase/GridShowcaseStyles";
import { ConfigContainer, InputsContainer } from "./ConfigStyles";

export const Config = () => {
  const [showPopup, setShowPopup] = useState(false);
  // Config states.
  const [placement, setPlacement] = useState<PlacementType>("right");
  const [hideHeader, setHideHeader] = useState(false);
  const [hideCloseButton, setHideCloseButton] = useState(false);
  const [wide, setWide] = useState(false);
  const [disableClickAwayToClose, setDisableClickAwayToClose] = useState(false);
  const [animation, setAnimation] = useState<AnimationType>("fade");
  const [emojiArrLength, setEmojiArrLength] = useState(8);

  return (
    <>
      <h2 style={{ marginTop: "32px" }}>Configure it</h2>
      <ConfigContainer>
        <InputsContainer>
          <label htmlFor="placement" className="dropdownLabel">
            Placement
          </label>
          <br />
          <select
            id="placement"
            name="placement"
            className="dropdownLabel"
            value={placement}
            onChange={(e) => setPlacement(e.target.value as PlacementType)}
          >
            {positionOptions.map((item, index) => (
              <option key={item + "-" + index}>{item}</option>
            ))}
          </select>
          <br />

          <label htmlFor="animation" className="dropdownLabel">
            Animation
          </label>
          <br />
          <select
            id="animation"
            name="animation"
            className="dropdownLabel"
            value={animation}
            onChange={(e) => setAnimation(e.target.value as AnimationType)}
          >
            {animationOptions.map((item, index) => (
              <option key={item + "-" + index}>{item}</option>
            ))}
          </select>
          <br />

          <input
            type="checkbox"
            id="hideHeader"
            name="hideHeader"
            checked={hideHeader}
            onChange={(e) => {
              setHideHeader(e.target.checked);
            }}
          />
          <label htmlFor="hideHeader">Hide header</label>
          <br />

          <input
            type="checkbox"
            id="hideClose"
            name="hideClose"
            checked={hideCloseButton}
            onChange={(e) => {
              setHideCloseButton(e.target.checked);
            }}
          />
          <label htmlFor="hideClose">Hide close button</label>
          <br />

          <input
            type="checkbox"
            id="disableClickAwayToClose"
            name="disableClickAwayToClose"
            checked={disableClickAwayToClose}
            onChange={(e) => {
              setDisableClickAwayToClose(e.target.checked);
            }}
          />
          <label htmlFor="disableClickAwayToClose">
            Disable clicking away to close
          </label>
          <br />

          <input
            type="checkbox"
            id="widePopup"
            name="widePopup"
            checked={wide}
            onChange={(e) => {
              setWide(e.target.checked);
            }}
          />
          <label htmlFor="widePopup">Wide popup</label>
          <br />

          <label htmlFor="arrayLength">Emoji array length</label>
          <br />
          <input
            type="range"
            id="arrayLength"
            name="arrayLength"
            min={0}
            max={8}
            value={emojiArrLength}
            onChange={(e) => {
              setEmojiArrLength(Number(e.target.value));
            }}
          />
          <br />
        </InputsContainer>
        <QuickReactions
          onClickReaction={(item) => console.log(item)}
          isVisible={showPopup}
          onClose={() => setShowPopup(false)}
          animation={animation}
          reactionsArray={emojiArr1.slice(0, emojiArrLength)}
          hideHeader={hideHeader}
          hideCloseButton={hideCloseButton}
          placement={placement}
          wide={wide}
          disableClickAwayToClose={disableClickAwayToClose}
          trigger={
            <GridItem hasTitle onClick={() => setShowPopup(!showPopup)}>
              Click me!
            </GridItem>
          }
        />
        <Codeblock>
          {`<QuickReactions
  onClickReaction={() => {}}
  isVisible={isVisible}
  onClose={() => setIsVisible(false)}
  trigger={
    <button onClick={() => setIsVisible(!isVisible)}>
      Click me!
    </button>
  }`}
          {placement !== "bottom-start" ? `\n  placement={"${placement}"}` : ""}
          {animation !== "fade" ? `\n  animation={"${animation}"}` : ""}
          {hideHeader ? `\n  hideHeader` : ""}
          {hideCloseButton ? `\n  hideCloseButton` : ""}
          {disableClickAwayToClose ? `\n  disableClickAwayToClose` : ""}
          {wide ? `\n  wide` : ""}
          {`\n/>`}
        </Codeblock>
      </ConfigContainer>
    </>
  );
};
