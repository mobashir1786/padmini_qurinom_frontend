import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login'
// import { useState } from 'react';
import Home from './components/home/Home';
import Notification from './components/Notification';
import Message from './components/Message';
import CreatePost from './createpost/CreatePost';
import Profile from './components/Profile';
import Setting from './components/Setting';

function App() {
  // const [side, setSide] = useState("flex")
  let cookie = document.cookie;
  // const handleSideBar = () => {
  //   if (side === "flex") {
  //     setSide("none");
  //   } else {
  //     setSide("flex");
  //   }
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={cookie ? <Home /> : <Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/message' element={<Message />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
