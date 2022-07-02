import {
    ReqActionTypes,
    reqResponseInterface,
    FAILURE_REQUEST,
    SUCCESS_REQUEST,
    UPDATE_MESSAGES, messagesInterface
} from "./type";

interface reqsStateInterface {
    reqs: reqResponseInterface,
    messages: messagesInterface[],
    buttons:any
}
const initialReqState: reqsStateInterface = {
    reqs: {
        question:"",
        answers:null
    },
    messages: [],
    buttons:[]
};

export function chatReducer(state: reqsStateInterface = initialReqState, action: ReqActionTypes):
    reqsStateInterface {

    switch (action.type) {
        case SUCCESS_REQUEST: {
            return {
                ...state,
                reqs: action.payload,
            };
        }
        // case FAILURE_REQUEST: {
        //     return {
        //         ...state,
        //         error: action.payload.error
        //     };
        // }
        case UPDATE_MESSAGES: {

            return {
                ...state,
                buttons:action.payload.answerButton,
                messages: [...state.messages,
                    ...[{label:action.payload.label,
                        messageSender:action.payload.messageSender}]
                    ]
            }
        }
        default:
            return state
    }
};
