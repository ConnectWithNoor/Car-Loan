export const userRegister = userInfo => {
    const { email, password, confirmPassword } = userInfo;
    const DELAY_TIME = 1000;
    return new Promise((resolve, reject) => {
        if (email === '' || password === '' || confirmPassword === '') {
            return setTimeout(() => {
                reject({ "error": "Please provide all the fields" })
            }, DELAY_TIME)
        } else if (password !== confirmPassword) {
            return setTimeout(() => {
                reject({ "error": "Password does not match" })
            }, DELAY_TIME)
        }

        setTimeout(() => {
            resolve({ "isRegistered": true })
        }, DELAY_TIME)
    })
}