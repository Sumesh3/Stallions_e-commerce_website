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
import Payment_type from './Pages/Payment/Payment_type';
import Address from './Pages/Address/Address';
import DebitCard from './Pages/Debit_Card/DebitCard';
import ForgotPassword from './Pages/Forgot_Password/ForgotPassword';
import OtpVerification from './Pages/Forgot_Password/OTP_Verification/OtpVerification';
import NewPassword from './Pages/Forgot_Password/New_Password/NewPassword';
import ChangePassword from './Pages/Forgot_Password/Change_Password/ChangePassword';
import QRpayment from './Pages/QR_Payment/QRpayment';
import UPIpayment from './Pages/UPI_Payment/UPIpayment';
import PaymentSuccessful from './Pages/Payment_Successful/PaymentSuccessful';
import EditAddress from './Pages/Address/EditAddress';
import Search_list from './Components/Navbarf2/Search_list';
import Single_view from './Pages/Single_Product/Single_view';
import Edit_Product from './Pages/Admin/View_Product_admin/Edit_Product';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/navf' element={<Navbar />} />
            <Route path='/navf2' element={<Navbarf2 />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/adminviewproduct' element={<Admin_ViewProduct />} />
            <Route path='/userdetails' element={<User_Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/paymenttype' element={<Payment_type />} />
            <Route path='/address' element={<Address />} />
            <Route path='/debitcard' element={<DebitCard />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/otpverification' element={<OtpVerification />} />
            <Route path='/newpassword' element={<NewPassword />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/qrpayment' element={<QRpayment />} />
            <Route path='/upipayment' element={<UPIpayment />} />
            <Route path='/paymentsuccessful/:id' element={<PaymentSuccessful />} />
            <Route path='/editaddress' element={<EditAddress />} />
            <Route path='/search_list' element={<Search_list />} />
            <Route path='/single_view/:id' element={<Single_view />} />
            <Route path='/edit_product/:id' element={<Edit_Product/>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
