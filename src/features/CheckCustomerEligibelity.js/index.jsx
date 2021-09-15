import React from 'react'
import InputField from '../../components/InputField';
import { FaDollarSign } from 'react-icons/fa'
import Button from './../../components/Button';

const CheckCustomerEligibility = () => {
    return (
        <main className="my-0 mx-auto flex justify-between items-center w-10/12 font-nunito  p-7">
            <section className="flex justify-between flex-col w-7/12 h-96">
                <div className="font-extrabold text-4xl pb-5 border-b-4 uppercase">
                    <h1>Loan mate</h1>
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
            <section className="p-8 w-1/2 rounded-md shadow-xl">
                <h3 className="border-b-2 border-gray-1x pb-2 font-bold text-4xl">Loan Form</h3>
                <form className="pt-8">
                    <InputField
                        labelFor="purchasePrice"
                        labelText="Auto Purchase Price"
                        type="text"
                        placeholder="25,000.00"
                        Icon={FaDollarSign}
                        name="purchasePrice"
                        id="purchasePrice"
                    // value={}
                    // onChange
                    />

                    <InputField
                        labelFor="autoMake"
                        labelText="Auto Make"
                        type="text"
                        placeholder="Toyota"
                        name="autoMake"
                        id="autoMake"
                    // value={}
                    // onChange
                    />

                    <InputField
                        labelFor="autoModel"
                        labelText="Auto Model"
                        type="text"
                        placeholder="2021"
                        name="autoModel"
                        id="autoModel"
                    // value={}
                    // onChange
                    />


                    <InputField
                        labelFor="yearlyIncome"
                        labelText="User Estimated Yearly Income"
                        type="text"
                        placeholder="25,000.00"
                        Icon={FaDollarSign}
                        name="yearlyIncome"
                        id="yearlyIncome"
                    // value={}
                    // onChange
                    />

                    <InputField
                        labelFor="yearlyIncome"
                        labelText="User Estimated Credit Score"
                        type="text"
                        placeholder="621"
                        name="yearlyIncome"
                        id="yearlyIncome"
                    // value={}
                    // onChange
                    />

                    <Button btnText="Check Eligibility" btnType="submit" />
                </form>
            </section>
        </main>
    )
}

export default CheckCustomerEligibility;