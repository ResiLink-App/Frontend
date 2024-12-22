import React from 'react'
import { ListingProps, RootState } from '../../../types/Interface'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineBathroom, MdOutlineBedroomParent } from 'react-icons/md'
import { GiHomeGarage } from 'react-icons/gi'
import { AiFillBoxPlot } from 'react-icons/ai'
import { IoCalendarOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { formatPrice } from '../../../utils/helpers'

const PropList: React.FC<ListingProps> = ({ propList }) => {
    const navigate = useNavigate()

    const { isLoggedIn } = useSelector((state: RootState) => state.user);
    console.log(isLoggedIn);

    return (
        <section onClick={() => navigate(`${isLoggedIn ? `/dashboard/listings/${propList._id}` : `/listings/details/${propList._id}`}`)} className='shadow-xl cursor-pointer rounded-xl'>
            <section className='relative'>
                <section className='z-10 absolute left-3 top-3 bg-bc text-white px-3 py-2 text-sm rounded-xl'>
                    For {propList.mode === 'RENT' ? 'Rent' : 'Sale'}
                </section>
                <section className='z-10 text-white bg-bc p-3 text-xl absolute bottom-0 right-0 rounded-tl-lg font-bold tracking-wider'>
                    {formatPrice(propList.totalPrice)}<span className='text-bc2 text-base'>/Yr</span>
                </section>

                <section className='absolute inset-0 bg-black opacity-20 rounded-xl'></section>
                <img className='h-[250px] w-full object-cover rounded-t-xl' src={propList.images[0] ? propList.images[0] : null} alt={propList.displayImage} />
            </section>
            <section className='p-5'>
                <h2 className='text-bc font-semibold text-xl mb-2'>{propList.title}</h2>
                <p className='text-para w-full flex items-center gap-1 text-sm mb-4'><FaLocationDot /><span>{propList.location.address}</span></p>
                <section className='w-full grid grid-cols-2 text-para text-sm'>
                    <section className="flex items-center gap-2"><MdOutlineBedroomParent /><span>{propList.rooms} Room(s)</span></section>
                    <section className="flex items-center gap-2"><GiHomeGarage /><span>{propList.garage} Garage(s)</span></section>
                </section>
            </section>
            <section className='border-t border-t-neutral-300 px-5 py-3 text-sm text-para'>
                <section className="flex justify-between">
                    <section className="flex gap-1 items-center">
                        <section className="w-[30px] h-[30px] rounded-full">
                            <img className="w-full rounded-full" src={propList.postedBy.profilePic} alt="" />
                        </section>
                        <span className=''>{propList.postedBy.firstName} {propList.postedBy.lastName}</span>
                    </section>
                    <section className="flex gap-2 items-center">
                        <IoCalendarOutline />
                        <span>{new Date(propList.createdAt).toLocaleDateString()}</span>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default PropList