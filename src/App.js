import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Service from "./components/Service/service";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
function App () {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
