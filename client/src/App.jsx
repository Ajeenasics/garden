import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import AboutPage from './pages/landing/AboutPage'
import ContactPage from './pages/landing/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import GardnerLandingpage from './pages/gardner/GardnerLandingpage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import GardenerProfileView from './pages/gardner/GardenerProfileView'
import GardnerEditProfile from './pages/gardner/GardnerEditProfile'
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/gardner" element={<GardnerLandingpage/>}/>
      <Route path="/gardnerprofileview" element={<GardenerProfileView/>}/>
      <Route path="/gardnereditprofile" element={<GardnerEditProfile/>}/>

    </Routes>
  )
}

export default App