import React, { useState } from 'react';
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'

const UserRegister = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });
    const [isPasswordMatched, setIsPasswordMatched] = useState(true);

    const onSubmit = (data) => {
        setIsPasswordMatched(true)
        if (data.password !== data.confirmPassword) {
            setIsPasswordMatched(false)
        }
    }

    return (
        <div>
            <div>
                <h2 className="text-2xl mb-10 font-bold flex items-center">Congratulations.! you're eligible for the loan</h2>
            </div>
            <div className="bg-gray-2x p-4 rounded-md">
                <h2 className="text-2xl font-bold border-b-2 pb-2">User Registration Form</h2>
                <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        labelFor="username"
                        labelText="Username"
                        type="text"
                        placeholder="example@abc.com"
                        inputRef={{ ...register('username', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g }) }}
                        error={`${errors.username?.type === 'required' ? "Required" : errors.username?.type === 'pattern' ? "Please type valid email" : ''}`}
                    />

                    <InputField
                        labelFor="password"
                        labelText="Password"
                        type="password"
                        placeholder="********"
                        inputRef={{ ...register('password', { required: true, minLength: 8, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ }) }}
                        error={`${(errors.password?.type === 'required' ? "Required" : '')
                            || (errors.password?.type === 'minLength' ? "Password must be 8 characters long" : errors.password?.type === 'pattern' ? 'Password must contain letters, number and special characters' : '')}`}
                    />

                    <InputField
                        labelFor="confirmPassword"
                        labelText="Confirm Password"
                        type="password"
                        placeholder="********"
                        name="confirmPassword"
                        inputRef={{ ...register('confirmPassword', { required: true, minLength: 8 }) }}
                        error={`${(errors.confirmPassword?.type === 'required' ? "Required" : !isPasswordMatched ? 'Password does not match' : '')}`}
                    />

                    <Button btnText="Register" btnType="submit" />
                </form>
            </div>
        </div>
    )
}

export default UserRegister
