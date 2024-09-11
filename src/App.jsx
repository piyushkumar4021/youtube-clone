import { useState } from 'react';
import Navbar from './Components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Pages/Video';

function App() {
  const [sideLabels, setSideLabels] = useState(true);
  const [category, setCategory] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          sideLabels={sideLabels}
          category={category}
          setCategory={setCategory}
        />
      ),
    },
    { path: '/video', element: <Video /> },
  ]);

  return (
    <>
      <Navbar setSideLabels={setSideLabels} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
