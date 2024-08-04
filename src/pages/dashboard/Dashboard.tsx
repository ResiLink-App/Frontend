import React from 'react'
import { BiSolidHomeHeart } from 'react-icons/bi'
import { BsFillHousesFill, BsHouseSlashFill } from 'react-icons/bs'
import { FaChartLine } from 'react-icons/fa'
import { FaHouseSignal } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ButtonBg } from '../../components/shared/buttons/Buttons'
import { GrDocumentDownload } from 'react-icons/gr'

const Dashboard: React.FC = () => {
    const dashboardGrids = [
        {
            label: "Total Listings",
            total: "567",
            icon: <BsFillHousesFill />
        },
        {
            label: "Active Listings",
            total: "238",
            icon: <FaHouseSignal />
        },
        {
            label: "Impressions",
            total: "80",
            icon: <FaChartLine />
        },
        {
            label: "Inactive Listings",
            total: "340",
            icon: <BsHouseSlashFill />
        },
    ]
    const renderData = [
        {
            firstName: "David",
            lastName: "Horjet",
            phoneNumber: "090283829209",
            room_no: "8283",
            email: "david@gmail.com"
        },
        {
            firstName: "David",
            lastName: "Horjet",
            phoneNumber: "090283829209",
            room_no: "8283",
            email: "david@gmail.com"
        },
        {
            firstName: "David",
            lastName: "Horjet",
            phoneNumber: "090283829209",
            room_no: "8283",
            email: "david@gmail.com"
        },
        {
            firstName: "David",
            lastName: "Horjet",
            phoneNumber: "090283829209",
            room_no: "8283",
            email: "david@gmail.com"
        },
        {
            firstName: "David",
            lastName: "Horjet",
            phoneNumber: "090283829209",
            room_no: "8283",
            email: "david@gmail.com"
        },
        {
            firstName: "David",
            lastName: "Horjet",
            phoneNumber: "090283829209",
            room_no: "8283",
            email: "david@gmail.com"
        },
    ]
    return (
        <section className='w-full h-full p-4'>
            <section className='mb-10'>
                <section className='text-left py-4'>
                    <h2 className='text-2xl tracking-wide text-[#202224] font-bold'>Hi Agent</h2>
                </section>
                <section className="grid grid-cols-4 gap-4">
                    {dashboardGrids.map((item, i) => (
                        <section key={i} className='bg-white rounded-lg p-5 shadow-md flex items-center justify-between'>
                            <section>
                                <h5 className='text-para text-sm mb-3'>{item.label}</h5>
                                <h2 className='text-black text-3xl'>{item.total}</h2>
                            </section>
                            <section className='text-3xl'>
                                {item.icon}
                            </section>
                        </section>
                    ))}
                </section>
            </section>
            <section>
                <section className='text-left py-4'>
                    <h2 className='text-2xl tracking-wide text-[#202224] font-bold'>Recent tenants</h2>
                </section>
                <section className="mb-5 h-[60vh] overflow-scroll">
                    <table className="w-full border border-neutral-500 p-2 text-left text-sm font-light text-surface">
                        <thead className='border-b border-neutral-800 p-2 font-medium'>
                            <tr>
                                <th scope="col" className='px-6 py-4 text-center'>S/N</th>
                                <th scope="col" className='px-6 py-4 text-center'>Listing</th>
                                <th scope="col" className='px-6 py-4 text-center'>Firstname</th>
                                <th scope="col" className='px-6 py-4 text-center'>Lastname</th>
                                <th scope="col" className='px-6 py-4 text-center'>Email</th>
                                <th scope="col" className='px-6 py-4 text-center'>Phone</th>
                                <th scope="col" className='px-6 py-4 text-center'>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderData.map((item, i) => (
                                <tr>
                                    <td className='whitespace-nowrap px-6 py-4 text-center'>{i + 1}</td>
                                    <td className='whitespace-nowrap px-6 py-4 text-center'>{item.room_no}</td>
                                    <td className='whitespace-nowrap px-6 py-4 text-center'>{item.firstName}</td>
                                    <td className='whitespace-nowrap px-6 py-4 text-center'>{item.lastName}</td>
                                    <td className='whitespace-nowrap px-6 py-4 text-center'>{item.email}</td>
                                    <td className='whitespace-nowrap px-6 py-4 text-center'>{item.phoneNumber}</td>
                                    <td className='whitespace-nowrap px-6 py-4 text-center'>{item.room_no}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    )
}

export default Dashboard