import Profile from "../components/Profile"
import Separator from "../components/Separator"
import About from "../components/About"
import PersonalInfo from "../components/PersonalInfo"
import BlogContainer from "../components/BlogContainer"
import Footer from "../components/Footer"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Profile />
      <Separator />
      <PersonalInfo />
      <Separator />
      <About />
      <Separator />
      <BlogContainer maxBlogs={4} />
      <Separator />
      <Footer />
    </div>
  )
}

export default Portfolio