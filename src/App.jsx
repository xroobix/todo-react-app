import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Inbox from './routes/Inbox';
import Today from './routes/Today';
import NextWeek from './routes/NextWeek';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Inbox />}/>
          <Route path="/today" element={<Today />}/>
          <Route path="/nextweek" element={<NextWeek />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
