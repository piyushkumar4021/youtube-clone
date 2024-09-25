import useData from './useData';

const useSearch = (q) =>
  useData(`/search?part=snippet&maxResults=30&type=video&q=${q}`);

export default useSearch;
