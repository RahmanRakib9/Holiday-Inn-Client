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
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

const App = () => {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/book/:RoomType' element={<PrivateRoute><Booking /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
};

export default App;
