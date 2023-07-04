import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TriagesoftSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 gap-0">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/491/053/original/children-learn-on-computers-concept-for-web-banner-boy-and-girl-watching-video-lessons-doing-homework-online-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center md:mt-0 mt-10">
          <div>
            <h2 className="lg:text-4xl text-3xl font-bold text-gray-600 mb-4">
              Lorem ipsum dolor sit
            </h2>
            <p className="lg:text-lg text-base font-medium text-gray-700 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo
              cum sequi labore deserunt maiores. adipisicing elit. Non quo cum
              sequi labore deserunt maiores.
            </p>
            <div className="flex items-center  gap-2">
              <PlayArrowIcon
                sx={{
                  background: "red",
                  color: "#fff",
                  padding: "5px",
                  width: {
                    xs: "50px",
                    lg: "60px",
                  },
                  height: {
                    xs: "50px",
                    lg: "60px",
                  },
                  borderRadius: "100%",
                }}
              />
              <hr className="w-[80px] border-b-2 border-gray-600" />
              <p className="lg:text-lg text-base font-medium italic text-gray-600">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriagesoftSection;
