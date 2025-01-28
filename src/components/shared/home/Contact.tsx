import { useState } from "react";
import { CustomInput } from "../../common/inputs/CustomInput";
import { ButtonBg } from "../buttons/Buttons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mqaeegka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Submission failed');
      alert('Message sent successfully!');
      setFormData({  // Reset form
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="w-full flex gap-5">
            <div className="w-1/2">
              <CustomInput
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                handleChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <CustomInput
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                handleChange={handleChange}
              />
            </div>
          </div>
          <CustomInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            handleChange={handleChange}
          />
          <CustomInput
            label="Subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            handleChange={handleChange}
          />
          <CustomInput
            label="Message"
            type="textarea"
            name="message"
            placeholder="What are you telling us?"
            cols={30}
            rows={10}
            value={formData.message}
            handleChange={handleChange}
          />
          <div className="w-full flex justify-center mt-5">
            <section className="w-fit">
              <ButtonBg 
                className="bg-bc px-5 py-4 text-white" 
                type="submit"
                disabled={loading}
              >
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
