import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

const Blog = () => {
  const fakeData = [
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem maiores eius atque velit obcaecati voluptatem officiis nobis quibusdam possimus!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem maiores eius atque velit obcaecati voluptatem officiis nobis quibusdam possimus!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem maiores eius atque velit obcaecati voluptatem officiis nobis quibusdam possimus!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem maiores eius atque velit obcaecati voluptatem officiis nobis quibusdam possimus!",
    },
    {
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem maiores eius atque velit obcaecati voluptatem officiis nobis quibusdam possimus!",
    },
  ];

  return (
    <div className="md:my-20 my-10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Blog"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, recusandae. Est repellat quos recusandae atque?"
          color="text-gray-600"
        />

        <div className="py-10 mt-10">
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
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="grid grid-cols-3 gap-6 mt-10">
              {fakeData.map((data, i) => (
                <SwiperSlide key={i}>
                  <div className="shadow-md rounded border">
                    <div>
                      <div>
                        <img src={data.img} alt="" />
                      </div>
                      <div className="px-5 py-8 mt-3">
                        <h2 className="text-2xl mb-3 font-bold text-gray-700 ">
                          {data.title}
                        </h2>
                        <p className="lg:text-lg text-base font-medium text-gray-600">
                          {data.des}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
