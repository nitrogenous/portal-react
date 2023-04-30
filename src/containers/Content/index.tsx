import axios from "axios";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const Content = () => {
  const { imdbId } = useParams();
  const { data } = useSWR(
    `http://7.tcp.eu.ngrok.io:18089/api/content/${imdbId}`,
    fetcher
  );

  return (
    <div>
      <div className="navbar">
        {/* <a href="/" className="landing-title">
          <h1>portal</h1>
        </a> */}
        <h1 className="movie-title">{data?.name}</h1>
      </div>
      <ReactPlayer url={data?.url} controls />
    </div>
  );
};
