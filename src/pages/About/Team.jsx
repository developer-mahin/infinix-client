import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import { Pagination } from "swiper/modules";

const Team = () => {
  const fakeData = [
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      name: "Lorem, ipsum dolor.",
      location: "Lorem, ipsum.",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum! tur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      name: "Lorem, ipsum dolor.",
      location: "Lorem, ipsum.",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum! tur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      name: "Lorem, ipsum dolor.",
      location: "Lorem, ipsum.",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum! tur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      name: "Lorem, ipsum dolor.",
      location: "Lorem, ipsum.",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum! tur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      name: "Lorem, ipsum dolor.",
      location: "Lorem, ipsum.",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum! tur adipisicing elit. Soluta excepturi magnam officia dolore, sunt cum!",
    },
  ];

  return (
    <div className="md:my-20 my-10">
      <div className="container mx-auto px-4">
        <div>
          <SectionTitle
            title="Meet Our Team"
            text="Lorem ipsum dolor sit amet."
          />
        </div>
      </div>

      <div className="py-10 mt-10 lg:px-20 px-4">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div className="">
            {fakeData.map((data, i) => (
              <SwiperSlide key={i}>
                <div className="shadow-md rounded border py-10 px-3">
                  <div>
                    <div className="flex items-center justify-center">
                      <img
                        src={data.img}
                        className="w-[150px] h-[150px] rounded-full border-4 border-red-600 p-[2px]"
                        alt=""
                      />
                    </div>
                    <div className="mt-3">
                      <h2 className="text-xl text-center font-bold text-gray-700 ">
                        {data.name}
                      </h2>
                      <h3 className="lg:text-lg text-center text-base font-medium text-gray-600">
                        {data.location}
                      </h3>
                      <p className="mt-3 text-center">{data.des}</p>

                      <div className="flex items-center justify-center mt-6">
                        <button className="text-lg font-medium text-red-500 border-2 border-red-500 px-10 py-2.5 drop-shadow-xl rounded-md">
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
