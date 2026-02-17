import Profile from "../components/Profile"
import Separator from "../components/Separator"
import About from "../components/About"
import PersonalInfo from "../components/PersonalInfo"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Profile />
      <Separator />
      <PersonalInfo />
      <Separator />
      <About />
    </div>
  )
}

export default Portfolio