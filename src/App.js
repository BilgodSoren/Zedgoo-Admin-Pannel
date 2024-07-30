import logo from './logo.svg';
import './App.css';
import Profile from './Views/Profile';
import SuperAdminSignIn from './Views/SuperAdminSignIn';
import SuperAdminSignUp from './Views/SuperAdminSignUp';
import Dashboard from './Views/Dashboard';
import DashboardTopBtns from './Views/Dashboard';

// import Dashboard from './Views/Dashboard';

function App() {
  return (
    <div className="App">
       {/* <Profile /> 
       <SuperAdminSignUp /> */}
      <SuperAdminSignIn/>
      {/* <DashboardTopBtns/> */}
    
    
     
      
    </div>
  );
}

export default App;
