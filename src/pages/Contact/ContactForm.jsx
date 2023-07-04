const ContactForm = () => {
  return (
    <div className="md:py-20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-40 gap-10 items-center">
          <form>
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

            <div className=" my-4">
              <input
                type="text"
                placeholder="Company Name"
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
          <div>
            <h2 className="text-4xl font-bold text-gray-600 mb-6">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-gray-600 text-lg font-medium lg:text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              vitae quam? Ex commodi error voluptate voluptatum aperiam harum
              in, magni ea possimus molestias similique veniam, voluptatem
              ratione laboriosam praesentium vero, expedita est tenetur facere!
              Unde eius aperiam natus iusto ullam, quidem perspiciatis veniam
              odit ipsum dolorem harum nemo nesciunt atque. Impedit magni sunt
              quos facilis nostrum, reprehenderit quasi amet numquam doloribus,
              dolor sapiente. Sunt consequuntur tempora accusantium illum
              laboriosam voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
