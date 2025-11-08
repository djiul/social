import './App.css';
import Header from './companents/Header/Header';
import Profile from './companents/Profile/Profile';
import Navbar from './companents/Navbar/Navbar';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;