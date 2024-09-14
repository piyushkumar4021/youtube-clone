import { useState, useEffect } from 'react';
import apiClient from '../Services/api-client';

function useVideos(category) {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient
      .get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&videoCategoryId=${category}`
      )
      .then(({ data }) => setData(data.items));
  }, [category]);

  return { data };
}

export default useVideos;
