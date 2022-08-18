export default class ContactsStore{
   private _contacts = [];
   get contacts(){
      return this._contacts;
   }
   set contacts(contacts){
      this._contacts = contacts
   }

}