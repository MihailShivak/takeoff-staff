import { $authHost, $host } from "./index";

export const createContact = async(contact: any) => {
   const {data} = await $authHost.post('api/contacts', contact)
   return data
}
export const fetchContact = async(name: any) => {
   const {data} = await $host.get('api/contacts', {params:{
      name
   }})
   return data
}