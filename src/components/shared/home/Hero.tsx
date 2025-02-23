import hero_image from "../../../assets/images/hero-img.jpg";
import { ButtonBg } from "../buttons/Buttons";

const Hero = () => {
  // const navigate = useNavigate();
  const heroHeight = "h-[80vh] md:h-[65vh]";

  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-center md:px-14 px-2 z-10 bg-transparent relative"
      style={{ backgroundImage: `url(${hero_image})` }}
    >
      <section
        className={`w-full flex ${heroHeight} bg-image-container bg-fixed items-center justify-center`}
      >
        <section
          className={`absolute bg-black w-full right-0 ${heroHeight} md:h-[100vh] opacity-85`}
        ></section>

        <section className="relative items-center flex gap-y-7 w-full px-2 flex-col">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="font-Chalty leading-[40px] md:leading-normal w-full font-extrabold text-center text-white md:text-[55px] text-[37px] capitalize "
          >
            Find Your Dream Home with Ease.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-neutral-300 text-base md:text-center md:text-xl md:leading-9 font-medium  mt-3 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
          >
            Welcome to ResiLink, the ultimate platform for discovering
            exceptional apartments in your area. Our cutting-edge solution
            simplifies the home-finding process, connecting you with your
            perfect residence in no time.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-neutral-300 text-base md:text-center md:text-xl md:leading-9 font-medium  mt-3 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 text-center"
          >
            Zero Stress! Zero Agent Fee! Free House Cleaning Service!
          </p>

          <section className="w-fit mx-auto">
            <ButtonBg
                className="px-10 py-4 bg-bc text-white m-2"
                onClick={() => {
                  window.location.hash = "#listings";
                }}
            >
              Get Started
            </ButtonBg>

            <a href="https://drive.usercontent.google.com/download?id=1-5ec51elAfR1-UjcuMGl3rsx34tMtI3k&export=download&confirm=t&uuid=cbe53bb0-6e4c-4818-bf43-368868089582" download>
              <ButtonBg className="px-10 py-4 bg-green-500 text-white m-2">
                Download App
              </ButtonBg>
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
