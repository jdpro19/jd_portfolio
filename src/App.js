import Navbar from './components/header/Navbar'
import './App.css';
import FirstSection from './components/body/FirstSection';
import AboutSection from './components/body/AboutSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection/>
      <AboutSection/>
    </div>
  );
}

export default App;
