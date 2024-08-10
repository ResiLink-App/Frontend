import { useNavigate } from 'react-router-dom';
import hero_image from "../../../assets/images/hero-img.jpg"
import { ButtonBg } from '../buttons/Buttons';

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section
      style={{ backgroundImage: `url(${hero_image})` }} className="w-full bg-cover bg-no-repeat bg-center md:px-14 px-2 z-10 bg-transparent relative">
      <section className="w-full flex h-[100vh] bg-image-container bg-fixed items-center justify-center">
        <section className='absolute bg-black w-full right-0 top-0 h-screen opacity-85'></section>
        <section className="relative flex gap-y-7 md:w-3/4 w-full px-2 flex-col">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-center text-white md:text-[46px] text-[26px]  capitalize"
          >
            Connect to your dream residence from your convenience.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-center text-neutral-300 text-[16px] md:text-xl md:leading-9"
          >
            Welcome to ResiLink, your ultimate destination for connecting with available residences around you. ResiLink simplifies the process of finding your next home.
          </p>
          <section className='w-fit mx-auto'>
            <ButtonBg className='px-10 py-4 bg-bc' onClick={function (): void {
              navigate("/register")
            }}>Join as Agent</ButtonBg>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Hero