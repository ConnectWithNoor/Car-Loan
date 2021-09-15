import React, { useEffect } from 'react'
import InputField from '../../components/InputField';
import { FaDollarSign } from 'react-icons/fa'
import Button from '../../components/Button';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerEligibilityThunk } from './checkCustomerEligibilityThunk';
import MarketingTag from './../../components/MarketingTag'
import { BsStopwatch } from 'react-icons/bs'
import { TiMessages } from 'react-icons/ti'
import { useHistory } from 'react-router-dom';

import {
    selectIsEligible, selectIsLoading
} from './checkCustomerEligibilitySlice';

const CheckCustomerEligibility = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });

    const dispatch = useDispatch();
    const isEligible = useSelector(selectIsEligible);
    // const isLoading = useSelector(selectIsLoading);
    const history = useHistory()


    const onSubmit = formData => {
        dispatch(fetchCustomerEligibilityThunk(formData))
    }

    useEffect(() => {
        if (isEligible !== null) {
            if (isEligible) {
                history.push('/register')
            } else {
                history.push('/disqualification')
            }
        }
    }, [isEligible, history])

    // useEffect(() => {
    //     showLoader
    // }, [isLoading])

    return (
        <main className="flex justify-between items-center w-10/12 p-7 font-nunito h-full">
            <section className="flex flex-col justify-center w-7/12 h-3/5 ">
                <div>
                    <h3 className="mb-6 font-bold text-3xl">Marketing Text Heading</h3>
                    <p className="text-xl font-medium leading-10 w-11/12 tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. velit dolores maiores placeat sint id porro
                        est et ut distinctio fuga culpa cum consequuntur facere? Quaerat, quibusdam nobis. Lorem, ipsum dolor sit amet
                    </p>
                </div>
                <div className="mt-20">
                    <MarketingTag Icon={BsStopwatch} title="Lorem Ipsum" description="dolor sit amet consectetur adipisicing elit. velit dolores maio" />
                    <MarketingTag Icon={TiMessages} title="Lorem Ipsum" description="dolor sit amet consectetur adipisicing elit. velit dolores maio" />
                </div>
            </section>
            <section className="bg-gray-2x p-5 w-2/5 rounded-md shadow-xl">
                <h3 className="border-b-2 border-gray-1x pb-2 font-bold text-3xl">Loan Form</h3>
                <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        labelFor="purchasePrice"
                        labelText="Auto Purchase Price"
                        type="text"
                        placeholder="25,000.00"
                        Icon={FaDollarSign}
                        id="purchasePrice"
                        inputRef={{ ...register("purchasePrice", { required: true, pattern: /^[0-9]+$/ }) }}
                        error={`${errors.purchasePrice?.type === 'required' ? "Required" : errors.purchasePrice?.type === 'pattern' ? 'Please type numbers only' : ''}`}
                    />


                    <InputField
                        labelFor="autoMake"
                        labelText="Auto Make"
                        type="text"
                        placeholder="Toyota"
                        id="autoMake"
                        inputRef={{ ...register("autoMake", { required: true }) }}
                        error={`${errors.autoMake?.type === 'required' ? "Required" : ''}`}
                    />

                    <InputField
                        labelFor="autoModel"
                        labelText="Auto Model"
                        type="text"
                        placeholder="2021"
                        id="autoModel"
                        inputRef={{ ...register("autoModel", { required: true, pattern: /^[0-9]+$/ }) }}
                        error={`${errors.autoModel?.type === 'required' ? "Required" : errors.autoModel?.type === 'pattern' ? 'Please type numbers only' : ''}`}
                    />


                    <InputField
                        labelFor="yearlyIncome"
                        labelText="User Estimated Yearly Income"
                        type="text"
                        placeholder="25,000.00"
                        Icon={FaDollarSign}
                        id="yearlyIncome"
                        inputRef={{ ...register("yearlyIncome", { required: true, pattern: /^[0-9]+$/ }) }}
                        error={`${errors.yearlyIncome?.type === 'required' ? "Required" : errors.yearlyIncome?.type === 'pattern' ? 'Please type numbers only' : ''}`}
                    />

                    <InputField
                        labelFor="creditScore"
                        labelText="User Estimated Credit Score"
                        type="number"
                        placeholder="621"
                        id="creditScore"
                        inputRef={{ ...register("creditScore", { required: true, min: 300, max: 850 }) }}
                        error={`${(errors.creditScore?.type === 'required' ? "Required" : '')
                            || (errors.creditScore?.type === 'min' ? "Number can't be less than 300" : '')
                            || (errors.creditScore?.type === 'max' ? "Number can't be greater than 850" : '')} `}
                    />

                    <Button btnText="Check Eligibility" btnType="submit" />
                </form>
            </section>
        </main>
    )
}

export default CheckCustomerEligibility;