import { BiEdit } from "react-icons/bi";
import Success from "../modals/success";
import Error from "../modals/error";
import { UserTypes } from "../../pages/utils";
import { dataForForms } from "../../pages/utils"
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, getUsers, updateUser } from "../../lib/fetcher";
import { motion } from "framer-motion";
import { dropIn } from "../modals/ModalAnimations";
import { RiCloseCircleLine } from 'react-icons/ri'
import { toggleChangeAction } from "../../redux/reducer";
import { useDispatch } from "react-redux";

export default function UpdateUserForm({ formId, formData, setFormData }: dataForForms) {

  const dispatch = useDispatch()

  const OnClose = () => {
    dispatch(toggleChangeAction())
  }

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

  if (UpdateMutation.isLoading) return <div> Loading... </div>
  if (UpdateMutation.isError) return <Error message={"Woops a problem occured!"} />
  if (UpdateMutation.isSuccess) return <Success message={"Teamate Updated!"} />


  return (
    <motion.div
      className="backdrop bg-filter bg-black bg-opacity-70 fixed inset-0 w-full h-full z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal fixed inset-0 z-30 transition-all duration-500 visible"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">

        <main
          onClick={OnClose}
          className="flex justify-center items-center h-screen w-screen modal-wrapper ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white-rose text-grey-04 dark:bg-grey-02 z-30 dark:text-white-rose shadow-2xl shadow-slate-800">
            <div className="flex flex-row-reverse dark:bg-grey-01 pr-1 pt-1"><button onClick={OnClose}><RiCloseCircleLine size={22}></RiCloseCircleLine></button></div>
            <div className="border-b text-center pb-3 dark:bg-grey-01 border-black ModalTitle">Modify Teamate</div>
            <form className="grid grid-cols-1 mx-auto w-9/10 gap-5 p-5" onSubmit={handleSubmit}>
              <div className="input-type flex">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    onChange={setFormData}
                    defaultValue={firstName}
                    className="col-start-1 px-2 py-3 focus:outline-none rounded text-gray-400 dark:text-grey-02 border-2 border-rose-poudre dark:border-gray-300 bg-white-rose"
                    placeholder="FirstName"
                    required
                  />

                  <div className="flex input-type">
                    <input
                      type="text"
                      onChange={setFormData}
                      defaultValue={lastName}
                      name="lastName"
                      className="col-start-2 px-2 py-3 focus:outline-none rounded text-gray-400 dark:text-grey-02 border-2 border-rose-poudre dark:border-gray-300 bg-white "
                      placeholder="LastName"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="input-type">
                <input
                  type="email"
                  onChange={setFormData}
                  defaultValue={email}
                  name="email"
                  className="w-full px-2 py-3 focus:outline-none rounded text-gray-400 dark:text-grey-02 border-2 border-rose-poudre dark:border-gray-300 bg-white "
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
                  className="w-full px-2 py-3 focus:outline-none rounded text-gray-400 dark:text-grey-02 border-2 border-rose-poudre dark:border-gray-300 bg-white "
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
                  className="w-full px-2 py-3 focus:outline-none rounded text-gray-400 dark:text-grey-02 border-2 border-rose-poudre dark:border-gray-300 bg-white "
                  required
                />
              </div>

              <div className="flex items-center justify-start pl-1 gap-2">
                <div className="form-check">
                  <input
                    type="radio"
                    required
                    defaultChecked={status === "Active"}
                    onChange={setFormData}
                    name="status"
                    value="Active"
                    id="radioDefault1"
                    className="form-check-input appearance-none rounded-full border-2 w-4 h-4 border-rose-200 dark:border-green-mid checked:bg-rose-400 dark:checked:bg-green-low bg-white-rose focus:ring-gray-400  focus:ring-2 cursor-pointer transition duration-200"
                  />
                  <label htmlFor="radioDefault1" className="inline-block text-gray-800 dark:text-white-rose px-2">
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
                    className="form-check-input appearance-none rounded-full border-2 w-4 h-4 border-rose-200 dark:border-green-mid checked:bg-rose-400 dark:checked:bg-green-low bg-white-rose focus:ring-gray-400  focus:ring-2 cursor-pointer transition duration-200"
                  />
                  <label htmlFor="radioDefault2" className="inline-block text-gray-800 dark:text-white-rose px-2">
                    Inactive
                  </label>
                </div>
              </div>
              <div className="flex flex-row-reverse pb-5">
                <button className="rippleGreen bg-green-01 flex justify-center text-md md:w-1/3 sm:1/2 text-white-rose px-4 py-2 rounded ">
                  <span className="flex gap-1">
                    <BiEdit size={24}></BiEdit>
                    Save/Close
                  </span>
                </button>
              </div>
            </form>
          </div>
        </main>
      </motion.div>
    </motion.div>

  );
}
