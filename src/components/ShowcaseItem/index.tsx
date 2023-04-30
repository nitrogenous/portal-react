import { ShowcaseItemWrapper } from "./styled";

export const ShowcaseItem = ({ thumbnail, name, imdbId }: any) => {
  return (
    <ShowcaseItemWrapper to={`/content/${imdbId}`}>
      <img src={thumbnail} alt={`thumbnail of ${name}`} />
      <span>{name}</span>
    </ShowcaseItemWrapper>
  );
};
