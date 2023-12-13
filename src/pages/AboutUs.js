import React from 'react'
import Game from '../components/game/Game'
import Team from '../components/team/Team'
import Blog from '../components/blog/Blog'
import Development from '../components/development/Development'
import Footer from '../components/footer/Footer'
import BNewsletter from '../components/bNewsletter/BNewsletter'
import GeneralPageLayout from '../components/layout/GeneralPageLayout'

const AboutUs = () => {
  return (
    <GeneralPageLayout>
      <>
        <Game />
        <Team />
        <Blog />
        <Development />
       
      </>
    </GeneralPageLayout>
  )
}

export default AboutUs