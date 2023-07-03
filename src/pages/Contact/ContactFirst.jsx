const ContactFirst = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div>
              <h2 className="text-6xl font-bold text-gray-600 mb-5">
                Provide your best <br />
                Best Service
              </h2>
              <p className="mb-10 text-lg font-medium text-gray-600">
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

export default ContactFirst;
