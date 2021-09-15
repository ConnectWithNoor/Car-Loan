import React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <ImSpinner8 className="text-5xl text-gray-4x animate-spin" />
        </div>
    )
}

export default Spinner
