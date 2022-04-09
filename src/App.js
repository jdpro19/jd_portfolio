import Navbar from './components/header/Navbar'
import './App.css';
import FirstSection from './components/body/FirstSection';
import AboutSection from './components/body/AboutSection';
import ProjectSection from './components/body/ProjectSection';
import FooterSection from './components/footer/FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection/>
      <AboutSection/>
      <ProjectSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
