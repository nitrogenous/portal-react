import { ShowcaseItem } from "../ShowcaseItem";
import { ShowcaseWrapper } from "./styled";

export const Showcase = ({ showcaseTitle, showcaseItems }: any) => {
  return (
    <ShowcaseWrapper>
      <span>{showcaseTitle}</span>
      <div>
        {showcaseItems?.map((showcaseItem: any) => (
          <ShowcaseItem {...showcaseItem} key={showcaseItem.name} />
        ))}
      </div>
    </ShowcaseWrapper>
  );
};
