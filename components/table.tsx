import UserRow from "./userRow";
import { getUsers } from "../lib/fetcher"
import { useQuery } from "react-query";
import { UserTypes } from "../pages/utils";

export default function Table() {

  const { isLoading, isError, data, error } = useQuery('users', getUsers)
  if (isLoading) return <div>Loading your perfect team...</div>
  if (isError) return <div><>Error:{error}</></div>

  return (
    <div className="min-w-max userTable">
      <table className="min-w-full table-auto text-left">
        <thead>
          <tr className="bg-white-rose border-b border-gray-300 dark:bg-green-upper dark:border-gray-700">
            <th className="pl-3 py-2">
              <span className="text-gray-500 dark:text-gray-300 font-extrabold px-2">Name</span>
            </th>
            <th className=" ">
              <span className="text-gray-500 dark:text-gray-300 font-extrabold">E-mail</span>
            </th>
            <th className=" ">
              <span className="text-gray-500 dark:text-gray-300 font-extrabold">Phone Number</span>
            </th>
            <th className=" ">
              <span className="text-gray-500 dark:text-gray-300 font-extrabold">Birthday</span>
            </th>
            <th className="">
              <span className="text-gray-500 dark:text-gray-300 font-extrabold">Status</span>
            </th>
            <th className="">
              <span className="text-gray-500 dark:text-gray-300 font-extrabold">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((UserData: UserTypes, id: string) => <UserRow {...UserData} key={id} />)
          }
        </tbody>
      </table>
    </div>
  );
}
