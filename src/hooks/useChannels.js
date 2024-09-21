import useData from './useData';

const useChannels = (channelId) => {
  const { data } = useData(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}`
  );

  return { data: data?.items?.at(0) };
};

export default useChannels;
