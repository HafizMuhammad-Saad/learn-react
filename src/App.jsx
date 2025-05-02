import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Users from './pages/user';
import PracticeCode from './pages/practiceCode';
import Profile from './pages/profile';
// import Settings from './pages/Settings';
import './App.css';

function App() {
 
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/practice' element={<PracticeCode />} />
            {/* <Route path='/settings' element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
    )
}

export default App
