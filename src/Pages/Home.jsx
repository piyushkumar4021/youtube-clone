import Sidebar from '../Components/Sidebar';
import Feed from '../Components/Feed';
import { useState } from 'react';

const Home = ({ showSide, searchQuery }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className='flex-grow flex'>
      <Sidebar
        showSide={showSide}
        category={category}
        setCategory={setCategory}
      />
      <Feed category={category} searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
