import React from 'react'

const Button = ({ btnType, btnText }) => {
    return (
        <button type={btnType} className="w-1/2 bg-primary p-3 mt-5 rounded-md font-bold text-lg hover:bg-gray-1x transition duration-700 ease-in-out">
            {btnText}
        </button>
    )
}

export default Button;