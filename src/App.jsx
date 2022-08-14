import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Inbox from './routes/Inbox';
import NextWeek from './routes/NextWeek';
import NotFound from './routes/NotFound';
import Today from './routes/Today';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/today" element={<Today />} />
          <Route path="/nextweek" element={<NextWeek />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
