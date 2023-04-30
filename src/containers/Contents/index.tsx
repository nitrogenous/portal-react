import axios from "axios";
import useSWR from "swr";
import { Showcase } from "../../components/Showcase";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const Contents = () => {
  const { data } = useSWR(
    "http://7.tcp.eu.ngrok.io:18089/api/contents",
    fetcher
  );

  return (
    <>
      <Showcase showcaseTitle="Movies" showcaseItems={data?.movies} />
      <Showcase showcaseTitle="Series" showcaseItems={data?.series} />
    </>
  );
};
