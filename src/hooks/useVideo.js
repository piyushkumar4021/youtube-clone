import { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';

function useVideo(vId) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getVideoData = async () => {
      const { data } = await apiClient.get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vId}`
      );
      setData(data.items[0]);
    };

    getVideoData();
  }, []);

  return { data };
}

export default useVideo;
