import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Success = () => {
  return (
    <div className="container mx-auto px-4 md:my-20 my-10">
      <SectionTitle
        title="Our Success"
        text="Lorem ipsum dolor sit amet."
        color="text-gray-600"
      />
      <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-[300px] gap-[30px] mt-14">
        <div>
          <div className="bg-gradient-to-r from-[#A898D8] to-[#6B53EF]  py-14 px-10 rounded-2xl ">
            <h1 className="text-5xl font-bold text-center text-white">320</h1>
          </div>
          <h4 className="lg:text-2xl text-xl font-semibold text-gray-600 text-center mt-3">
            Lorem, ipsum dolor.
          </h4>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#E3A4AD] to-[#FF6BA8]  py-14 px-10 rounded-2xl ">
            <h1 className="text-5xl font-bold text-center text-white">320</h1>
          </div>
          <h4 className="lg:text-2xl text-xl font-semibold text-gray-600 text-center mt-3">
            Lorem, ipsum dolor.
          </h4>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#E9CDB9] to-[#F5915C]  py-14 px-10 rounded-2xl ">
            <h1 className="text-5xl font-bold text-center text-white">320</h1>
          </div>
          <h4 className="lg:text-2xl text-xl font-semibold text-gray-600 text-center mt-3">
            Lorem, ipsum dolor.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Success;
