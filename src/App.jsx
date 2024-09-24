import { BrowserRouter, Routes, Route, useActionData } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Pages/Video';
import Layout from './Components/Layout';
import useToggle from './hooks/useToggle';

function App() {
  const [showSide, toggleSide] = useToggle();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout toggleSide={toggleSide} />}>
            <Route path='/' element={<Home showSide={showSide} />} />
            <Route path='/video/:vId' element={<Video />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
