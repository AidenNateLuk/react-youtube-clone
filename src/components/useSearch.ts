import { useEffect, useState } from "react";
import axios from "axios"; // Import CancelTokenSource
import { dummyVideos } from "../DummyData/dummyvideos";
import { AxiosError } from "axios";

const API_KEY = "AIzaSyC7eq0Q8h3zHet1pcHkODMllc8VKWyXc6g";

interface VideoItem {
  id: number;
  title: string;
  channelName: string;
  views: string;
  url: string;
  tags: string[];
}

export default function useBookSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | AxiosError | string | null>(null);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!query) {
      setVideos(dummyVideos);
      setLoading(false);
      return;
    }

    const source = axios.CancelToken.source();

    axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        key: API_KEY,
        q: query,
        part: "snippet",
        maxResults: 10,
        pageToken: pageNumber,
      },
      cancelToken: source.token,
    })
      .then((res) => {
        setVideos((prevVideos) => [...prevVideos, ...res.data.items]);
        setHasMore(res.data.nextPageToken !== undefined);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(error);
      });

    return () => source.cancel();
  }, [query, pageNumber]);

  return { loading, error, videos, hasMore, query };
}
