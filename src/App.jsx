import Navbar from './components/Navbar';
import Welcome from './components/Welcome'
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';

function App() {

  return (
    <div className='bg-[url("https://i.ibb.co/0nkXPzr/bgIMG.png")] bg-cover bg-repeat bg-center'>
      <Navbar />
      <Welcome />
      <Header/>
      <About/>
      <Work/>
      <Skills/>
    </div>
  )
}


export default App
