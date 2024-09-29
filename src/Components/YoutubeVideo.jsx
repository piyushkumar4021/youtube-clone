const YoutubeVideo = ({ vId }) => {
  return (
    <iframe
      className='w-full h-56 sm:h-96 rounded-2xl'
      src={`https://www.youtube.com/embed/${vId}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
