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
    <div className="mb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Workflow"
          text="Lorem ipsum dolor sit amet consectetur adipisicing"
        />

        <div className="grid grid-cols-3 gap-10 justify-items-center mt-14">
          {fakeData.map((data, i) => (
            <div key={i}>
              <div className="flex items-center gap-10">
                <div
                  className={`w-[70px] h-[70px] rounded-full ${data.color} flex items-center justify-center text-center`}
                >
                  <h1 className="text-2xl font-semibold text-white">
                    0{data.count}
                  </h1>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-600">
                    {data.title}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium lg:w-[300px]">
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
