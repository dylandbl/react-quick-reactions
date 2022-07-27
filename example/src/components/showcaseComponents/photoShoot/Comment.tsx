import { useState } from "react";
import QuickReactions from "react-quick-reactions";
import { ReactionObj } from "react-quick-reactions/lib/esm/types/index";
import { commentEmojis } from "../../../utils/sampleData";
import { SmileSvg } from "../../svgs/SmileSvg";
import {
  CommentWrapper,
  CommentHeader,
  UsernameSpan,
  TimeStamp,
  CommentBody,
  CommentFooter,
  PhotoShootEmojiButton,
  ReactionsArray,
  CountSpan,
} from "./PhotoShootStyles";

interface CommentProps {
  timestamp: string;
  timeDisplayValue: string;
  username: string;
  content: string;
  reactionArray: {
    content: string;
    count: number;
    thisUserContributed: boolean;
  }[];
}
export const CustomComment = ({
  timestamp,
  timeDisplayValue,
  username,
  content,
  reactionArray,
}: CommentProps) => {
  const [visible, setVisible] = useState(false);
  const [reactionArrayState, setReactionArrayState] = useState(reactionArray);

  const handleClickReaction = (emojiElement?: ReactionObj) => {
    setVisible(false);
    const reactionArrayStateCopy = reactionArrayState;

    const index = reactionArrayStateCopy.findIndex(
      (item) => item.content === emojiElement?.content
    );

    reactionArrayStateCopy[index].count += 1;
    reactionArrayStateCopy[index].thisUserContributed = true;
    setReactionArrayState(reactionArrayStateCopy);
  };

  return (
    <CommentWrapper>
      <CommentHeader>
        <UsernameSpan>{username}</UsernameSpan>
        <TimeStamp title={timestamp}>{timeDisplayValue}</TimeStamp>
      </CommentHeader>
      <CommentBody>{content}</CommentBody>
      <CommentFooter>
        <QuickReactions
          isVisible={visible}
          onClose={() => setVisible(false)}
          reactionsArray={commentEmojis}
          onClickReaction={(item) => handleClickReaction(item)}
          trigger={
            <PhotoShootEmojiButton onClick={() => setVisible(true)}>
              <SmileSvg />
            </PhotoShootEmojiButton>
          }
        />
        <ReactionsArray>
          {reactionArrayState.map(
            (item) =>
              item.count > 0 && (
                <PhotoShootEmojiButton
                  className="emoji-button"
                  thisUserContributed={item.thisUserContributed}
                >
                  {item.content}
                  {item.count > 1 ? (
                    <CountSpan thisUserContributed={item.thisUserContributed}>
                      x
                      {item.count > 1000
                        ? Math.floor(item.count / 1000).toString() + "k"
                        : item.count}
                    </CountSpan>
                  ) : null}
                </PhotoShootEmojiButton>
              )
          )}
        </ReactionsArray>
      </CommentFooter>
    </CommentWrapper>
  );
};
