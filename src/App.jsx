import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Pages/Video';
import Layout from './Components/Layout';
import useToggle from './hooks/useToggle';
import SearchResults from './Components/SearchResults';

function App() {
  const [showSide, toggleSide] = useToggle();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout toggleSide={toggleSide} />}>
            <Route path='/' element={<Home showSide={showSide} />} />
            <Route path='/video/:vId' element={<Video />} />
            <Route path='/search/:q' element={<SearchResults />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
