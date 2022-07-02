
import {AuthActionTypes, authAllResponseInterface, authResponseInterface, FAILURE_AUTH, SUCCESS_AUTH} from "./type";

const initialAuthState: authResponseInterface = {
    sessionId: "",
    question: null,

};

export function authReducer(state: authResponseInterface = initialAuthState, action: AuthActionTypes):
    authResponseInterface {

    switch (action.type) {
        case SUCCESS_AUTH: {
            return {
                ...state,
                question: action.payload.question,
                sessionId: action.payload.sessionId,
            };
        }
        // case FAILURE_AUTH: {
        //     return {
        //         ...state,
        //         error: action.payload.error
        //     };
        // }
        default:
            return state
    }
};
