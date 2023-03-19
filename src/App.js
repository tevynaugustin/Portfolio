import './App.css';
import Landing from './pages/landing/landing';
import Video from './components/video/video';
import About from './pages/aboutme/aboutme';
import Experience from './pages/experience/experience';
import Projects from './pages/projects/projects';

function App() {
  return (
    <div className="App">
      <Video/>
      <Landing/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
