import { useEffect, useState } from 'react';
import {
  BsArrowDown,
  BsEnvelopeHeart,
  BsHandThumbsUp,
  BsShare,
} from 'react-icons/bs';
import Icon from './../Components/Icon';
import apiClient from '../Services/api-client';
import converter from '../Services/converter';

const Video = () => {
  const cnts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const videoId = 'AClfhmJYyNc';

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const getVideoData = async () => {
      const { data } = await apiClient.get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`
      );
      setVideoData(data.items[0]);
    };

    getVideoData();
  }, []);

  return (
    <div className='pt-24 pb-8 px-24 mx-auto flex gap-x-6'>
      <div className=''>
        <iframe
          className='rounded-2xl'
          width='1280'
          height='720'
          src={`https://www.youtube.com/embed/${videoId}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <h2 className='text-xl font-semibold mt-3'>
          {videoData?.snippet?.title}
        </h2>
        <div className='flex justify-between items-center mt-3'>
          <div className='flex items-center gap-x-2'>
            <span className='inline-block w-10 h-10 bg-neutral-500 rounded-full'></span>
            <div className='flex flex-col'>
              <span className='text-sm font-semibold'>
                {videoData?.snippet?.channelTitle}
              </span>
              <span className='text-sm'>19.5M subscribers</span>
            </div>
            <button className='bg-red-500 hover:bg-red-600 text-neutral-50 py-1 px-3 rounded-3xl ml-4'>
              Subscribe
            </button>
          </div>

          <div className='flex gap-x-2 font-semibold'>
            <button className='flex gap-x-2 items-center bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-3xl px-4 py-2'>
              <Icon icon={BsHandThumbsUp} size={18} />
              {converter(videoData?.statistics?.likeCount)} Likes
            </button>
            <button className='flex gap-x-2 items-center bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-3xl px-4 py-2'>
              <Icon icon={BsShare} size={18} />
              Share
            </button>
            <button className='flex gap-x-2 items-center bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-3xl px-4 py-2'>
              <Icon icon={BsArrowDown} size={18} />
              Download
            </button>
            <button className='flex gap-x-2 items-center bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-3xl px-4 py-2'>
              <Icon icon={BsEnvelopeHeart} size={18} />
              Thanks
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-y-3'>
        {cnts.map((cnt) => (
          <div key={cnt} className='flex gap-x-2'>
            <div className='bg-blue-500 w-36 h-16 rounded-lg'></div>
            <h3 className='font-medium'>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
