import Navbar from './components/Navbar';
import Welcome from './components/Welcome'
import Header from './components/Header';
import About from './components/About';

function App() {

  return (
    <div className='bg-[#edf2f8]'>
      <Navbar />
      {/* <Welcome /> */}
      <Header/>
      <About/>
    </div>
  )
}


export default App
