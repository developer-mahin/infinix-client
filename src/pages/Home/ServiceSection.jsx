import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

const ServiceSection = () => {
  return (
    <div className="my-20">
      <SectionTitle
        title="We Provide Best Quality Service"
        subTitle="Our Services"
        color="text-red-600"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptatem quisquam sapiente dolor necessitatibus fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptatem quisquam"
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3  gap-y-14 gap-x-6 mt-20">
          <div className="bg-gradient-to-b from-[#F7B770] to-[#DCAB74] pt-20 pb-14 px-10 rounded-md">
            <div className="flex items-center justify-center">
              <ImportantDevicesIcon
                sx={{ color: "white", width: "120px", height: "120px" }}
              />
            </div>
            <div className="text-white mt-10">
              <h2 className="text-3xl text-center font-semibold">
                Lorem, ipsum
              </h2>
              <p className="text-lg font-medium mt-10 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quae facilis accusantium cum, sint nobis!
              </p>
              <div className="flex items-center justify-center">
                <button className="mt-10 px-12 py-3 font-medium border-2 border-gray-100 rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#47E4DB] to-[#2E98AE] pt-20 pb-14 px-10 rounded-md">
            <div className="flex items-center justify-center">
              <ImportantDevicesIcon
                sx={{ color: "white", width: "120px", height: "120px" }}
              />
            </div>
            <div className="text-white mt-10">
              <h2 className="text-3xl text-center font-semibold">
                Lorem, ipsum
              </h2>
              <p className="text-lg font-medium mt-10 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quae facilis accusantium cum, sint nobis!
              </p>
              <div className="flex items-center justify-center">
                <button className="mt-10 px-12 py-3 font-medium border-2 border-gray-100 rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#706188] to-[#463C68] pt-20 pb-14 px-10 rounded-md">
            <div className="flex items-center justify-center">
              <ImportantDevicesIcon
                sx={{ color: "white", width: "120px", height: "120px" }}
              />
            </div>
            <div className="text-white mt-10">
              <h2 className="text-3xl text-center font-semibold">
                Lorem, ipsum
              </h2>
              <p className="text-lg font-medium mt-10 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quae facilis accusantium cum, sint nobis!
              </p>
              <div className="flex items-center justify-center">
                <button className="mt-10 px-12 py-3 font-medium border-2 border-gray-100 rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#4D84BE] to-[#1467BF] pt-20 pb-14 px-10 rounded-md">
            <div className="flex items-center justify-center">
              <ImportantDevicesIcon
                sx={{ color: "white", width: "120px", height: "120px" }}
              />
            </div>
            <div className="text-white mt-10">
              <h2 className="text-3xl text-center font-semibold">
                Lorem, ipsum
              </h2>
              <p className="text-lg font-medium mt-10 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quae facilis accusantium cum, sint nobis!
              </p>
              <div className="flex items-center justify-center">
                <button className="mt-10 px-12 py-3 font-medium border-2 border-gray-100 rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#A9A7DF] to-[#5B5CD1] pt-20 pb-14 px-10 rounded-md">
            <div className="flex items-center justify-center">
              <ImportantDevicesIcon
                sx={{ color: "white", width: "120px", height: "120px" }}
              />
            </div>
            <div className="text-white mt-10">
              <h2 className="text-3xl text-center font-semibold">
                Lorem, ipsum
              </h2>
              <p className="text-lg font-medium mt-10 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quae facilis accusantium cum, sint nobis!
              </p>
              <div className="flex items-center justify-center">
                <button className="mt-10 px-12 py-3 font-medium border-2 border-gray-100 rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#D68C93] to-[#9A4B43] pt-20 pb-14 px-10 rounded-md">
            <div className="flex items-center justify-center">
              <ImportantDevicesIcon
                sx={{ color: "white", width: "120px", height: "120px" }}
              />
            </div>
            <div className="text-white mt-10">
              <h2 className="text-3xl text-center font-semibold">
                Lorem, ipsum
              </h2>
              <p className="text-lg font-medium mt-10 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quae facilis accusantium cum, sint nobis!
              </p>
              <div className="flex items-center justify-center">
                <button className="mt-10 px-12 py-3 font-medium border-2 border-gray-100 rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
