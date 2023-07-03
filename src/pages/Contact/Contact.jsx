import Faq from "../Process/Faq";
import ContactFirst from "./ContactFirst";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <ContactFirst />
      <ContactForm/>
      <Faq />
      <ContactInfo/>
    </div>
  );
};

export default Contact;
