import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>

      <Route path='/*' element={<Error/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
