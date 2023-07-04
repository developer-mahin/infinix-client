import SectionTitle from "../../components/SectionTitle/SectionTitle";

const OurWorkFlow = () => {
  const fakeData = [
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#3C38F5]",
      count: "1",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#9895E3]",
      count: "2",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#FBB636]",
      count: "3",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#E86C72]",
      count: "4",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#626392]",
      count: "5",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#F37835]",
      count: "6",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#3CFAC7]",
      count: "7",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#F036EA]",
      count: "8",
    },
    {
      title: "Lorem, ipsum dolor.",
      des: "Lorem ipsum, dolor sit amet consectetur ",
      color: "bg-[#EC3F37]",
      count: "9",
    },
  ];

  return (
    <div className="md:mb-20 mb-5">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Workflow"
          text="Lorem ipsum dolor sit amet consectetur adipisicing"
          color="text-gray-600"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-3 gap-10 justify-items-center mt-14">
          {fakeData.map((data, i) => (
            <div key={i}>
              <div className="flex items-center lg:gap-10 gap-5">
                <div
                  className={`lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] rounded-full ${data.color} flex items-center justify-center text-center`}
                >
                  <h1 className="text-2xl font-semibold text-white">
                    0{data.count}
                  </h1>
                </div>
                <div>
                  <h2 className="lg:text-2xl text-xl font-bold text-gray-600">
                    {data.title}
                  </h2>
                  <p className="lg:text-lg text-base text-gray-600 font-medium lg:w-[300px]">
                    {data.des}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkFlow;
