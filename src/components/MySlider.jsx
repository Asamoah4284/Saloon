import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import SwiperCore from "swiper";

// Initialize Swiper plugins
// SwiperCore.use([Autoplay, Pagination]);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "MERAJ",
      role: "Senior Hair Director",
      experience: 10,
      img: "/images/team-1.jpg",
    },
    {
      name: "ABHISHEK",
      role: "Senior Hair Stylist",
      experience: 9,
      img: "/images/team-3.jpg",
    },
    {
      name: "MANOJ",
      role: "Senior Hair Stylist",
      experience: 7,
      img: "/images/team-4.jpg",
    },
    {
      name: "DHANRAJ",
      role: "Hair Stylist",
      experience: 3,
      img: "/images/team-5.jpg",
    },

    // Add other team members as objects in this array...
  ];

  return (
    <section
      className="vs-team-wrapper vs-team-layout1 space-md-bottom"
      id="team"
    >
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-md-11 col-lg-8 col-xl-6">
            <div className="section-title">
              <h2 className="sec-title-style1">
                Meet With{" "}
                <span className="sec-subtitle-style1">
                  Our
                  <br />
                  Team
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{ delay: 3000 }}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="vs-team">
                <div className="vs-team-img image-scale-hover">
                  <img
                    src={member.img}
                    alt={`${member.name} Image`}
                    className="w-100"
                  />
                </div>
                <div className="vs-team-content">
                  <h3 className="h5 vs-team-name mb-0">{member.name}</h3>
                  <span className="vs-team-degi">{member.role}</span>
                  <p className="mb-1">Year of Experience {member.experience}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
