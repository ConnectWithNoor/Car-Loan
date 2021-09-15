import React from 'react'

const InputField = ({ labelFor, labelText, type, placeholder, Icon, inputRef, id, error }) => {
    return (
        <div className="text-gray-900">
            <label
                className="font-bold text-md"
                htmlFor={labelFor}
            >
                {labelText}
            </label>
            <div className="flex items-center bg-primary-lite p-3 rounded-md mt-1 font-semibold">
                {Icon && (<Icon />)}
                <input
                    className={`bg-transparent ml-2 focus:outline-none w-full`}
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    {...inputRef}
                />
            </div>
            <p className="text-red-600 font-bold text-sm bg-transparent mb-3 h-4 text-right">
                {error && error}
            </p>
        </div>
    )
}

export default InputField
