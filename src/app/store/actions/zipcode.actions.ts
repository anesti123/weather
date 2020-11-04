import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
    AddZipcode = '[Zipcode] Add Zipcode',
    RemoveCity = '[Zipcode] Remove Zipcode'
}

export class AddZipcode implements Action {
    readonly type = ZipcodeActionTypes.AddZipcode;
    constructor(public zipcode: string){}
}

export class RemoveCity implements Action {
    readonly type = ZipcodeActionTypes.RemoveCity;
    constructor(public zipcode: string){}
}


export type ZipcodeActions = AddZipcode | RemoveCity;
