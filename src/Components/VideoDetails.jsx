import SubscribeButton from './SubscribeButton';
import SocialButtons from './SocialButtons';
import useChannels from '../hooks/useChannels';
import ChannelDetails from './ChannelDetails';
import Description from './Description';

const VideoDetails = ({ item }) => {
  const { data } = useChannels(item?.snippet?.channelId);

  return (
    <div>
      <h2 className='text-xl font-semibold mt-3'>{item?.snippet?.title}</h2>

      <div className='flex justify-between gap-y-4 flex-col lg:flex-row mt-3'>
        <div className='flex items-center gap-x-2 justify-between'>
          <ChannelDetails data={data} item={item} />

          <SubscribeButton />
        </div>

        <div className='flex gap-x-2 font-semibold text-sm sm:text-base'>
          <SocialButtons likeCount={item?.statistics?.likeCount} />
        </div>
      </div>

      <Description item={item} />
    </div>
  );
};

export default VideoDetails;
