import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const ContactInfo = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center gap-5">
            <div className="w-[120px] h-[120px] border-4 border-[#BCCA74] rounded-full flex items-center justify-center text-center">
              <LocalPhoneOutlinedIcon
                sx={{
                  width: "90px",
                  height: "90px",
                  color: "#393939",
                  padding: "12px",
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-700">Call Us:</h2>
              <a
                href="tel:+123-456-789"
                className="text-lg font-medium text-gray-600 "
              >
                +123-456-789
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-[120px] h-[120px] border-4 border-[#FFF9CA] rounded-full flex items-center justify-center text-center">
              <LocationOnIcon
                sx={{
                  width: "90px",
                  height: "90px",
                  color: "#393939",
                  padding: "12px",
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-700">Address</h2>
              <p className="text-lg font-medium text-gray-600 ">
                Street#10, Dummy <br /> Country Lorem
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-[120px] h-[120px] border-4 border-[#555A5F] rounded-full flex items-center justify-center text-center">
              <EmailIcon
                sx={{
                  width: "90px",
                  height: "90px",
                  color: "#393939",
                  padding: "12px",
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-700">Mail Us:</h2>
              <a
                href="mailto:dummuyLorem@gmail.com"
                className="text-lg font-medium text-gray-600 "
              >
                dummuyLorem@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50392.78767624549!2d90.22017089447182!3d23.87732455434294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3d6df9569%3A0x277b3819d4da3e91!2sSavar%20Union!5e1!3m2!1sen!2sbd!4v1688318083244!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[600px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
