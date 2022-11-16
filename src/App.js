import Header from './components/Header';
import './App.css';
import AboutMe from './components/AboutMe';
import Links from './components/Links';
import { WorkExperience } from './components/WorkExperience';
import Footer from './components/Footer';
import Technical from './components/Technical';
import Personal from './components/Personal';
import Education from './components/Education';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='section-wrapper'>
        <Links />
        <AboutMe />
      </div>
      <div className='section-wrapper-second'>
        <Education />
        <Personal />
        <Technical />
      </div>
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
