const converter = (viewCount) => {
  if (!viewCount) return null;
  else if (viewCount < 1000) return viewCount;
  else if (viewCount < 1_000_000) return (viewCount / 1000).toFixed(1) + 'K';
  else if (viewCount < 1_000_000_000)
    return (viewCount / 1_000_000).toFixed(1) + 'M';
  else return (viewCount / 1_000_000_000).toFixed(1) + 'B';
};

export default converter;
