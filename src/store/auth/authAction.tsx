import axios from 'axios';
import {ActionCreator} from "redux";

import { AuthActionTypes,
    authResponseInterface,
    errorInterface,
    DO_AUTH,
    FAILURE_AUTH,
    SUCCESS_AUTH
} from "./type";

import {addMessage} from "../chat/chatAction";
import {ReqActionTypes} from "../chat/type";
import {ConvertAnswerToArray} from '../../utility/functionHelper';
import {BASE_URL} from '@env';

const request: ActionCreator<AuthActionTypes> = () => {
    return { type: DO_AUTH };
}
const authSuccess: ActionCreator<AuthActionTypes>  = (response:authResponseInterface) => {
    return { type: SUCCESS_AUTH , payload: response};
}
const authFailure: ActionCreator<AuthActionTypes> = (errors: errorInterface) => {
    return { type: FAILURE_AUTH, payload: errors };
}

export function authToServer() {
    return (dispatch: (arg0: AuthActionTypes) => void)=> {
        dispatch(request());
        console.log(  "auth",`${BASE_URL}/auth`)
        return axios.post(`${BASE_URL}/auth`,{},{
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(
                (response) => {

                    {
                        let question = response.data.question.question
                        let answers = response.data.question.answers
                        let greeting= response.data.question.greeting[0]
                        dispatch(authSuccess(response.data))
                        dispatch(addMessage({
                            answerButton: [],
                            label: greeting, messageSender: ""}))
                        dispatch(addMessage({
                            answerButton:ConvertAnswerToArray(answers),
                            label: question, messageSender: ""}))

                    }
                },
                error => {

                    dispatch(authFailure('Server error.'))
                })
    }
}

