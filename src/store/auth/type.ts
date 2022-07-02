export const   DO_AUTH = 'DO_AUTH';
export const FAILURE_AUTH = 'FAILURE_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';

export interface IAuthAction {
    type:  typeof DO_AUTH;

}
export interface IAuthSuccessAction {
    type: typeof SUCCESS_AUTH;
    payload:authResponseInterface
}
export interface IAuthFailureAction {
    type: typeof FAILURE_AUTH;
    payload:errorInterface
}
 interface labelInterface {
    label: string;
}
 interface answerInterface {
    good:labelInterface;
    okay:labelInterface;
    bad:labelInterface;
}
export interface errorObj {
    error: {
        type:  string;
        info: {
            message: string;
        }
    }
}
export interface errorInterface{
    success: boolean;
    error:errorObj;
}
export interface questionInterface {
    greeting: string[],
    question: string;
    answers:answerInterface;
}
export interface authResponseInterface {
    sessionId: string
    question: questionInterface | null
}
export interface authAllResponseInterface {
    sessionId: string;
    question: questionInterface | null;
    error:errorObj |null;
}

export type AuthActionTypes = IAuthAction | IAuthSuccessAction | IAuthFailureAction;
