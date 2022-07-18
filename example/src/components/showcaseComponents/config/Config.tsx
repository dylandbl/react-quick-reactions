import { useState } from "react";
import QuickReactions from "react-quick-reactions";
import { PlacementType } from "../../../../../lib/esm/types";
import { emojiArr1, positionOptions } from "../../../utils/sampleData";
import { GridItem } from "../gridShowcase/GridShowcaseStyles";
import { ConfigButton, ConfigContainer, InputsContainer } from "./ConfigStyles";

export const Config = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // Config states.
  const [placement, setPlacement] = useState<PlacementType>("right");
  const [hideHeader, setHideHeader] = useState(false);
  const [hideCloseButton, setHideCloseButton] = useState(false);
  const [wide, setWide] = useState(false);
  const [disableClickAwayToClose, setDisableClickAwayToClose] = useState(false);

  return (
    <>
      <h2 style={{ marginBottom: "32px" }}>Customize it</h2>
      <QuickReactions
        onClickReaction={() => {}}
        isVisible={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        reactionsArray={emojiArr1}
        hideHeader={hideHeader}
        hideCloseButton={hideCloseButton}
        placement={placement}
        wide={wide}
        disableClickAwayToClose={disableClickAwayToClose}
        trigger={
          <GridItem
            hasTitle
            onClick={() => {
              setShowPopup(!showPopup);
            }}
          >
            Click me!
          </GridItem>
        }
      />
      <ConfigContainer>
        <ConfigButton onClick={() => setShowConfig(!showConfig)}>
          Configure
        </ConfigButton>
        <InputsContainer show={showConfig}>
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
        </InputsContainer>
      </ConfigContainer>
    </>
  );
};
