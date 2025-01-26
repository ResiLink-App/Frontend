import { useState } from "react";
import { CustomInput } from "../../common/inputs/CustomInput";
import { ButtonBg } from "../buttons/Buttons";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="bg-white md:px-10 px-4 py-20">
      <section className="w-full text-center">
        <span className="uppercase text-bc text-base font-medium tracking-widest">
          Have you got issues?
        </span>
        <h1 className="text-center font-semibold text-black md:text-4xl text-lg py-3 capitalize">
          Contact Us
        </h1>
      </section>
      <section className="w-full py-10 lg:px-20 px-4">
        <form
          action="https://formspree.io/f/mqaeegka" // Replace with your Formspree or other action URL
          method="POST"
        >
          <div className="w-full flex gap-5">
            <div className="w-1/2">
              <CustomInput
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <CustomInput
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <CustomInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
          />

          <CustomInput
            label="Subject"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <CustomInput
            label="Message"
            type="textarea"
            name="message"
            placeholder="What are you telling us?"
            cols={30}
            rows={10}
          />
          <div className="w-full flex justify-center mt-5">
            <section className="w-fit">
              <ButtonBg className="bg-bc px-5 py-4 text-white" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </ButtonBg>
            </section>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
