import { SideBar, Footer } from "../components/index";

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;