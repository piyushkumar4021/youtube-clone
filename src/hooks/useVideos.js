import { useState, useEffect } from 'react';
import apiClient from '../Services/api-client';
import axios from './../Services/api-client';

function useVideos(id = 0) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get(
        `/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=30&videoCategoryId=${id}`,
        { signal: controller.signal }
      )
      .catch((err) => {
        if (err.name === 'CanceledError') return;

        console.error(err);
      })
      .then((res) => setData(res ? res.data.items : []));

    return () => controller.abort();
  }, [id]);

  return { data };
}

export default useVideos;
