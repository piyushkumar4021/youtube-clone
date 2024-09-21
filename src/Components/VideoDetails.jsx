import SubscribeButton from './SubscribeButton';
import SocialButtons from './SocialButtons';
import useChannels from '../hooks/useChannels';
import ChannelDetails from './ChannelDetails';

const VideoDetails = ({ item }) => {
  const { data } = useChannels(item?.snippet?.channelId);

  return (
    <div>
      <h2 className='text-xl font-semibold mt-3'>{item?.snippet?.title}</h2>

      <div className='flex justify-between items-center mt-3'>
        <div className='flex items-center gap-x-2'>
          <ChannelDetails data={data} item={item} />

          <SubscribeButton />
        </div>

        <div className='flex gap-x-2 font-semibold'>
          <SocialButtons likeCount={item?.statistics?.likeCount} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
