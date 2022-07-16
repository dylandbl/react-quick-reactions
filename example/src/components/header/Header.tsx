import {
  HeaderDiv,
  HeaderEmojiContainer,
  RightSideContainer,
  TitleDiv,
} from "./HeaderStyles";
import { GitHubLogoSvg } from "../svgs/LogoSvgs";
import { NpmLogoSvg } from "../svgs/LogoSvgs";
import QuickReactions from "react-quick-reactions";
import { useState } from "react";
import { emojiArr2 } from "../../utils/sampleData";

export const Header = () => {
  const [showHeaderQuickReactions, setShowHeaderQuickReactions] =
    useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("" as string | null);

  const handleReactionSelect = (emoji?: Element) => {
    if (emoji) setSelectedEmoji(emoji?.textContent);
    setShowHeaderQuickReactions(false);
  };

  return (
    <HeaderDiv>
      <div>
        <HeaderEmojiContainer>{selectedEmoji}</HeaderEmojiContainer>
        <QuickReactions
          isVisible={showHeaderQuickReactions}
          onClose={() => setShowHeaderQuickReactions(false)}
          trigger={
            <TitleDiv onClick={() => setShowHeaderQuickReactions(true)}>
              react-quick-reactions
            </TitleDiv>
          }
          reactionsArray={emojiArr2}
          onClickReaction={(emoji) => handleReactionSelect(emoji)}
          hideCloseButton
          hideHeader
        />
      </div>
      <RightSideContainer>
        <a
          href="https://github.com/dylandbl/react-quick-reactions/"
          title="View the repo on GitHub"
        >
          <GitHubLogoSvg />
        </a>
        <a
          href="https://www.npmjs.com/package/react-quick-reactions"
          title="View on npm"
        >
          <NpmLogoSvg />
        </a>
      </RightSideContainer>
    </HeaderDiv>
  );
};
