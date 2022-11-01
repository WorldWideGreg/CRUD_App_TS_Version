import { ChangeEventHandler, useReducer } from "react";
import { BiPlusCircle } from "react-icons/bi";
import Success from "./success";
import Error from "./error";
import { UserTypes } from "../pages/utils";
import { useQueryClient, useMutation } from 'react-query'
import { addUser, getUsers } from "../lib/fetcher"
import { dataForForms } from "../pages/utils"

export default function AddUserForm({ formData, setFormData }: dataForForms) {

  const queryClient = useQueryClient()

  const addMutation = useMutation(addUser, {
    onSuccess: () => queryClient.prefetchQuery('users', getUsers)
  })


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(formData).length == 0) return console.log("No data in form");
    let { firstName, lastName, email, salary, date, status }: UserTypes = formData;

    const model: UserTypes = {
      firstName, lastName,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10)}.jpg`,
      email, salary, date, status: status ?? "Active"
    }
    addMutation.mutate(model)
    console.log(JSON.stringify(formData));
  };

  if (addMutation.isLoading) return <div> Loading... </div>
  if (addMutation.isError) return <Error message={"Woops a problem occured!"} />
  if (addMutation.isSuccess) return <Success message={"Welcome to this new teamate"} />

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstName"
          onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
          required
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
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
          name="salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="birthday"
          required
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            required
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
      <button className="flex justify-center text-md w-1/4 bg-blue-500 text-white px-4 py-2 border rounded-md hover:bg-blue-200 hover:border-blue-600 hover:text-gray-800">
        Add{" "}
        <span className="px-1">
          {" "}
          <BiPlusCircle size={22}></BiPlusCircle>{" "}
        </span>
      </button>
    </form>
  );
}