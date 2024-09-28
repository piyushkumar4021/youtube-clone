import { useParams } from 'react-router-dom';
import useVideo from '../hooks/useVideo';
import SideVideos from './../Components/SideVideos';
import VideoDetails from './../Components/VideoDetails';
import YoutubeVideo from './../Components/YoutubeVideo';
import ScrollToTop from '../Components/ScrollToTop';
import { useRef } from 'react';

const Video = () => {
  const { vId } = useParams();
  const { data } = useVideo(vId);
  const item = data?.items?.at(0);
  const scrollRef = useRef();

  return (
    <>
      <div ref={scrollRef} className='pt-6 pb-8 px-24 mx-auto flex gap-x-6'>
        <div className='max-w-7xl'>
          <YoutubeVideo vId={vId} />
          <VideoDetails item={item} />
        </div>

        <SideVideos categoryId={item ? item.snippet.categoryId : 0} />
      </div>
      <ScrollToTop element={scrollRef} />
    </>
  );
};

export default Video;
