const WorkFlow = () => {
  return (
    <div className="md:my-20 my-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex items-center justify-center">
            <div>
              <h2 className="lg:text-6xl text-3xl font-bold text-gray-600 mb-5">
                Provide your best <br />
                Best Service
              </h2>
              <p className="lg:mb-10 mb-7 lg:text-lg text-base font-medium text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                sunt aliquid mollitia nesciunt aut repudiandae laudantium eaque
                temporibus fugit nihil!
              </p>
              <button className="inline-flex items-center justify-center h-12 px-10 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none drop-shadow-xl">
                Contact us
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/491/053/original/children-learn-on-computers-concept-for-web-banner-boy-and-girl-watching-video-lessons-doing-homework-online-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
