import Course from '@/components/Course/course'
import Rate from '@/components/RateUs/rate'
import Contact from '@/components/contact/contact'
import Header from '@/components/header'
import Hero from '@/components/hero/hero'
import Mission from '@/components/mission/mission'
import Video from '@/components/playVideo/video'
import Trained from '@/components/trained/trained'
import React from 'react'

const index = () => {
  return <>
    <Hero/>
    <Mission/>
    <Rate/>
    <Trained/>
    <Video/>
    <Course/>
    <Contact/>
  </>
}

export default index