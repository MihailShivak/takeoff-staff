import { $authHost, $host } from ".";

export const createContact = async(contact: any) => {
   const {data} = await $authHost.post('apy/contact', contact)
   return data
}
export const fetchContact = async() => {
   const {data} = await $host.get('apy/contact')
   return data
}