import {makeAutoObservable} from 'mobx';

export default class ContactsStore{
   constructor(){
      this.contacts = [];
      makeAutoObservable(this)
   }

   set contacts(contacts){
      this.contacts = contacts
   }

   get contacts(): any{
      return this.contacts;
   }
}