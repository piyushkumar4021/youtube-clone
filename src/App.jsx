import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Pages/Video';
import Layout from './Components/Layout';

function App() {
  const [sideLabels, setSideLabels] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout setSideLabels={setSideLabels} />}>
            <Route path='/' element={<Home sideLabels={sideLabels} />} />
            <Route path='/video/:vId' element={<Video />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
