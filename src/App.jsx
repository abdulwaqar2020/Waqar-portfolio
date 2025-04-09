import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Education from './Pages/Education/Education'
import Skills from './Pages/Skills/Skills'
import WorkExperience from './Pages/WorkExperience/WorkExperience'
import ContactMe from './Pages/Contact/ContactMe'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import PrivateRoute from './PrivateRoute' // Import PrivateRoute

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes - Only visible if the user is logged in */}
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/education" element={<PrivateRoute><Education /></PrivateRoute>} />
        <Route path="/skills" element={<PrivateRoute><Skills /></PrivateRoute>} />
        <Route path="/workexperience" element={<PrivateRoute><WorkExperience /></PrivateRoute>}  />
        <Route path="/contactus" element={<PrivateRoute><ContactMe /></PrivateRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
