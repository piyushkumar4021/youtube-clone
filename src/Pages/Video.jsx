const Video = () => {
  const cnts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='pt-24 pb-8 px-24 mx-auto flex gap-x-6'>
      <div className=''>
        <iframe
          className='rounded-2xl'
          width='1280'
          height='720'
          src='https://www.youtube.com/embed/suhEIUapSJQ'
          title='I Redesigned the ENTIRE Spotify UI from Scratch'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
        <h2 className='text-xl font-semibold mt-2'>
          I Redesigned the ENTIRE Spotify UI from Scratch
        </h2>
        <div className='flex justify-between'>
          <div className=''>
            <span className='inline-block w-8 h-8 bg-neutral-500 rounded-full'></span>
            <span>Juxtopposed</span>
            <button className='bg-red-500 text-neutral-50 py-2 px-4 rounded-3xl'>
              Subscribe
            </button>
          </div>
          <div className=''>
            <span>Like</span>
            <span>Share</span>
            <span>Download</span>
            <span>Save</span>
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
