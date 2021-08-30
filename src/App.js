// import logo from './logo.svg';
import './App.css';
import CardArea from './components/CardArea';
import Experience from './components/Experience';
import Talks from './components/Talks';
import Skills from './components/Skills';
import MainHeadingArea from './components/MainHeadingArea';
import AssistantArea from './components/AssistantArea';
import CustomNavbar from './components/CustomNavbar';
import MockArea from './components/MockArea';
import KeyFeatures from './components/KeyFeatures';
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, fas)

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <CardArea/>
      <Experience/>
      <Skills/>
      <Talks/>
      
      {/* <div className="section_1">
        <MainHeadingArea/>
      </div>
      <div className="section_2">
      <CardArea/>
      <AssistantArea/>
      </div>
       <MockArea/>
      <KeyFeatures/>}
      <Footer/> */}
      
    </div>
  );
}

export default App;