
import Banner from "./Banner"
import EstateService from "./EstateService"
import LogoList from "./LogoList"
import NewBlog from "./NewBlog"
import RealEstateSection from "./RealEstateSection"
import Testimonial from "./Testimonial"
import UniqueHome from "./UniqueHome"

const Home = () => {
  return (
    <div>
        <Banner/>
        <RealEstateSection/>
        <LogoList/>
        <EstateService/>
        <UniqueHome/>
        <Testimonial/>
        <NewBlog/>

    </div>
  )
}
export default Home