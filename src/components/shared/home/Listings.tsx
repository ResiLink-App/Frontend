import React from "react";
// import { useNavigate } from 'react-router-dom';
import PropList from "../../common/propList/PropList";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/Interface";
import Heading from "./headingTitle";

const Listings: React.FC = () => {
  // const navigate = useNavigate();
  const { listings, listings_loading } = useSelector(
    (state: RootState) => state.listing
  );
  console.log(listings_loading, listings);
  return (
    <section id="listings" className="bg-white md:px-10 px-4 py-20">
      <Heading
        heading="Best Rent Properties"
        subheading="Featured Properties"
      />
      <section className="w-100 py-10">
        {listings_loading ? (
          <div>Loading</div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {listings.map((propList: any, i: number) => (
              <PropList key={i} propList={propList} />
            ))}
          </section>
        )}
      </section>
      {/* <section className="w-full flex justify-center">
                <section className="w-fit">
                    <ButtonBg
                        onClick={() => navigate("/register")} className=' bg-bc px-5 py-4'>Browse More Properties
                    </ButtonBg>
                </section>
            </section> */}
    </section>
  );
};

export default Listings;
