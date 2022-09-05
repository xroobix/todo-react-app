import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Sidebar from './components/Sidebar';
import Add from './routes/Add';
import Edit from './routes/Edit';
import Inbox from './routes/Inbox';
import NextWeek from './routes/NextWeek';
import NotFound from './routes/NotFound';
import Today from './routes/Today';

function App() {
  const width = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState(0);
    useEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  return (
    <>
      {width <= 768 ? <NavbarMobile /> : <Navbar />}
      <main className="content">
        {width > 768 && <Sidebar />}
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/today" element={<Today />} />
          <Route path="/nextweek" element={<NextWeek />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:todoId" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
