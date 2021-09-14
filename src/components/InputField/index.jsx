import React from 'react'

const InputField = ({ labelFor, labelText, type, placeholder, Icon, value, name, id, onChange, required }) => {
    return (
        <div>
            <label
                className="font-bold text-lg"
                htmlFor={labelFor}
            >
                {labelText}
            </label>

            <div className="flex items-center bg-gray-1x p-3 rounded-md mb-4 mt-1 font-semibold">
                {Icon && (<Icon />)}
                <input
                    className={`bg-transparent ml-2 focus:outline-none`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    id={id}
                    onChange={onChange}
                    required={required}
                />
            </div>
        </div>
    )
}

export default InputField
