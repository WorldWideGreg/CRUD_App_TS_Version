import { BiEdit } from "react-icons/bi";
import Success from "./success";
import { UserTypes } from "../pages/utils";
import { dataForForms } from "../pages/utils"
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, getUsers, updateUser } from "../lib/fetcher";



export default function UpdateUserForm({ formId, formData, setFormData }: dataForForms) {

  const queryClient = useQueryClient();  

  const { isLoading, isError, data, error } = useQuery(['users', formId], () => getUser(formId))

  const UpdateMutation = useMutation((newData:any) => updateUser(formId,newData),{ 
    onSuccess:  async(data) => {
      //queryClient.setQueryData('users', (old:any) => [data])
      queryClient.prefetchQuery('users', getUsers)
    }
  })

  if (isLoading) return <div> Loading... </div>
  if (isError) return <div> Error! </div>

  const { firstName, lastName, avatar, email, salary, date, status }: UserTypes = data

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let updated = Object.assign({},data,formData)
    
    console.log(updated);

    await UpdateMutation.mutate(updated)
  };



  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstName"
          onChange={setFormData}
          defaultValue={firstName}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
          required
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={lastName}
          name="lastName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
          required
        />
      </div>
      <div className="input-type">
        <input
          type="email"
          onChange={setFormData}
          defaultValue={email}
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={salary}
          name="salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
          required
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          defaultValue={date}
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          required
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            required
            defaultChecked={status === "Active"}
            onChange={setFormData}
            name="status"
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            required
            defaultChecked={status !== "Active"}
            onChange={setFormData}
            name="status"
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-1/4 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-blue-200 hover:border-blue-600 hover:text-gray-800">
        Update
        <span className="px-1">
          {" "}
          <BiEdit size={22}></BiEdit>{" "}
        </span>
      </button>
    </form>
  );
}
