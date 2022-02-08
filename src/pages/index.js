import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../sections/hero"
import Hero2 from "../sections/hero2"
import Process from "../sections/process"
import Testimonial from "../sections/testimonial"
import Partners from "../sections/partners"
import Featured from "../sections/featured"

const Home = () => {
  return (
    <Layout isHomePage>
      {/* <Seo title="All posts" /> */}

      <Hero2 />
      <Process />
      <Testimonial />
      <Partners />
      <Featured />
    </Layout>
  )
}

export default Home
