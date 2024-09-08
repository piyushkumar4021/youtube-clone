const viewsConverter = (viewCount) => {
  if (!viewCount) return null;
  else if (viewCount < 1000) return viewCount + ' Views';
  else if (viewCount < 1_000_000)
    return (viewCount / 1000).toFixed(1) + 'K Views';
  else if (viewCount < 1_000_000_000)
    return (viewCount / 1_000_000).toFixed(1) + 'M Views';
  else return (viewCount / 1_000_000_000).toFixed(1) + 'B Views';
};

export default viewsConverter;
