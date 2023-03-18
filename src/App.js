import './App.css';
import Landing from './pages/landing/landing';
import Video from './components/video/video';
import About from './pages/aboutme/aboutme';

function App() {
  return (
    <div className="App">
      <Video/>
      <Landing/>
      <About/>
    </div>
  );
}

export default App;
