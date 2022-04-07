import Navbar from './components/header/Navbar'
import './App.css';
import FirstSection from './components/body/FirstSection';
import AboutSection from './components/body/AboutSection';
import ProjectSection from './components/body/ProjectSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection/>
      <AboutSection/>
      <ProjectSection/>
    </div>
  );
}

export default App;
