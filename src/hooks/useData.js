import { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';

function useData(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    const getData = async () => {
      try {
        const res = await apiClient.get(endpoint, {
          signal: controller.signal,
        });

        setData(res.data);
      } catch (err) {
        if (err.name === 'CanceledError') return;
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => controller.abort();
  }, [endpoint]);

  return { data, isLoading };
}

export default useData;
