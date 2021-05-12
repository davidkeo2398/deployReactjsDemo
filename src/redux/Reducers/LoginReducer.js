const inititalState = {
    userNameInp: '',
    passWordInp: '',
    staTus: false,
}

const LoginReducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'LOGOUT':
            localStorage.clear()
            return {
                userNameInp: action.payload,
                passWordInp: action.payload,
                staTus: false,
            }
        case 'LOGIN':
            const stat = true
            localStorage.setItem('status', stat)
            return {
                userNameInp: action.payload.userName,
                passWordInp: action.payload.passWord,
                staTus: stat,
            }
        default:
            return state
    }
}

export default LoginReducer