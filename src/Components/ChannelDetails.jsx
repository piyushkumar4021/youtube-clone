import converter from '../Services/converter';

const ChannelDetails = ({ item, data }) => {
  return (
    <div className='flex gap-3'>
      <img
        className='inline-block w-10 h-10 bg-neutral-500 rounded-full'
        src={data?.snippet?.thumbnails?.default?.url}
        alt=''
      />
      <div className='flex flex-col'>
        <span className='text-sm font-semibold'>
          {item?.snippet?.channelTitle}
        </span>
        <span className='text-sm'>
          {converter(data?.statistics?.subscriberCount)} Subscribers
        </span>
      </div>
    </div>
  );
};

export default ChannelDetails;
