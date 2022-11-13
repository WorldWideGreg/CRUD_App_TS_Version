import { BiPlusCircle } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import Success from "../modals/success";
import { UserTypes } from "../../pages/utils";
import { useQueryClient, useMutation } from 'react-query'
import { addUser, getUsers } from "../../lib/fetcher"
import { motion } from 'framer-motion'
import { gifYouUp } from "../modals/ModalAnimations";
import { toggleChangeAction } from "../../redux/reducer";
import { useDispatch } from "react-redux";

interface AddUserFormProps {
  formData: UserTypes;
  setFormData: React.ChangeEventHandler<HTMLInputElement>;
}

export default function AddUserForm({ formData, setFormData }: AddUserFormProps) {

  const dispatch = useDispatch()

  const OnClose = () => {
    dispatch(toggleChangeAction())
  }

  const queryClient = useQueryClient()

  const addMutation = useMutation(addUser, {
    onSuccess: () => queryClient.prefetchQuery('users', getUsers)
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(formData).length == 0) {
      return (
        console.log("No data in form"));
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      date,
      status }: UserTypes = formData;

    const model: UserTypes = {
      firstName,
      lastName,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10)}.jpg`,
      email,
      phone,
      date,
      status: status ?? "Active"
    }
    addMutation.mutate(model)
  };

  if (addMutation.isLoading) {
    return (
      <div> Loading... </div>
    )
  }

  if (addMutation.isError) {
    return (
      <Success message={"Woops a problem occured!"} />
    )
  }

  if (addMutation.isSuccess) {
    return (
      <Success message={"Welcome new teamate"} />
    )
  }

  return (
    <motion.div
      className="backdrop bg-filter bg-black bg-opacity-70 fixed inset-0 w-full h-full z-20"
    >
      <motion.div
        className="modal fixed inset-0 z-30 transition-all duration-500 visible"
        variants={gifYouUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <main
          onClick={OnClose}
          className="flex justify-center items-center h-screen w-screen modal-wrapper  ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white-rose text-grey-04 dark:bg-grey-02 z-30 dark:text-white-rose shadow-2xl shadow-slate-800">
            <div className="flex flex-row-reverse dark:bg-grey-01 text-rose-400 dark:text-gray-600 pr-1 pt-1"><button onClick={OnClose}><RiCloseCircleLine size={22}></RiCloseCircleLine></button></div>
            <div className="border-b text-center border-rose-poudre dark:bg-grey-01 pb-3 dark:border-black ModalTitle">Add Teamate </div>
            <form className="grid grid-cols-1 mx-auto w-9/10 gap-5 p-5" onSubmit={handleSubmit}>
              <div className="input-type flex">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    onChange={setFormData}
                    className="col-start-1 px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white "
                    placeholder="Firstname"
                    required
                  />
                  <div className="input-type">
                    <input
                      type="text"
                      onChange={setFormData}
                      name="lastName"
                      className="col-start-2 px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white"
                      placeholder="Lastname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="input-type">
                <input
                  type="email"
                  onChange={setFormData}
                  name="email"
                  className="col-start-1 col-end-2 w-full px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:placeholder-gray-400 border-2 border-rose-poudre dark:border-gray-300 bg-white "
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
                  className="w-full px-2 py-3 focus:outline-none rounded placeholder-gray-400 dark:text-gray-800 border-2 border-rose-poudre dark:border-gray-300 bg-white "
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
                    className="form-check-input appearance-none rounded-full w-4 h-4 border-rose-200 checked:bg-rose-400 dark:checked:bg-green-low bg-white-rose focus:ring-gray-400  focus:ring-2 cursor-pointer transition duration-200"
                  />
                  <label htmlFor="radioDefault1" className="inline-block text-gray-800 dark:text-white-rose px-1">
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
                  <label htmlFor="radioDefault2" className="inline-block text-gray-800 dark:text-white-rose px-1 ">
                    Inactive
                  </label>
                </div>
              </div>
              <div className="flex flex-row-reverse pb-5">
                <button className="rippleGreen bg-green-01 flex justify-center text-md md:w-1/3 sm:1/2 text-white-rose px-4 py-2 rounded ">
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
    </motion.div>
  );
};
