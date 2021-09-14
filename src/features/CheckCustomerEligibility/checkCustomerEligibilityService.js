import { customerEligibility } from './../../api/customerEligibility';

export const checkCustomerEligibility = async payload => {
    try {
        const checker = await customerEligibility(payload);
        return checker;
    } catch (error) {
        console.error(error);
    }
}