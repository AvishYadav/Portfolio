import React from 'react'
import Landing from './Landing'
import AboutMe from './AboutMe'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Landing />
      <AboutMe />
    </div>
  )
}

export default Home
