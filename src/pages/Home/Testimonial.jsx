import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const testimonialInfo = [
    {
      id: 1,
      name: "Mahin Khan",
      postion: "Lorem ipsum dolor sit.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
    {
      id: 2,
      name: "Mahin Khan",
      postion: "Lorem ipsum dolor sit.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
    {
      id: 3,
      name: "Mahin Khan",
      postion: "Lorem ipsum dolor sit.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
    {
      id: 4,
      name: "Mahin Khan",
      postion: "Lorem ipsum dolor sit.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
    {
      id: 5,
      name: "Mahin Khan",
      postion: "Lorem ipsum dolor sit.",
      img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
      review:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra.",
    },
  ];

  return (
    <div className="my-20 bg-[#0C0F32] py-20">
      <div className="container mx-auto ">
        <div>
          <div className="px-4">
            <SectionTitle
              title="What they say about us!"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, laboriosam."
              color="text-white"
            />
          </div>

          <div className="py-10 lg:mt-10 mt-0">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <>
                {testimonialInfo.map((info) => (
                  <SwiperSlide key={info.id}>
                    <div className="lg:px-44 px-10">
                      <div>
                        <div className="">
                          <p className="lg:text-base text-white text-sm text-center">
                            {info.review}
                          </p>
                        </div>
                        <div className="text-center py-6">
                          <div className="flex items-center justify-center mb-3">
                            <img
                              src={info.img}
                              className="w-40 h-40 rounded-full object-cover"
                              alt=""
                            />
                          </div>

                          <h3 className="text-white font-semibold text-xl">
                            {info.name}
                          </h3>
                          <h3 className="text-white font-semibold text-xl">
                            {info.postion}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
