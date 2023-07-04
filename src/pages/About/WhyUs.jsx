const WhyUs = () => {
  return (
    <div className="container mx-auto px-4 md:my-20 my-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next{" "}
              <span className="inline-block text-deep-purple-accent-400">
                destination
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium oloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.d accusantium oloremque laudantium, totam rem
              aperiam, eaque ipsa quae. explicabo.d
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="px-3">
            <div className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 p-10">
              <div>
                <div className="bg-gradient-to-r from-[#A898D8] to-[#6B53EF]  py-14 px-10 rounded-2xl ">
                  <h1 className="text-5xl font-bold text-center text-white">
                    320
                  </h1>
                </div>
                <h4 className="lg:text-2xl text-xl font-semibold text-gray-600 text-center mt-3">
                  Lorem, ipsum dolor.
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end px-3">
            <div className="object-cover mb-6 rounded shadow-lg h-48 xl:h-[300px]  w-48 xl:w-[300px] p-10">
              <div>
                <div className="bg-gradient-to-r from-[#E3A4AD] to-[#FF6BA8]  py-14 px-10 rounded-2xl ">
                  <h1 className="text-5xl font-bold text-center text-white">
                    320
                  </h1>
                </div>
                <h4 className="lg:text-2xl text-xl font-semibold text-gray-600 text-center mt-3">
                  Lorem, ipsum dolor.
                </h4>
              </div>
            </div>
            <div className="object-cover mb-6 rounded shadow-lg h-48 xl:h-[300px]  w-48 xl:w-[300px] p-10">
              <div>
                <div className="bg-gradient-to-r from-[#E9CDB9] to-[#F5915C]  py-14 px-10 rounded-2xl ">
                  <h1 className="text-5xl font-bold text-center text-white">
                    320
                  </h1>
                </div>
                <h4 className="lg:text-2xl text-xl font-semibold text-gray-600 text-center mt-3">
                  Lorem, ipsum dolor.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
