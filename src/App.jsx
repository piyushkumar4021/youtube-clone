import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';

function App() {
  const [sideLabels, setSideLabels] = useState(true);

  return (
    <>
      <Navbar setSideLabels={setSideLabels} />
      <Sidebar sideLabels={sideLabels} />
      <Feed sideLabels={sideLabels} />
    </>
  );
}

export default App;
