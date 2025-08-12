import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="bg-[#fef8f5] sm:py-36 py-12 px-12 w-full mx-auto" id="home">
        <img src={bannerImg} alt="banner image" className="h-full mx-auto" />
    </div>
  )
}
export default Banner