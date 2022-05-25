import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Blog from './Pages/BLog/Blog';
import RequireAuth from './Pages/components/RequireAuth';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>

        <Route path='purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        <Route path='blog' element={<Blog />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>

        <Route path='dashboard' for='my-drawer' element={<Dashboard />}>
          <Route></Route>
        </Route>
        

        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </div>
  );
}

export default App;
