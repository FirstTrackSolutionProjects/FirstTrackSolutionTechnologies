import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import Career from './Pages/Career'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import BlogsPage from './Pages/BlogPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import WhatsAppChatPopup from './Components/WhatsAppChatPopup'
import Infotech from './Pages/Infotech'
import Finance from './Pages/Finance'
import Training from './Pages/Training'
import Recruitment from './Pages/Recruitment'
import TermsOfUse from './Pages/TermsOfUse'
import Ecom from './Pages/Ecom'
import Openings from './Pages/Openings'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import PasswordProtectedPage from './Components/PasswordProtectedPage'
import ForgotPasword from './Pages/ForgotPassword'


function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/joinus" element={<PasswordProtectedPage/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<BlogsPage/>}></Route>
        <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
        <Route path="/info" element={<Infotech/>}></Route>
        <Route path="/finance" element={< Finance/>}></Route>
        <Route path="/training" element={<Training/>}></Route>
        <Route path="/recruit" element={<Recruitment/>}></Route>
        <Route path="/terms" element={<TermsOfUse/>}></Route>
        <Route path="/ecom" element={<Ecom/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/openings" element={<Openings/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPasword/>}></Route>
      </Routes>
      
      <Footer/>
      <WhatsAppChatPopup phoneNumber={9040170727} message={'Hello! I would like to chat.'}/>
    </div>
  )
}

export default App
