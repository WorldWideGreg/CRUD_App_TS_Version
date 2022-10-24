import UserRow from "./userRow";
import { getUser } from "../lib/fetcher"
import { useQuery} from "react-query";
import { UserTypes } from "../pages/utils";
 
export default function Table() {

  
  const {isLoading, isError, data, error} = useQuery('users', getUser)  
    if (isLoading) return <div>Loading your perfect team...</div>
    if (isError) return <div><>Error:{error}</></div>


  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-15 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-gray-200">E-mail</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-15 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {
          data.map((UserData:UserTypes,id:string)=> <UserRow {...UserData} key={id} />)
       }
        
      </tbody>
    </table>
  );
}
