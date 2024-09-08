const Card = ({ item }) => {
  return (
    <div className='w-80'>
      <div className='h-44 overflow-hidden bg-cover rounded-lg mb-2'>
        <img src={item.url} alt='' />
      </div>
      <h3 className='text-lg font-semibold leading-tight'>{item.title}</h3>
      <p className='text-neutral-600 font-medium'>{item.title.slice(1, 10)}</p>
    </div>
  );
};

export default Card;
