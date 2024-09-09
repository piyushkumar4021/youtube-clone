import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import apiClient from '../Services/api-client';

const Feed = ({ sideLabels, category }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    apiClient
      .get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&videoCategoryId=${category}`
      )
      .then(({ data }) => setVideos(data.items));
  }, [category]);

  return (
    <div
      className={`${
        sideLabels ? 'pl-56' : 'pl-24'
      }  pt-24 pb-8 pr-4 flex flex-wrap gap-x-3 gap-y-6 justify-center bg-neutral-100`}
    >
      {videos.map((v) => (
        <Card key={v.id} item={v} />
      ))}
    </div>
  );
};

export default Feed;
