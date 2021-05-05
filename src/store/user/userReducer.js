import * as actions from'./userAction';

const user = (state = {
    data : null,
    token: null,
    isLogged : false,
    state : null,
    error : null
},action) => {

    switch(action.type){
        case actions.LOGIN : {
            let data = action.data;
            let token = action.token;
            return {
                ...state,
                data,
                token,
                isLogged: true,
            };
        }
        case actions.LOGOUT: {
            return {
                userId : null,
                token: null,
                isLogged : false,
                state : null,
                error : null
            }
        }

        default : {
            return state
        }
    }
}

export default user