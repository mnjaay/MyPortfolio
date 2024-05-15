import React from 'react'
import Header from '../components/header';
import HeroSection from '../components/heroSection';
import About from '../components/about';
import Skills from '../components/skills';

function Home() {
  return (
    <div>
       <Header/>
       <HeroSection/>
       <About/>
       <Skills/>

    </div>
  )
}

export default Home;