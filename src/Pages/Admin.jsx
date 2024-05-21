import React, { useState } from 'react';
import Allorders from '../Components/Admin/Allorders'; 
import Adminlogin from '../Components/Admin/Adminlogin';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <Allorders />
        ) : (
          <Adminlogin onLogin={handleLogin} />
        )}
      </div>
    );
  };
  
  export default Admin;