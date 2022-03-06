import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Process from "../sections/process"
import Hero from "../sections/hero"
import Testimonial from "../sections/testimonial"
import Partners from "../sections/partners"
import Featured from "../sections/featured"

const Home = () => {
  return (
    <Layout isHomePage>
      {/* <Seo title="All posts" /> */}

      <Hero />
      <Process />
      <Featured />
      <Testimonial />
      <Partners />
    </Layout>
  )
}

export default Home
