import axios from 'axios';
import {ActionCreator} from "redux";

import {
    ReqActionTypes,
    reqResponseInterface,
    errorInterface,
    FAILURE_REQUEST,
    SUCCESS_REQUEST,
    SEND_REQUEST, messagesInterface, UPDATE_MESSAGES
} from "./type";

import {ConvertAnswerToArray} from "../../utility/functionHelper";
import {BASE_URL} from '@env';

const request: ActionCreator<ReqActionTypes> = () => {
    return { type: SEND_REQUEST };
}

const requestSuccess: ActionCreator<ReqActionTypes>  = (response:reqResponseInterface) => {
    return { type: SUCCESS_REQUEST , payload: response};
}
const requestFailure: ActionCreator<ReqActionTypes> = (errors: errorInterface) => {
    return { type: FAILURE_REQUEST, payload: errors };
}
const updateMessages: ActionCreator<ReqActionTypes>  = (response:messagesInterface) => {
    return { type: UPDATE_MESSAGES , payload: response};
}
export function requestUserAnswer({ responseId,token }: { responseId: String,token:string }) {
    return (dispatch: (arg0: ReqActionTypes) => void)=> {
        dispatch(request());
        return axios.post(`${BASE_URL}/responses`,{responseId:responseId},{
            headers: {
                'content-type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
            .then(
                response => {
                    console.log(  "requestUserAnswer",response.data)
                    dispatch(requestSuccess(response.data))
                    dispatch(addMessage({
                        answerButton:ConvertAnswerToArray(response.data.answers),
                        label: response.data.question, messageSender: ""}))
                },
                error => {
                    console.log(  "err",error,token,responseId)
                    dispatch(requestFailure('Server error.'))
                })
    }
}

export function addMessage({ label,messageSender ,answerButton}: { label: string,messageSender:string,answerButton:any }) {
    return (dispatch: (arg0: ReqActionTypes) => void)=> {
        console.log(  "addMessage",label,messageSender)
          dispatch(updateMessages({ label,messageSender,answerButton }))
    }
}
