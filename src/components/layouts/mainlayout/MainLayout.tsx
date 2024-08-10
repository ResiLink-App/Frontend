import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/Interface";
import { useEffect } from "react";

const MainLayout = () => {
  const outlet = useOutlet();
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state: RootState) => (state.user))
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard")
    }
  }, [navigate])


  return (
    <>
      <section className="overflow-x-hidden p-0 w-full flex">
        <section className="w-full flex">
          <Navbar />
          {outlet}
        </section>
      </section>
    </>
  );
};

export default MainLayout;
