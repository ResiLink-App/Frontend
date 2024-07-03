import { Link } from "react-router-dom";
import LogoImage from "../../../../assets/images/resilink-white.png"

const Logo = () => {
  return (
    <>
      <section className="w-[120px]">
        <Link to={"/"}>
          <img className="w-full" src={LogoImage} alt={LogoImage} /></Link>
      </section>
    </>
  );
};

export default Logo;
