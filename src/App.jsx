import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  const [sideLabels, setSideLabels] = useState(true);

  return (
    <>
      <Navbar setSideLabels={setSideLabels} />
      <Sidebar sideLabels={sideLabels} />
    </>
  );
}

export default App;

// https://jsonplaceholder.typicode.com/photos
