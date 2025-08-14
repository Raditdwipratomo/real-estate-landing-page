import { IoMdArrowRoundUp } from "react-icons/io";
import blog1 from "../../assets/blogs/blog-1.png";
import blog2 from "../../assets/blogs/blog-2.png";
import blog3 from "../../assets/blogs/blog-3.png";
import Rectangle from "../../components/Header/Rectangle";

const NewBlog = () => {
  const allBlog = [
    {
      img: blog1,
      title: "Essential tips for first-time homme buyers: your complete guide",
      date: "Aug 05, 2024",
    },
    {
      img: blog2,
      title: "Navigating the rental market: tips for renters and landlords",
      date: "Aug 06, 2025",
    },
    {
      img: blog3,
      title: "Choosing the best neighborhood for yout family: expert guide",
      date: "Aug 07, 2025",
    },
  ];

  return (
    <div id="blog">
      <div className="pb-48">
        <div className="max-w-screen-2xl flex flex-col items-center justify-center px-10 py-20 container">
          <div className="text-center mb-16 mt-10">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our newest updates and
              <span className="text-brand"> Insights</span>
            </h2>
            <div className="max-w-xl mx-auto">
              <p className="mt-4 leading-tight">
                Stay up-to-date with our latest news and blog posts, offering
                valuable insights and updates on industry trends and expert
                tips.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80%]">
            {allBlog.map((blog) => {
              return (
                <div
                  className={
                    blog.id === 2
                      ? "relative overflow-hidden lg:mt-14"
                      : blog.id === 5
                      ? "relative overflow-hidden lg:mt-14"
                      : "relative overflow-hidden"
                  }
                >
                  <img
                    src={blog.img}
                    alt="blog"
                    className="w-full object-cover transition-all duration-200 hover:scale-105 ease mb-3"
                  />
                  <div className="flex flex-col gap-2 justify-between">
                    <p className="font-bold cursor-pointer hover:text-[#ff5b28]">
                      {blog.title}
                    </p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-[100vw] flex justify-center items-center text-center">
            <button className="text-[#0f0e0e] hover:text-[#ff5b28] px-6 py-3 border-2 transition-transform transform hover:scale-105 border-[#ff5b28] flex gap-3 mt-16 items-center text-sm lg:text-balance">
              View All Properties
              <IoMdArrowRoundUp className="scale-125 rotate-[45deg]" />
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Rectangle classname="lg:absolute lg:-translate-y-32 lg:translate-x-20 relative"/>
=======
      <Rectangle classname="absolute -translate-y-32 translate-x-20 sm:w-[300px] bg-black"/>
>>>>>>> fc7c691d96e2d77ccee5323897d49074fea4cc23
    </div>
  );
};
export default NewBlog;
