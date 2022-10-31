import { UserTypes } from "../pages/utils"
const LOCAL_URL = 'http://localhost:3000'
//all users
export const getUsers = async () => {
   const response =  await fetch(`${LOCAL_URL}/api/users/`) 
   const json = await response.json() 
   return json;
}

//single user
export const getUser = async (userId:string) =>{
   const response = await fetch(`${LOCAL_URL}/api/users/${userId}`)
   const json = await response.json()

   if(json) return json;
   return {}
}

//add user
export async function addUser(formData:UserTypes){
   try{
      const Options ={
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData)
      }
      const response = await fetch(`${LOCAL_URL}/api/users/`, Options)
      const json = await response.json()
      return json

   }catch(err){
      return err
   }
}

//update user

export async function updateUser(formData:UserTypes, userId:string){
   try{
      const Options ={
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData)
      }
      const response = await fetch(`${LOCAL_URL}/api/users/${userId}`, Options)
      const json = await response.json()
      return json

   }catch(err){
      return err
   }
}

//delete user
export async function deleteUser(userId:string){
   try{
      const Options ={
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
      }
      const response = await fetch(`${LOCAL_URL}/api/users/${userId}`, Options)
      const json = await response.json()
      return json

   }catch(err){
      return err
   }
}