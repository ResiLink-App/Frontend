import React, { useEffect, useState } from 'react'
import { BsBellFill, BsList, BsX } from 'react-icons/bs'
import { LuChevronDownCircle } from 'react-icons/lu'
import { toggleTopnav } from '../../../features/unauth-features/ActionSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../../types/Interface';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../common/logo/Logo';
import { GoGear } from 'react-icons/go';
import { IoIosPeople } from 'react-icons/io';
import { HiOutlineLogout } from 'react-icons/hi';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { HiMiniQueueList } from 'react-icons/hi2';
import { CiGrid42 } from 'react-icons/ci';
import { CgArrowLongLeft } from 'react-icons/cg';

const TopNav: React.FC = () => {
    const dispatch = useDispatch();
    const { topnav } = useSelector((state: RootState) => state.action);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const onToggle = () => {
        dispatch(toggleTopnav(!topnav));
        setIsSidebarOpen(!isSidebarOpen);
    };
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isSidebarOpen]);
    const links = [
        {
            icon: <CiGrid42 />,
            label: "Dashboard",
            link: "/dashboard",
        },
        {
            icon: <HiMiniQueueList />,
            label: "Listings",
            link: "/dashboard/listings",
        },
        {
            icon: <TbDeviceAnalytics />,
            label: "Analytics",
            link: "/dashboard/analytics",
        },
        {
            icon: <IoIosPeople />,
            label: "Tenants",
            link: "/dashboard/tenants",
        },
    ]
    const links2 = [
        {
            icon: <GoGear />,
            label: "Settings",
            link: "/dashboard/settings",
        },
        {
            icon: <HiOutlineLogout />,
            label: "Logout",
            link: "/",
        },
    ]
    return (
        <section className='py-3 px-4 shadow-2xl w-full'>
            <section className="flex items-center justify-between">
                <section>
                    <BsList className='block lg:hidden text-2xl cursor-pointer'
                        onClick={onToggle} />
                </section>
                <section className='flex items-center gap-5'>
                    <BsBellFill className='text-2xl' />
                    <section className="flex items-center gap-3 cursor-pointer">
                        <img className='w-12 h-12' src="https://themedox.com/mykd/wp-content/uploads/2023/10/team02.png" alt="" />
                        <section className="flex flex-col">
                            <span className='font-bold'>John Doe</span>
                            <span className='text-sm'>Agent</span>
                        </section>
                        <LuChevronDownCircle className='text-lg' />
                    </section>
                </section>
            </section>

            <section
                className={`fixed top-0 left-0 h-full p-4 w-[250px] bg-bc text-white z-20 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <section className="h-full w-full flex-col gap-y-[40px] items-center inline-flex py-[26px] ">
                    <section className="h-full flex-col gap-y-[8px] justify-between items-start inline-flex">
                        <section className="mb-7" onClick={onToggle}>
                            <Logo />
                            <CgArrowLongLeft className='text-2xl' />
                        </section>
                        <section className="">
                            <ul className="flex flex-col gap-10">
                                {links.map((item, i) => (
                                    <li key={i}>
                                        <Link className="flex hover:text-bc items-center gap-1 text-lg" to={item.link}>
                                            {item.icon}{item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="">
                            <ul className="flex flex-col gap-10">
                                {links2.map((item, i) => (
                                    <li key={i}>
                                        <Link className="flex items-center gap-1 text-lg" to={item.link}>
                                            {item.icon}{item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default TopNav