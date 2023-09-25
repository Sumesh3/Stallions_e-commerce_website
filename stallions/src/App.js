import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home_Page/Home';
import Navbar from './Components/Navbarfirst/Navbar';
import Navbarf2 from './Components/Navbarf2/Navbarf2';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import MainPage from './Pages/Main_Page/MainPage';
import Shop from './Pages/Shope/Shop';
import AddProduct from './Pages/Admin/Add_Product/AddProduct';
import Admin_ViewProduct from './Pages/Admin/View_Product_admin/Admin_ViewProduct';
import User_Details from './Pages/Admin/User_Details/User_Details';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/navf' element={<Navbar/>}/>
        <Route path='/navf2' element={<Navbarf2/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/adminviewproduct' element={<Admin_ViewProduct/>}/>
        <Route path='/userdetails' element={<User_Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
