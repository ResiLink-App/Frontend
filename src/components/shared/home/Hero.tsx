import hero_image from "../../../assets/images/hero-img.jpg";
import { ButtonBg } from "../buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-center md:px-14 px-2 z-10 bg-transparent relative"
      style={{ backgroundImage: `url(${hero_image})` }}
    >
      <section className="w-full flex h-[100vh] bg-image-container bg-fixed items-center justify-center">
        <section className="absolute bg-black w-full right-0 top-0 h-screen opacity-85"></section>

        <section className="relative  items-center flex gap-y-7  w-full px-2 flex-col">
        {/* <section className="relative flex gap-y-7 md:w-3/4  w-full px-2 flex-col"> */}
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="font-Chalty leading-[40px] md:leading-normal w-full font-bold text-center text-white md:text-[55px] text-[37px] capitalize "
          >
            Find Your Dream Home with Ease
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-neutral-300 text-[16px] w-3/4 text-center md:text-xl md:leading-9 font-medium"
          >
            Welcome to ResiLink, the ultimate platform for discovering exceptional apartments in your area. Our cutting-edge solution simplifies the home-finding process, connecting you with your perfect residence in no time.
          Zero Stress!
Zero Agent Fee!
Free House Cleaning Service!
          </p>

          <section className="w-fit mx-auto">
            <ButtonBg
              className="px-10 py-4 bg-bc text-white"
              onClick={() => {
                navigate("/#listings");
              }}
            >
              Get Started
            </ButtonBg>
          </section>
        </section>
      </section>

      
    </section>
  );
};

export default Hero;
