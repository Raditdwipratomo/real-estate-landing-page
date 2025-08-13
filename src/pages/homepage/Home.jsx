
import Banner from "./Banner"
import EstateService from "./EstateService"
import LogoList from "./LogoList"
import NewBlog from "./NewBlog"
import RealEstateSection from "./RealEstateSection"
import Testimonial from "./Testimonial"
import UniqueHome from "./UniqueHome"

const Home = () => {
  return (
    <div className="w-[100vh]">
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
