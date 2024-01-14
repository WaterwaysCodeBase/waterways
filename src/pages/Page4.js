import React from 'react'
import Session from '../components/session/Session'
import Spot from '../components/spot/Spot'
import Testimonial from '../components/testimonial/Testimonial'
import Project2 from '../components/project2/Project2'
import BNewsletter from '../components/bNewsletter/BNewsletter'
import Footer from '../components/footer/Footer'
import Form from '../components/form/Form'
import GeneralPageLayout from '../components/layout/GeneralPageLayout'

const Page4 = () => {
  return (
    <>
      <GeneralPageLayout>
          <Session />
          <Form />
          <Spot />
          <Project2 />
      </GeneralPageLayout>
    </>
  )
}

export default Page4