import React from 'react';
import InputField from '../../components/InputField'
import Button from '../../components/Button'

const UserRegister = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl mb-10 font-bold flex items-center">Congratulations.! you're eligible for the loan</h2>
            </div>
            <div className="bg-gray-2x p-4 rounded-md">
                <h2 className="text-2xl font-bold border-b-2 pb-2">User Registration Form</h2>
                <form className="pt-5">
                    <InputField
                        labelFor="username"
                        labelText="Username"
                        type="email"
                        placeholder="example@abc.com"
                        name="username"
                    // value
                    // onChange
                    />

                    <InputField
                        labelFor="password"
                        labelText="Password"
                        type="password"
                        placeholder="********"
                        name="password"
                    // value
                    // onChange
                    />

                    <InputField
                        labelFor="confirmUsername"
                        labelText="Confirm Username"
                        type="password"
                        placeholder="********"
                        name="password"
                    // value
                    // onChange
                    />

                    <Button btnText="Register" btnType="submit" />
                </form>
            </div>
        </div>
    )
}

export default UserRegister
