import Sidebar from '../Components/Sidebar';
import Feed from '../Components/Feed';
import { useState } from 'react';

const Home = ({ showSide }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        showSide={showSide}
        category={category}
        setCategory={setCategory}
      />
      <Feed showSide={showSide} category={category} />
    </>
  );
};

export default Home;
