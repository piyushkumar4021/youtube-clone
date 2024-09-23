import { useSearchParams } from 'react-router-dom';
import useVideo from '../hooks/useVideo';
import SideVideos from './../Components/SideVideos';
import VideoDetails from './../Components/VideoDetails';
import YoutubeVideo from './../Components/YoutubeVideo';

const Video = () => {
  const [searchParams] = useSearchParams();
  const vId = searchParams.get('v');
  const { data } = useVideo(vId);
  const item = data?.items?.at(0);

  return (
    <div className='pt-24 pb-8 px-24 mx-auto flex gap-x-6'>
      <div className='max-w-7xl'>
        <YoutubeVideo vId={vId} />
        <VideoDetails item={item} />
      </div>

      <SideVideos categoryId={item ? item.snippet.categoryId : 0} />
    </div>
  );
};

export default Video;
