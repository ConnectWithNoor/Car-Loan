import { DELAY_TIME, PURCHASE_PRICE_LIMIT, MINIMUM_CREDIT } from './../constant/constant';

export const customerEligibility = params => {

    const oneFifthOfIncome = (yearlyIncome) => yearlyIncome / 5;

    return new Promise((resolve, reject) => {
        const { purchasePrice, autoMake, autoModel, yearlyIncome, creditScore } = params;

        if (!purchasePrice || !autoMake || !autoModel || !yearlyIncome || !creditScore) {
            return setTimeout(() => {
                reject({ "error": "Please provide all the correct fields", "status": "400" })
            }, DELAY_TIME)
        } else if (purchasePrice > PURCHASE_PRICE_LIMIT) {
            return setTimeout(() => {
                reject({ "error": `Auto Purchase price can not be more than ${PURCHASE_PRICE_LIMIT}`, "status": "400" })
            }, DELAY_TIME)
        } else if (purchasePrice > oneFifthOfIncome(yearlyIncome) || creditScore < MINIMUM_CREDIT) {
            return setTimeout(() => {
                resolve({ "isEligible": false })
            }, DELAY_TIME)
        }

        return setTimeout(() => {
            resolve({ "isEligible": true })
        }, DELAY_TIME)
    })
}