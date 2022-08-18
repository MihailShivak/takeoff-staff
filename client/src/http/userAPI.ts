import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode';

export const registration = async(username: any, password: any) => {
   const {data} = await $host.post('api/user/registration', {username, password, role: 'ADMIN'})
   localStorage.setItem('token', data.token)
   return jwt_decode(data.token)
}
export const login = async(username: any, password: any) => {
   const {data} = await $host.post('api/user/login', {username, password})
   localStorage.setItem('token', data.token)
   return jwt_decode(data.token)
}

export const check = async() => {
   const {data} = await $authHost.get('api/user/auth')
   localStorage.setItem('token', data.token)
   return jwt_decode(data.token)
}