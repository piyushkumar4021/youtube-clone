import useData from './useData';

const useVideo = (vId) => {
  const { data } = useData(`/videos?part=snippet%2Cstatistics&id=${vId}`);
  return data?.items?.at(0);
};

export default useVideo;
