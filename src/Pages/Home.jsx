import Sidebar from '../Components/Sidebar';
import Feed from '../Components/Feed';

const Home = ({ category, setCategory, sideLabels }) => {
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
