import React from 'react'
import Header from '../components/header';
import HeroSection from '../components/heroSection';
import About from '../components/about';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Projects from '../components/Projects';

function Home() {
  return (
    <div>
       <Header/>
       <HeroSection/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>

    </div>
  )
}

export default Home;