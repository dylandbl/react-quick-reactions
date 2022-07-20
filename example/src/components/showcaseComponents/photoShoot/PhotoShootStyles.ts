import styled from "@emotion/styled";

export const PhotoShootContainer = styled.div`
  margin-top: 100px;
`;
export const CommentWrapper = styled.div`
  min-height: 100px;
  width: 500px;

  border: 1px solid lightgrey;
  border-radius: 8px;
`;
export const CommentHeader = styled.div`
  padding: 2px 16px 2px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid lightgrey;
`;

export const UsernameSpan = styled.span`
  font-weight: 600;
`;
export const TimeStamp = styled.span`
  font-size: 0.8rem;
  color: grey;
`;
export const CommentBody = styled.div`
  padding: 6px 16px;
`;
export const CommentFooter = styled.div`
  padding: 6px 16px;
  display: flex;
`;

export const ReactionsArray = styled.div`
  display: flex;
  margin-left: 16px;

  .emoji-button {
    margin: 0 2px;
    padding: 0 4px;
    align-items: baseline;
  }
`;

export const CountSpan = styled.span<{ thisUserContributed?: boolean }>`
  font-size: 0.75rem;
  color: ${({ thisUserContributed }) =>
    thisUserContributed ? "black" : "grey"};
  padding-left: 4px;
`;

export const PhotoShootEmojiButton = styled.button<{
  thisUserContributed?: boolean;
}>`
  padding: 0;
  display: flex;
  min-width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background: ${({ thisUserContributed }) =>
    thisUserContributed ? "#e2eef9" : "white"};
  border-radius: 4px;
  border: 1px solid
    ${({ thisUserContributed }) =>
      thisUserContributed ? "dodgerblue" : "#c6d6eb"};

  cursor: pointer;

  transition: fill 0.15s, background 0.15s;

  :hover {
    background: ${({ thisUserContributed }) =>
      thisUserContributed ? "#b0d8ff" : "#e7e7e7"};
    fill: dodgerblue;

    transition: fill 0.15s, background 0.15s;
  }
`;
