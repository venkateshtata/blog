import logo from './logo.svg';
import './App.css';
import CardArea from './components/CardArea';
import MainHeadingArea from './components/MainHeadingArea';

function App() {
  return (
    <div className="App">
      <div className="section_1">
        <MainHeadingArea/>
      </div>
      <CardArea/>
    </div>
  );
}

export default App;