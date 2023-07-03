const GetInTouch = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-40 items-center">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/491/053/original/children-learn-on-computers-concept-for-web-banner-boy-and-girl-watching-video-lessons-doing-homework-online-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg"
              alt=""
            />
          </div>

          <form>
            <h2 className="text-4xl font-bold text-center text-gray-600 mb-10">
              Get In Touch
            </h2>
            <div className="flex items-center gap-10 my-4">
              <input
                type="text"
                placeholder="First Name"
                name=""
                required
                className="px-4 py-3 border focus:outline-none rounded-md w-full bg-gray-50"
              />
              <input
                type="text"
                placeholder="Last Name"
                name=""
                required
                className="px-4 py-3 border focus:outline-none rounded-md w-full bg-gray-50"
              />
            </div>

            <div className="flex items-center gap-10  my-4">
              <input
                type="number"
                placeholder="Phone"
                name=""
                required
                className="px-4 py-3 border focus:outline-none rounded-md w-full bg-gray-50"
              />
              <input
                type="email"
                placeholder=" Email"
                name=""
                required
                className="px-4 py-3 border focus:outline-none rounded-md w-full bg-gray-50"
              />
            </div>

            <div className=" my-4">
              <textarea
                name=""
                id=""
                className="px-4 py-3 border focus:outline-none rounded-md w-full bg-gray-50"
              ></textarea>
            </div>

            <button
              className="inline-flex items-center justify-center h-12 px-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
