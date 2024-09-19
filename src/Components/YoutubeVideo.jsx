const YoutubeVideo = ({ vId }) => {
  return (
    <iframe
      className='rounded-2xl'
      width='1280'
      height='720'
      src={`https://www.youtube.com/embed/${vId}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
