import { userRegister } from './../../api/userRegister'

export const userRegistration = async payload => {
    try {
        const checker = await userRegister(payload);
        return checker;
    } catch (error) {
        console.error(error);
    }
}