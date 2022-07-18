import { Config } from "./config/Config";

import { GridShowcase } from "./gridShowcase/GridShowcase";
import { ShowcaseContainer } from "./ShowcaseStyles";

export const Showcase = () => {
  return (
    <ShowcaseContainer>
      <GridShowcase />
      <Config />
    </ShowcaseContainer>
  );
};
