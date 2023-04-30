import axios from "axios";
import useSWR from "swr";
import { Showcase } from "../../components/Showcase";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const Contents = () => {
  const { data } = useSWR(
    "https://771a-37-130-123-69.ngrok-free.app/api/contents",
    fetcher
  );

  return (
    <>
      <Showcase showcaseTitle="Movies" showcaseItems={data?.movies} />
      <Showcase showcaseTitle="Series" showcaseItems={data?.series} />
    </>
  );
};
