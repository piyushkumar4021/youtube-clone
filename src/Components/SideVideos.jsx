const SideVideos = ({ cnts }) => {
  return (
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
  );
};

export default SideVideos;
