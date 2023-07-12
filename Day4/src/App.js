import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Registration from './Components/BasicReg';
import Login from './Components/Login';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import FindJobs from './Components/FindJobs';
import Applications from './Components/Applications';
import Notifications from './Components/Notifications';
import BasicReg from './Components/BasicReg';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Basic" element={<BasicReg/>}/>
        <Route path="/registration" element={<BasicReg/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/findjobs" element={<FindJobs/>}/>
        <Route path="/myApplications" element={<Applications/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
