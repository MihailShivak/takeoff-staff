import { makeAutoObservable } from "mobx";

export default class UserStore {
   constructor(){
      this.isAuth = true;
      this.user = {};
      makeAutoObservable(this)
   }


   get isAuth(): any{
      return this.isAuth
   }
   get user(): any{
      return this.user
   }
   set isAuth(bool: any){
      this.isAuth = bool
   }
   set user(user: any){
      this.user = user
   }
}