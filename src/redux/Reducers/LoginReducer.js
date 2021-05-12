const inititalState = {
    userNameInp : '',
    passWordInp : '',
}

const LoginReducer = (state = inititalState, action) => {
    switch(action.type){
        case 'LOGGOUT':
            return state
        case 'LOGIN':
            return {
                userNameInp: action.payload.userName,
                passWordInp: action.payload.passWord,
            }
        default:
            return state
    }
}

export default LoginReducer