import Header from './components/Header/Header';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Links from './components/Links/Links';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import SkillsCard from './components/SkillsCard/SkillsCard';

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
        <SkillsCard
          title='Technical'
          pillTypes={[
            { type: 'beginner', children: 'HTML' },
            { type: 'beginner', children: 'CSS/SCSS' },
            { type: 'intermediate', children: 'JAVASCRIPT' },
            { type: 'intermediate', children: 'REACT.JS' },
          ]}
        />
        <SkillsCard
          title='Personal'
          pillTypes={[
            { type: 'beginner', children: 'TEAMWORK' },
            { type: 'intermediate', children: 'COMMUNICATION' },
            { type: 'advanced', children: 'ORGANIZATION' },
          ]}
        />
      </div>
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
