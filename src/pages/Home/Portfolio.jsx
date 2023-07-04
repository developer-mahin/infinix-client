const Portfolio = () => {
  const fakeData = [
    {
      img: "https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg",
    },
    {
      img: "https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg",
    },
    {
      img: "https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg",
    },
    {
      img: "https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg",
    },
    {
      img: "https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg",
    },
    {
      img: "https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg",
    },
  ];

  return (
    <div className="md:my-20 my-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div className="col-span-4">
            <h2 className="text-4xl lg:text-start text-center font-bold mb-3 text-gray-600">
              Our Portfolio
            </h2>
            <p className="text-lg lg:text-start text-center font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur
            </p>

            <div className="lg:mt-14 mt-6 lg:mb-0 mb-10">
              <p className="text-gray-600 font-medium text-lg hover:text-red-600 hover:border-b-4 border-red-600 w-fit my-4 cursor-pointer duration-150">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-gray-600 font-medium text-lg hover:text-red-600 hover:border-b-4 border-red-600 w-fit my-4 cursor-pointer duration-150">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-gray-600 font-medium text-lg hover:text-red-600 hover:border-b-4 border-red-600 w-fit my-4 cursor-pointer duration-150">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-gray-600 font-medium text-lg hover:text-red-600 hover:border-b-4 border-red-600 w-fit my-4 cursor-pointer duration-150">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-gray-600 font-medium text-lg hover:text-red-600 hover:border-b-4 border-red-600 w-fit my-4 cursor-pointer duration-150">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="col-span-8 grid md:grid-cols-2 grid-cols-1 gap-6">
            {fakeData.map((data, i) => (
              <div key={i}>
                <img className="rounded-md" src={data.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
