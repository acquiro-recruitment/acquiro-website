import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Modal from "../components/modal"
import Process from "../sections/process"
import Interim from "../sections/interim"
import Testimonial from "../sections/testimonial"
import Partners from "../sections/partners"
import Featured from "../sections/featured"

const Home = () => (
  <Layout isHomePage>
    <Seo title="Acquiro Recruitment" />
    <Modal />
    <Process />
    <Interim />
    <Featured />
    <Testimonial />
    <Partners />
  </Layout>
)

export default Home
