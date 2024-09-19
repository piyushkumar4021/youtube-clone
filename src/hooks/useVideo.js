import useData from './useData';

const useVideo = (vId) =>
  useData(`/videos?part=snippet%2Cstatistics&id=${vId}`);

export default useVideo;
