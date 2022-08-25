import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Add from './routes/Add';
import Edit from './routes/Edit';
import Inbox from './routes/Inbox';
import NextWeek from './routes/NextWeek';
import NotFound from './routes/NotFound';
import Today from './routes/Today';

function App() {
  return (
    <>
      <Navbar />
      <main className="content">
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
