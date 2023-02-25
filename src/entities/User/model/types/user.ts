export interface User {
    id:string;
    name:string;
}

export interface UserSchema {
    authData?:User;
}
