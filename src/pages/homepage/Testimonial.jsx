import avatar1 from "../../assets/about-1.png";
import avatar2 from "../../assets/about-2.png";
import avatar3 from "../../assets/about-3.png";
import quoteIcon from "../../assets/quate_icon.png";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      position: "Software Engineer",
      avatar: avatar1,
      testimonial:
        "Top-notch real estate service, always available with expert guidance, highly professional and knowledgeable about local needs.",
    },
    {
      id: 2,
      name: "Daniel Martinez",
      position: "Product Designer",
      avatar: avatar2,
      testimonial:
        "Dedicated real estate experts, always ready to help. Their support was invaluable throughout the entire buying process.",
    },
    {
      id: 3,
      name: "Michael Smith",
      position: "Medical Officer",
      avatar: avatar3,
      testimonial:
        "Fantastic real estate experience. The team was professional, responsive, and genuinely cared about finding the right home.",
    },
  ];
  return (
    <section className="py-28 bg-orange-50">
      <div className="max-w-screen-2xl container flex flex-col items-center lg:mx-5 ">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Clients speak
              <span className="text-brand"> Volumes </span>
              about us
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="sm:w-[580px] max-sm:w-[350px]">
                <p className="mt-4 text-[16px] max-sm:text-xs text-center tracking-tight">
                  Listen to the stories of our satisfied clients, sharing their
                  experiences and successes with our exceptional real estate
                  services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="grid lg:grid-cols-3 grid-cols-1 gap-10
          "
          >
            {testimonials.map((testi) => {
              return (
                <div className="w-[322px] bg-white h-auto p-8 flex flex-col gap-5">
                  <div>
                    <img src={testi.avatar} alt="avatar" className="w-14" />
                  </div>
                  <div className="text-justify">
                    <p className="text-gray-500 text-balance text-[12px]">
                      {testi.testimonial}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[16px] font-semibold">{testi.name}</p>
                      <p className="text-[12px] text-gray-700">
                        {testi.position}
                      </p>
                    </div>
                    <div>
                      <img src={quoteIcon} alt="quote" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
