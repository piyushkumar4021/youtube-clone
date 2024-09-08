import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';

function App() {
  const [sideLabels, setSideLabels] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <>
      <Navbar setSideLabels={setSideLabels} />
      <Sidebar
        sideLabels={sideLabels}
        category={category}
        setCategory={setCategory}
      />
      <Feed sideLabels={sideLabels} category={category} />
    </>
  );
}

export default App;
