import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// // import Signup from './Signup';
// import Dashboard from './DashBoard1';
// import Signup from './Signup';

import Dashboard1 from './Dashboards/DashBoard1';
import Dashboard2 from './Dashboards/DashBoard2';
import Final from './Finalpages/final1';
import Landing from './Signup/Landing';
import Signin from './Signup/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import InputCompo from './Components/InputCompo';
import MainSignup from './Signup/MainSignup';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Sidebar/> */}
    <BrowserRouter>
    <Routes>
      <Route index element = {<MainSignup/>}/>
      <Route path='/Dashboard1' element={<Dashboard1/>}/>
      <Route path='/dashboard2' element={<Dashboard2/>}/>
      <Route path='/final1' element={<Final/>}/>
      
    </Routes>
    </BrowserRouter>
    {/* <Landing/> */}
    {/* <InputCompo/> */}

    {/* <ChatboxCompo/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
