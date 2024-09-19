import useData from './useData';

const useVideos = (id) =>
  useData(
    `/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=30&videoCategoryId=${id}`
  );

export default useVideos;
