import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import CheckOut from './Pages/Booking/CheckOut/CheckOut/CheckOut'
import Billing from './Pages/Booking/CheckOut/Billing/Billing';

const App = () => {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/book/:id' element={<Booking />} />
          <Route path='/book/:id/checkout' element={<PrivateRoute>{<CheckOut />}</PrivateRoute>} />
          <Route path='/book/:id/checkout/billing' element={<PrivateRoute>{<Billing />}</PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/shipment/:id' element={<PrivateRoute>{<Shipment />}</PrivateRoute>} /> */}
          {/* <Route path='/shipment/:id/billing' element={<PrivateRoute>{<Billing />}</PrivateRoute>} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </BrowserRouter>

  );
};

export default App;
