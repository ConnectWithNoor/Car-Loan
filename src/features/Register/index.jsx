import React, { useEffect, useState } from 'react';
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRegistered } from './RegisterSlice';
import { fetchUserRegistration } from './RegisterThunk';
import CarLoan from './../../assets/images/carloan.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'

const UserRegister = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });
    const [isPasswordMatched, setIsPasswordMatched] = useState(true);

    const dispatch = useDispatch();
    const isRegisteredSelector = useSelector(selectIsRegistered)
    const history = useHistory();

    const onSubmit = (data) => {
        setIsPasswordMatched(true)
        if (data.password !== data.confirmPassword) {
            setIsPasswordMatched(false)
            return;
        }

        dispatch(fetchUserRegistration(data))
    }

    useEffect(() => {
        if (isRegisteredSelector !== null) {
            if (isRegisteredSelector) {
                toast.success('You are successfully registered', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    }, [isRegisteredSelector])

    useEffect(() => {
        if (isRegisteredSelector === null || isRegisteredSelector === false) {
            history.push('/')
        }
    }, [])

    return (
        <>
            <ToastContainer />
            <div className="w-11/12 flex items-center justify-center h-screen">
                <div className="w-8/12">
                    <img className="opacity-80 w-11/12 h-full object-cover" src={CarLoan} alt="Car Loan" />
                </div>
                <div>
                    <div>
                        <h2 className="text-2xl mb-10 font-bold text-gray-900">Congratulations.! you're eligible for the loan</h2>
                    </div>
                    <div className="bg-primary p-4 rounded-md">
                        <h2 className="text-2xl font-bold border-b-2 pb-2 border-gray-600 text-gray-700">User Registration Form</h2>
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
            </div>
        </>
    )
}

export default UserRegister