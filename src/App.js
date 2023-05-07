import './App.css';
import Landing from './pages/landing/landing';
import Video from './components/video/video';
import About from './pages/aboutme/aboutme';
import Experience from './pages/experience/experience';
import Projects from './pages/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Video/>
      <Landing/>
      <Contact/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
