export const LOGIN = 'login';
export const LOGOUT = 'logout';


export const login = (data,token) => {
    return {
        type: LOGIN,
        data,
        token
    }
}
export const logout = () => {
    return {
        type: LOGOUT,
    }

}
