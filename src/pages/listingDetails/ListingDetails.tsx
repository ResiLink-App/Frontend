import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineBathroom, MdOutlineBedroomParent } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchListingDetails } from '../../features/auth-features/ListingSlice';
import { RootState } from '../../types/Interface';
import { domain } from '../../utils/helpers';

const ListingDetails: React.FC = () => {
    const location = useLocation();
    const listingId = location.pathname.split("/")[3];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListingDetails(listingId));
    }, [dispatch, listingId]);

    const { listing_details, listing_details_loading } = useSelector((state: RootState) => state.listing);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (listing_details_loading) {
        return (
            <div className="spinner">loading.....</div>
        );
    }

    const baseUrl = domain()

    // Function to generate a payment form link
    const handleGenerateLink = (paymentType: string) => {
        const link = `${baseUrl}/payment/${paymentType}/${listing_details._id}`;
        
        navigator.clipboard.writeText(link).then(() => {
            alert(`Form link copied to clipboard: ${link}`);
        }).catch((err) => {
            console.error("Failed to copy link: ", err);
        });
    };

    return (
        <section className='w-full h-full overflow-y-scroll p-4 pb-20'>
            <section className='mb-5 flex justify-between items-center'>
                <section className='text-left py-4'>
                    <h2 className='text-2xl tracking-wide text-[#202224] font-bold'>Listing Details</h2>
                </section>
            </section>
            <section className='w-full flex'>
                <section className="w-full">
                    <Slider {...settings}>
                        {listing_details.images.map((image, index) => (
                            <section className="w-full h-[400px]" key={index}>
                                <section
                                    className="bg-cover bg-no-repeat h-full object-center"
                                    style={{ backgroundImage: `url(${image})` }}
                                ></section>
                            </section>
                        ))}
                    </Slider>
                    <section className="w-full my-5">
                        <section className="p-10 shadow-xl flex justify-between items-center">
                            <section>
                                <section className="flex items-center gap-4 mb-5">
                                    <h2 className="capitalize font-semibold text-3xl">{listing_details.title}</h2>
                                    <span>
                                        <span className="rounded-md py-2 px-5 font-medium text-sm text-white capitalize bg-bc shadow-md">
                                            For {listing_details.type}
                                        </span>
                                    </span>
                                </section>
                                <p className="mb-2">{listing_details.location.address}</p>
                                <ul className="flex items-center gap-3">
                                    <li className='my-2 text-base'>
                                        <section className="flex items-center gap-2">
                                            <MdOutlineBedroomParent />
                                            <span>{listing_details.rooms} Rooms</span>
                                        </section>
                                    </li>
                                    <li>
                                        <section className='flex items-center gap-2'>
                                            <MdOutlineBathroom />
                                            <span>{listing_details.rooms} Bathrooms</span>
                                        </section>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <section className="flex gap-2 pb-2 justify-end text-bc2">
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                </section>
                                <h2 className="font-semibold text-3xl">
                                    ₦{listing_details.price}
                                </h2>
                            </section>
                        </section>
                        <section className="p-10 bg-white shadow-2xl mt-4">
                            <h4 className="text-2xl mb-5 font-semibold">Property Details</h4>
                            <section className="grid grid-cols-3 gap-5 mb-10">
                                {/* Property details */}
                            </section>
                            <h4 className="text-2xl mb-5 font-semibold">Brief Description</h4>
                            <p>{listing_details.description}</p>
                        </section>
                        <section className="mt-5">
                            {/* Generate Form Link Buttons */}
                            <button 
                                className="px-6 py-3 bg-blue-600 text-white rounded-md mr-3"
                                onClick={() => handleGenerateLink("inspection")}
                            >
                                Generate Inspection Fee Link
                            </button>
                            <button 
                                className="px-6 py-3 bg-green-600 text-white rounded-md"
                                onClick={() => handleGenerateLink("main")}
                            >
                                Generate Main Payment Link
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default ListingDetails;
