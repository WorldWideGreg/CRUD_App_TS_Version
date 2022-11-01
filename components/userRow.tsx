import { UserTypes } from "../pages/utils";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction, updateAction, deleteAction } from '../redux/reducer'


export default function UserRow(UserData: UserTypes) {

  const { _id,
    firstName = 'unknown',
    lastName = 'unknown',
    avatar = '#',
    email = 'unknown',
    phone = 'unknown',
    date = 'unknown',
    status = 'unknown'
  } = UserData;


  const visible = useSelector((state: any) => state.app.client.toggleForm)

  const dispatch = useDispatch()

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id))
    if (visible) {
      dispatch(updateAction(_id))
    }
  }

  const onDelete = () => {
    if(!visible){
      dispatch(deleteAction(_id))
    }
  }

  return (
    <tr className="odd:bg-slate-200 even:bg-slate-300">
      <td className="px-10 py-2 flex flex-row items-center">
        <img src={avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
        <span className="ml-3 font-semibold">{firstName} {lastName}</span>
      </td>
      <td className="px-10 py-2">
        <span>{email}</span>
      </td>
      <td className="px-10 py-2">
        <span>{phone}</span>
      </td>
      <td className="px-10 py-2">
        <span>{date}</span>
      </td>
      <td className="px-10 py-2">
        <button>
          <span className={`${status === "Active" ? 'bg-green-600' : 'bg-red-500'} cursor-default text-white px-5 py-1 rounded-full`}>
            {status}
          </span>
        </button>
      </td>
      <td className="flex items-center">
        <button className="cursor py-5 px-2 text-teal-700 hover:text-teal-500">
          <BiEdit onClick={onUpdate} size={25}></BiEdit>
        </button>
        <button className="cursor py-5 px-2 text-orange-700 hover:text-orange-500">
          <BiTrashAlt onClick={onDelete} size={25}></BiTrashAlt>
        </button>       
      </td>
    </tr>
  );
}