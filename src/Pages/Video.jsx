import { useSearchParams } from 'react-router-dom';
import useVideo from '../hooks/useVideo';
import SideVideos from './../Components/SideVideos';
import VideoDetails from './../Components/VideoDetails';

const Video = () => {
  const [searchParams] = useSearchParams();
  const vId = searchParams.get('v');
  const data = useVideo(vId);

  return (
    <div className='pt-24 pb-8 px-24 mx-auto flex gap-x-6'>
      <div className=''>
        <iframe
          className='rounded-2xl'
          width='1280'
          height='720'
          src={`https://www.youtube.com/embed/${vId}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />

        <VideoDetails data={data} />
      </div>

      <SideVideos categoryId={data?.snippet?.categoryId} />
    </div>
  );
};

export default Video;
