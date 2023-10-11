// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import UserPage from './container/UserPage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserLogin from './components/UserLogin';
import Dashboard from './components/Dashboard';
// import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [username,setUsername] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/adminlogin' element={<Login/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/:userName' element={<UserPage username={username} setUsername={setUsername} />} />
        <Route path='*' element={<RedirectComp username={username} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function RedirectComp({ username }) {
  const nav = useNavigate();
  useEffect(() => {
    nav(`/${username}`)
  }, [username])
}

export default App;
