import SubscribeButton from './SubscribeButton';
import SocialButtons from './SocialButtons';

const VideoDetails = ({ item }) => {
  return (
    <div>
      <h2 className='text-xl font-semibold mt-3'>{item?.snippet?.title}</h2>

      <div className='flex justify-between items-center mt-3'>
        <div className='flex items-center gap-x-2'>
          <span className='inline-block w-10 h-10 bg-neutral-500 rounded-full'></span>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>
              {item?.snippet?.channelTitle}
            </span>
            <span className='text-sm'>19.5M subscribers</span>
          </div>

          <SubscribeButton />
        </div>

        <div className='flex gap-x-2 font-semibold'>
          <SocialButtons item={item} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
