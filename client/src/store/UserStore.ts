export default class UserStore {
   private _isAuth = true;
   private _user = {};

   get isAuth(){
      return this._isAuth
   }
   get user(){
      return this._user
   }
   setIsAuth(bool: any){
      this._isAuth = bool
   }
   setUser(user: any){
      this._user = user
   }
}