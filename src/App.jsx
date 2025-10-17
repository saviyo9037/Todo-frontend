import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignUpForm from './pages/SignUpForm';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector((state)=> state.user)
  return (
    <>
    <Routes>
      <Route path="register" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
    {user ?
    <>
      <Route path='/profile' element={<Profile />} />
      <Route path='/' element={ <Home/>} />
      <Route path='*' element={<>404 Not Found</>}/>
      </>
    :
    
        <Route path="*" element ={<Login/>}/>
    }
      </Routes>
      
    </>
  )
}

export default App
