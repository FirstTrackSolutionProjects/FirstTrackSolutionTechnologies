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

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/joinus" element={<JoinUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<BlogsPage/>}></Route>
        <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
      </Routes>
      
      <Footer/>
      <WhatsAppChatPopup/>
    </div>
  )
}

export default App
