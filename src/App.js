import logo from './logo.svg';
import './App.css';
import CardArea from './components/CardArea';
import MainHeadingArea from './components/MainHeadingArea';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <div className="section_1">
        <MainHeadingArea/>
      </div>
     
    </div>
  );
}

export default App;