import React from 'react'
import InputField from '../../components/InputField';
import { FaDollarSign } from 'react-icons/fa'
import Button from '../../components/Button';
import { useForm } from "react-hook-form";

const CheckCustomerEligibility = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });

    return (
        <main className="flex justify-between items-center w-10/12 p-7 font-nunito h-full">
            <section className="flex justify-between flex-col w-7/12 h-3/5 ">
                <div className="font-extrabold text-4xl uppercase">
                    <h1>Loan mate</h1>
                    <div className="h-1 w-2/5 bg-gray-2x mt-3"></div>
                </div>
                <div>
                    <h3 className="mb-6 font-bold text-3xl">Marketing Text Heading</h3>
                    <p className="text-xl font-medium leading-10 w-11/12 tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis iusto, deleniti quam sed
                        nihil pariatur nam consequatur adipisci cumque perspiciatis velit dolores maiores placeat sint id porro
                        est et ut distinctio fuga culpa cum consequuntur facere? Quaerat, quibusdam nobis. Lorem, ipsum dolor sit amet
                    </p>
                </div>
            </section>
            <section className="bg-gray-2x p-8 w-2/4 rounded-md shadow-xl">
                <h3 className="border-b-2 border-gray-1x pb-2 font-bold text-4xl">Loan Form</h3>
                <form className="pt-8" onSubmit={handleSubmit(data => console.log(data))}>
                    <InputField
                        labelFor="purchasePrice"
                        labelText="Auto Purchase Price"
                        type="text"
                        placeholder="25,000.00"
                        Icon={FaDollarSign}
                        id="purchasePrice"
                        inputRef={{ ...register("purchasePrice", { required: true }) }}
                        error={`${errors.purchasePrice?.type === 'required' ? "Required" : ''}`}
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
                        inputRef={{ ...register("autoModel", { required: true }) }}
                        error={`${errors.autoModel?.type === 'required' ? "Required" : ''}`}
                    />


                    <InputField
                        labelFor="yearlyIncome"
                        labelText="User Estimated Yearly Income"
                        type="text"
                        placeholder="25,000.00"
                        Icon={FaDollarSign}
                        id="yearlyIncome"
                        inputRef={{ ...register("yearlyIncome", { required: true }) }}
                        error={`${errors.yearlyIncome?.type === 'required' ? "Required" : ''}`}
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