import React from 'react'
import { BsBellFill } from 'react-icons/bs'
import { LuChevronDownCircle } from 'react-icons/lu'

const TopNav: React.FC = () => {
    return (
        <section className='py-3 px-4 shadow-2xl w-full'>
            <section className="flex justify-between">
                <section></section>
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
        </section>
    )
}

export default TopNav