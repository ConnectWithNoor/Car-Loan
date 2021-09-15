import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'

const Disqualification = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold tracking-wide">
                You're Not Eligible to apply for loan
            </p>

            <div className="mt-5">
                <h2 className="text-2xl font-bold tracking-wide mb-2 underline">Customer Support</h2>
                <div className="flex items-center mb-2 font-bold">
                    <HiOutlineMail className="mr-3 text-xl" /> <a href="mailto:example@abc.com">example@abc.com</a>
                </div>
                <div className="flex items-center mb-2 font-bold">
                    <AiOutlinePhone className="mr-3 text-xl" /> <a href="tel:+92 312 1111111">+92 312 1111111</a>
                </div>
            </div>
        </div>
    )
}

export default Disqualification;
