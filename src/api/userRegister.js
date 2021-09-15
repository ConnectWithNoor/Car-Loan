export const userRegister = userInfo => {
    const { email, password, confirmPassword } = userInfo;
    return new Promise((resolve, reject) => {
        if (email === '' || password === '' || confirmPassword === '') {
            return setTimeout(() => {
                reject({ "error": "Please provide all the fields" })
            }, 1000)
        } else if (password !== confirmPassword) {
            return setTimeout(() => {
                reject({ "error": "Password does not match" })
            }, 1000)
        }

        resolve({ "isRegistered": true })
    })
}