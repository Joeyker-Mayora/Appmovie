import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Login from "./Pages/Login";
import AuthLoyout from "./Components/AuthLoyout";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Registrer from "./Pages/Registrer";
import ForgetPassword from "./Pages/ForgetPassword";
import ChangePassword from "./Pages/ChangePassword";
import Error from "./Pages/Error";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<AuthLoyout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Registrer />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="forgetpassword/registrer" element={<Registrer />} />
          <Route path="forgetpassword/changepassword/:token" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
