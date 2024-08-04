import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineBathroom, MdOutlineBedroomParent } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';

const ListingDetails: React.FC = () => {
    // const navigate = useNavigate()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const backgroundImages = ["https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg", "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg", "https://img.zumpercdn.com/740506154/1280x960?dpr=1&fit=crop&h=542&q=76&w=991"];
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
                        {backgroundImages.map((image, index) => (
                            <section className="w-full h-[400px]">
                                <section
                                    className="bg-cover bg-no-repeat h-full object-center"
                                    key={index}
                                    style={{ backgroundImage: `url(${image})` }}
                                >
                                    <section
                                        className="flex bg-cover bg-no-repeat h-full object-center flex-col md:px-14 px-2 py-28"
                                        style={{ backgroundImage: `url(${image})` }}
                                    >
                                    </section>
                                </section>
                            </section>
                        ))}
                    </Slider>
                    <section className="w-full my-5">
                        <section className="p-10 shadow-xl flex justify-between items-center">
                            <section className="">
                                <section className="flex items-center gap-4 mb-5">
                                    <h2 className="capitalize font-semibold text-3xl">Park Avenue</h2>
                                    <span>
                                        <span className="rounded-md py-2 px-5 font-medium text-sm text-white capitalize bg-bc shadow-md">
                                            For Rent
                                        </span>
                                    </span>
                                </section>
                                <p className="mb-2">No 23, Ilebaye Street, Ekosodin</p>
                                <ul className="flex items-center gap-3">
                                    <li className='my-2 text-base'>
                                        <section className="flex items-center gap-2">
                                            <MdOutlineBedroomParent />
                                            <span>5 Rooms</span>
                                        </section>
                                    </li>
                                    <li className=''>
                                        <section className='flex items-center gap-2'>
                                            <MdOutlineBathroom />
                                            <span>4 Bedrooms</span>
                                        </section>
                                    </li>
                                </ul>
                            </section>
                            <section className="">
                                <section className="flex gap-2 pb-2 justify-end text-bc2">
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                </section>
                                <h2 className="font-semibold text-3xl">
                                    ₦50,000
                                </h2>
                            </section>
                        </section>
                        <section className="p-10 bg-white shadow-2xl mt-4">
                            <section
                                className=""
                            >
                                <section className="flex justify-between items-center">
                                    <h4 className="text-2xl mb-5 font-semibold">Property Details</h4>
                                </section>
                                <section className="grid grid-cols-3 gap-5 mb-10">
                                    <section className="">
                                        <ul className="flex flex-col gap-3">
                                            <li>
                                                <span>Property Type :</span> Rent
                                            </li>
                                            <li>
                                                <span>Property ID :</span> 6382920101
                                            </li>
                                            <li>
                                                <span>Property status :</span> For Rent
                                            </li>
                                            <li>
                                                <span>Operating Since :</span>28 August, 2002
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="">
                                        <ul className="flex flex-col gap-3">
                                            <li>
                                                <span>Price :</span> ₦50,000
                                            </li>
                                            <li>
                                                <span>Property Size :</span> NaN
                                            </li>
                                            <li>
                                                <span>City :</span> Akure
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="">
                                        <ul className="flex flex-col gap-3">
                                            <li>
                                                <span>Rooms :</span> 7
                                            </li>
                                            <li>
                                                <span>Bedrooms :</span> 3
                                            </li>
                                            <li>
                                                <span>Bathrooms :</span> 4
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <h4 className="text-2xl mb-5 font-semibold">Brief Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vel provident ipsa eligendi quia eos tempore doloremque laboriosam accusamus obcaecati!</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ListingDetails