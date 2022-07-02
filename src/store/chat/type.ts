export const SEND_REQUEST = 'SEND_REQUEST';
export const FAILURE_REQUEST= 'FAILURE_REQUEST';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

export interface IReqAction {
    type:  typeof SEND_REQUEST;

}
export interface IReqSuccessAction {
    type: typeof SUCCESS_REQUEST;
    payload:reqResponseInterface
}
export interface IReqFailureAction {
    type: typeof FAILURE_REQUEST;
    payload:errorInterface
}
export interface IMessagesAction {
    type: typeof UPDATE_MESSAGES;
    payload:messagesInterface
}

export interface errorObj {
    error: {
        type:  string;
        info: {
            message: string;
        }
    }
}
export interface messagesInterface{
    label: string;
    messageSender:string;
}
export interface errorInterface{
    success: boolean;
    error:errorObj;
}
export interface reqResponseInterface {
    question: string;
    answers:any;
}
export interface reqAllResponseInterface {
    question: string;
    answers:any;
    error:errorObj |null;
}

export type ReqActionTypes = IReqAction | IReqSuccessAction | IReqFailureAction |IMessagesAction;
