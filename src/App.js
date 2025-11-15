import './App.css';
import Header from './companents/Header/Header';
import Profile from './companents/Profile/Profile';
import Navbar from './companents/Navbar/Navbar';
import Messages from './companents/Messages/Messages';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <div>
        <Profile />
        <Messages />
      </div>
    </div>
  );
}

export default App;