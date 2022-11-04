import { BiPlusCircle } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import Success from "./success";
import Error from "./error";
import { UserTypes } from "../pages/utils";
import { useQueryClient, useMutation } from 'react-query'
import { addUser, getUsers } from "../lib/fetcher"
import { dataForForms } from "../pages/utils"
import { motion } from 'framer-motion'



export default function AddUserForm({ formData, setFormData }: dataForForms) {

  const queryClient = useQueryClient()

  const addMutation = useMutation(addUser, {
    onSuccess: () => queryClient.prefetchQuery('users', getUsers)
  })


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(formData).length == 0) return console.log("No data in form");
    let { firstName, lastName, email, phone, date, status }: UserTypes = formData;

    const model: UserTypes = {
      firstName, lastName,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10)}.jpg`,
      email, phone, date, status: status ?? "Active"
    }
    addMutation.mutate(model)
    console.log(JSON.stringify(formData));
  };

  if (addMutation.isLoading) return <div> Loading... </div>
  if (addMutation.isError) return <Error message={"Woops a problem occured!"} />
  if (addMutation.isSuccess) return <Success message={"Welcome to this new teamate"} />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 transition-all duration-500 visible"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
      {/* Modal Content */}
      <main className="flex justify-center items-center h-screen w-screen modal-wrapper">
        <div className="bg-white-rose dark:bg-white-green rounded z-30">
          <div className="border-b text-center pt-3 pb-3 border-gray-400">Add Teamate</div>
          <form className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-5/6 gap-5 pt-5" onSubmit={handleSubmit}>
            <div className="input-type">
              <input
                type="text"
                name="firstName"
                onChange={setFormData}
                className="w-full px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white "
                placeholder="Firstname"
                required
              />
            </div>
            <div className="input-type">
              <input
                type="text"
                onChange={setFormData}
                name="lastName"
                className="w-full px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white"
                placeholder="Lastname"
                required
              />
            </div>
            <div className="input-type">
              <input
                type="email"
                onChange={setFormData}
                name="email"
                className="w-full px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white "
                placeholder="E-mail"
                required
              />
            </div>
            <div className="input-type">
              <input
                type="text"
                onChange={setFormData}
                name="phone"
                className="w-full px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white "
                placeholder="Phone Number"
              />
            </div>
            <div className="input-type">
              <input
                type="date"
                onChange={setFormData}
                name="date"
                className="w-full px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white "
                placeholder="Birthday"
                required
              />
            </div>

            <div className="flex items-center justify-start pl-1 gap-2 ">
              <div className="form-check">
                <input
                  type="radio"
                  defaultChecked
                  onChange={setFormData}
                  name="status"
                  value="Active"
                  id="radioDefault1"
                  className="form-check-input appearance-none rounded-full border-2 w-4 h-4 border-rose-200 dark:border-green-mid checked:bg-rose-400 dark:checked:bg-green-low bg-white-rose focus:ring-gray-400  focus:ring-2 cursor-pointer transition duration-200"
                />
                <label htmlFor="radioDefault1" className="inline-block text-gray-800 px-1">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  onChange={setFormData}
                  name="status"
                  value="Inactive"
                  id="radioDefault2"
                  className="form-check-input appearance-none rounded-full border-2 w-4 h-4 border-rose-200 dark:border-green-mid checked:bg-rose-400 dark:checked:bg-green-low bg-white-rose focus:ring-gray-400 focus:ring-2 cursor-pointer transition duration-200"
                />
                <label htmlFor="radioDefault2" className="inline-block text-gray-800 px-1 ">
                  Inactive
                </label>
              </div>
            </div>
            <div className="flex flex-row-reverse lg:col-start-3 lg:col-end-3 sm:col-start-1 md:col-start-2 md:col-end-2 pb-5">
              <button className="rippleGreen bg-green-01 flex justify-center text-md w-2/3 text-white-rose px-4 py-2 rounded ">
                <span className=" flex gap-1">
                  <BiPlusCircle size={22}></BiPlusCircle>
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </motion.div>
  );
}