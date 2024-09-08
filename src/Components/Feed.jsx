import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

const Feed = ({ sideLabels }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setVideos(data.slice(1, 29)));
  }, []);

  return (
    <div
      className={`${
        sideLabels ? 'pl-56' : 'pl-24'
      }  pt-24 pb-8 pr-4 flex flex-wrap gap-6 justify-center`}
    >
      {videos.map((v) => (
        <Card key={v.id} item={v} />
      ))}
    </div>
  );
};

export default Feed;
