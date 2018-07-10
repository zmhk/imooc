const LOGGIN = "LOGGIN";
const LOGOUT = "LOGOUT";

//reducer

export function auth(state ={isAuth:false,user:'李云龙'}, action) {
    switch (action.type) {
        case LOGGIN:
            return {...state,isAuth:true};
        case LOGOUT:
            return {...state,isAuth:false};
        default:
            return state;
    }
}

// action creater

export function login() {
    return {
        type: LOGGIN
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}