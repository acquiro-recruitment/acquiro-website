import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Process from "../sections/process"
import Hero from "../components/hero-video"
import Testimonial from "../sections/testimonial"
import Partners from "../sections/partners"
import Featured from "../sections/featured"

const Home = () => (
  <Layout isHomePage>
    <Seo title="Acquiro Recruitment" />
    <Process />
    <Featured />
    <Testimonial />
    <Partners />
  </Layout>
)

export default Home
