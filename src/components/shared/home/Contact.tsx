import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { CustomInput } from "../../common/inputs/CustomInput";
import { ButtonBg } from "../buttons/Buttons";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      )

      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="listings" className="bg-white md:px-10 px-4 py-20">
      <section className="w-full text-center">
        <span className="uppercase text-bc text-base font-medium tracking-widest">
          Have you got issues?
        </span>
        <h1 className="text-center font-semibold text-black md:text-4xl text-lg py-3 capitalize">
          Contact Us
        </h1>
      </section>
      <section className="w-100 py-10 lg:px-20 px-4">
        <form onSubmit={handleSubmit}>
          <div className="w-full flex gap-5">
            <div className="w-1/2">
              <CustomInput
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
                handleChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <CustomInput
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
                handleChange={handleChange}
              />
            </div>
          </div>
          <CustomInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            handleChange={handleChange}
          />

          <CustomInput
            label="Subject"
            type="text"
            name="subject"
            placeholder="Subject"
            handleChange={handleChange}
          />
          <CustomInput
            label="Message"
            type="textarea"
            name="message"
            placeholder="What are you telling us?"
            cols={30}
            rows={10}
            handleChange={handleChange}
          />
          <div className="w-full flex justify-center mt-5">
            <section className="w-fit">
              <ButtonBg className="bg-bc px-5 py-4" disabled={loading}>
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
