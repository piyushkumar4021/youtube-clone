import Sidebar from '../Components/Sidebar';
import Feed from '../Components/Feed';
import { useState } from 'react';

const Home = ({ sideLabels }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sideLabels={sideLabels}
        category={category}
        setCategory={setCategory}
      />
      <Feed sideLabels={sideLabels} category={category} />
    </>
  );
};

export default Home;
