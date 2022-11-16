import Header from './components/Header/Header';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Links from './components/Links/Links';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import Footer from './components/Footer/Footer';
import Technical from './components/Technical/Technical';
import Personal from './components/Personal/Personal';
import Education from './components/Education/Education';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='section-wrapper'>
        {/* <Links /> */}
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
