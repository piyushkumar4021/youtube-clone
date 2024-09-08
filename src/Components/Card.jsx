const Card = ({ item }) => {
  return (
    <div className='w-80'>
      <img
        className='h-44 w-full overflow-hidden object-cover rounded-lg mb-2'
        src={item.snippet.thumbnails.high.url}
        alt=''
      />
      <h3 className='text-lg font-semibold leading-tight'>
        {item.snippet.title}
      </h3>
      <p className='text-neutral-600 font-medium'>
        {item.snippet.channelTitle}
      </p>
    </div>
  );
};

export default Card;
