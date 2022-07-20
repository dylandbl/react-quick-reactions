import { CustomComment } from "./Comment";
import { PhotoShootContainer } from "./PhotoShootStyles";

const Comment1 = [
  {
    content: "👍",
    count: 19012,
    thisUserContributed: false,
  },
  {
    content: "👎",
    count: 413,
    thisUserContributed: false,
  },
  {
    content: "❤️",
    count: 15238,
    thisUserContributed: false,
  },
  {
    content: "😄",
    count: 6238,
    thisUserContributed: false,
  },
  {
    content: "😲",
    count: 337,
    thisUserContributed: false,
  },
  {
    content: "😎",
    count: 1034,
    thisUserContributed: false,
  },
];

export const PhotoShoot = () => {
  const THREE_DAYS_AGO = new Date();
  THREE_DAYS_AGO.setDate(THREE_DAYS_AGO.getDate() - 3);

  return (
    <PhotoShootContainer>
      <CustomComment
        username="@user_name"
        content="Wow, this is so cool! 😍"
        timestamp={THREE_DAYS_AGO.toString()}
        timeDisplayValue="3d"
        reactionArray={Comment1}
      />
    </PhotoShootContainer>
  );
};
