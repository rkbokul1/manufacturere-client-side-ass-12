import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfiles from './Pages/Dashboard/MyProfiles';
import MyReview from './Pages/Dashboard/MyReview';
import Order from './Pages/Dashboard/Order';
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
        
        <Route path='purchase/:paramsId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        <Route path='blog' element={<Blog />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>

        <Route path='dashboard' htmlFor='my-drawer' element={<Dashboard />}>
          <Route index element={<Order/>}></Route>
          <Route path='myreview' element={<MyReview/>}></Route>
          <Route path='myprofile' element={<MyProfiles/>}></Route>
        </Route>
        

        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </div>
  );
}

export default App;
