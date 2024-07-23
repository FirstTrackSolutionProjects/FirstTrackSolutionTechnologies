import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import Career from './Pages/Career'
import Services from './Pages/Services'
import JoinUs from './Pages/JoinUs'
import Contact from './Pages/Contact'
import About from './Pages/About'
import BlogsPage from './Pages/BlogPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import WhatsAppChatPopup from './Components/WhatsAppChatPopup'
import Infotech from './Pages/Infotech'
import Finance from './Pages/Finance'
import Training from './Pages/Training'
import Recruitment from './Pages/Recruitment'
import Header2 from './Components/Header2'


function App() {

  return (
    <div>
      <Header2/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/joinus" element={<JoinUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<BlogsPage/>}></Route>
        <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
        <Route path="/info" element={<Infotech/>}></Route>
        <Route path="/finance" element={< Finance/>}></Route>
        <Route path="/training" element={<Training/>}></Route>
        <Route path="/recruit" element={<Recruitment/>}></Route>
      </Routes>
      
      <Footer/>
      <WhatsAppChatPopup/>
    </div>
  )
}

export default App
