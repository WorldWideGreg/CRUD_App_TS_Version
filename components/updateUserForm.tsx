import { BiEdit } from "react-icons/bi";
import Success from "./success";
import { UserTypes } from "../pages/utils";
import { dataForForms } from "../pages/utils"
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, getUsers, updateUser } from "../lib/fetcher";



export default function UpdateUserForm({ formId, formData, setFormData }: dataForForms) {

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(['users', formId], () => getUser(formId))

  const UpdateMutation = useMutation((newData: any) => updateUser(formId, newData), {
    onSuccess: async (data) => {
      //queryClient.setQueryData('users', (old:any) => [data])
      queryClient.prefetchQuery('users', getUsers)
    }
  })

  if (isLoading) return <div> Loading... </div>
  if (isError) return <div> Error! </div>

  const { firstName, lastName, avatar, email, phone, date, status }: UserTypes = data

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let updated = Object.assign({}, data, formData)

    console.log(updated);

    await UpdateMutation.mutate(updated)
  };



  return (
    <form className="mx-auto grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstName"
          onChange={setFormData}
          defaultValue={firstName}
          className="w-full px-5 py-3 focus:outline-none rounded placeholder-gray-400  border-2 border-rose-poudre bg-white-rose"
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
          className="w-full px-5 py-3 focus:outline-none rounded placeholder-gray-400  border-2 border-rose-poudre bg-white-rose"
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
          className="w-full px-5 py-3 focus:outline-none rounded placeholder-gray-400  border-2 border-rose-poudre bg-white-rose"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={phone}
          name="phone"
          className="w-full px-5 py-3 focus:outline-none rounded placeholder-gray-400  border-2 border-rose-poudre bg-white-rose"
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          defaultValue={date}
          name="date"
          className="w-full px-5 py-3 focus:outline-none rounded placeholder-gray-400 border-2 border-rose-poudre bg-white-rose"
          required
        />
      </div>

      <div className=" border-2 border-rose-poudre bg-white-rose rounded px-10 gap-10 flex items-center">
        <div className="form-check">
          <input
            type="radio"
            required
            defaultChecked={status === "Active"}
            onChange={setFormData}
            name="status"
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-900 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button className="duration-500 flex justify-center text-sm w-1/3 bg-teal-2 text-white-rose px-4 py-2 rounded hover:bg-green-01 ">
        Save
        <span className="px-1">
          {" "}
          <BiEdit size={22}></BiEdit>{" "}
        </span>
      </button>
    </form>
  );
}
