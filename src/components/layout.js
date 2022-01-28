import Header from "./header"
import Footer from "./footer"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
