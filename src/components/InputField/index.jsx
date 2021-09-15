import React from 'react'

const InputField = ({ labelFor, labelText, type, placeholder, Icon, inputRef, id, error, messageLabel }) => {
    return (
        <div>
            <label
                className="font-bold text-lg"
                htmlFor={labelFor}
            >
                {labelText}
            </label>
            <div className="flex items-center bg-gray-1x p-3 rounded-md mt-1 font-semibold">
                {Icon && (<Icon />)}
                <input
                    className={`bg-transparent ml-2 focus:outline-none w-full`}
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    {...inputRef}
                />
            </div>
            <p className="text-red-600 font-bold text-sm bg-transparent mb-4 h-4">
                {error && error}
            </p>
        </div>
    )
}

export default InputField
