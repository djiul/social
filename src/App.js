import './App.css';
import Header from './companents/Header/Header';
import Profile from './companents/Profile/Profile';
import Navbar from './companents/Navbar/Navbar';
import Messages from './companents/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div>

          <Routes>
            <Route index element={<Profile />} />

            <Route path="Profile" element={<Profile />} />
            <Route path="Messages" element={<Messages />} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;