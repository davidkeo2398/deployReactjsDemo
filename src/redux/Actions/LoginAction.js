export const login = (userInfo) => {
    return{
        type: 'LOGIN',
        payload: userInfo,
    }
}

export const loggout = (LoginReducer) => {
    return{
        type: 'LOGGOUT',
        payload: LoginReducer,
    }
}