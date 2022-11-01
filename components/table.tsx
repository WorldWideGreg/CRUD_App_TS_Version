import UserRow from "./userRow";
import { getUsers } from "../lib/fetcher"
import { useQuery} from "react-query";
import { UserTypes } from "../pages/utils";

export default function Table() { 

  const {isLoading, isError, data, error} = useQuery('users', getUsers)  
    if (isLoading) return <div>Loading your perfect team...</div>
    if (isError) return <div><>Error:{error}</></div>

  return (
    <table className="min-w-full max-w-full text-center table-auto border border-gray-400">
      <thead>
        <tr className="bg-slate-600 text-center">
          <th className="px-15 py-2">
            <span className="text-blue-300">Name</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-blue-300">E-mail</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-blue-300">Phone Number</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-blue-300">Birthday</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-blue-300">Status</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-blue-300">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200 min-w-full max-w-full">        
        {
          data.map((UserData:UserTypes,id:string)=> <UserRow {...UserData} key={id} />)
       }        
      </tbody>
    </table>
  );
}
