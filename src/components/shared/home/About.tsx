import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { ButtonBg } from "../buttons/Buttons";
import { GoPasskeyFill } from "react-icons/go";
import Heading from "./headingTitle";

const About = () => {
  const iconStyles = "text-2xl md:text-3xl text-para";
  
  const steps = [
    {
      icon: <GoPasskeyFill className={iconStyles} />,
      title: "No of Users",
      descrip: "230k",
    },
    {
      icon: <MdConnectWithoutContact className={iconStyles} />,
      title: "Rented Properties",
      descrip: "459M",
    },
    {
      icon: <FaUsers className={iconStyles} />,
      title: "No of Agents",
      descrip: "405",
    },
    {
      icon: <FaUsers className={iconStyles} />,
      title: "No of Users",
      descrip: "789k",
    },
  ];
  const navigate = useNavigate();

  return (
    <section id="about" className="md:px-10 px-4 py-20">
      <section className="w-full flex flex-col md:flex-row gap-10 items-center">
        <section className="w-full md:w-1/2">
          <Heading heading="About Us" subheading="Why Choose ResiLink?" />
          <div className="mt-10">
            <p className="text-base text-gray-900  text-left md:text-lg font-medium mb-8">
              ResiLink simplifies the process of finding your next home by
              providing a seamless connection to available houses through our
              dynamic platform. <br />
              <p className="pt-1.5 font-Chalty text-xl leading-6 font-medium text-gray-900">
                Our Mission At ResiLink:{"  "}
              </p>
              Our mission is to provide swift and seamless access to vacant and
              affordable apartments, leveraging innovation to make housing more
              accessible and affordable for all. <br />
              <p className="pt-1.5 font-Chalty text-xl leading-6 font-medium text-gray-900">
                Our Vision:{" "}
              </p>
              Our vision is to become the benchmark for excellence in property
              renting and real estate in Africa and beyond, setting the standard
              for innovation, customer satisfaction, and community development.{" "}
              <br />
              <p className="pt-1.5 font-Chalty text-xl leading-6 font-medium text-gray-900">
                Our Core Values:{" "}
              </p>
              We are guided by a set of core values that include excellence,
              innovation, customer centricity and integrity{" "}
            </p>
          </div>
          <section className="w-full flex justify-center md:justify-start">
            <section className="w-fit">
              <ButtonBg
                className="bg-bc px-10 py-3 text-white"
                onClick={function (): void {
                  navigate("/register");
                }}
              >
                Join as Agent
              </ButtonBg>
            </section>
          </section>
        </section>
        <section className="w-full md:w-1/2">
          <section className="grid grid-cols-2 gap-10">
            {steps.map((step, i) => (
              <section key={i} className="flex flex-col md:flex-row gap-4">
                <section className="flex flex-row md:flex-col justify-center">
                  <section className="bg-gray-800/5  w-fit p-3 md:p-5  justify-center flex items-center rounded-full">
                    {step.icon}
                  </section>
                </section>
                <section className="flex flex-col gap-3">
                  <h3 className="text-center md:text-left text-bc text-base md:text-base font-semibold font-Chalty">
                    {step.title}
                  </h3>
                  <p className="text-gray-900 text-center md:text-left text-base md:text-3xl font-medium">
                    {step.descrip}
                  </p>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
