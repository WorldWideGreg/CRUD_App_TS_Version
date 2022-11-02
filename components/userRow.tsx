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
    if (!visible) {
      dispatch(deleteAction(_id))
    }
  }

  return (
    <tr className="bg-white-rose">
      <td className="pl-0 px-4 py-2 flex flex-row">
        <img src={avatar} alt="" className="avatar h-11 w-11 rounded-full object-cover" />
        <span className="pl-3 py-4 font-medium text-purp-poudre">{firstName} {lastName}</span>
      </td>
      <td className="px-4 py-2 pl-0 font-medium text-purp-poudre">
        <span>{email}</span>
      </td>
      <td className="px-4 py-2 pl-0 font-medium text-purp-poudre">
        <span>{phone}</span>
      </td>
      <td className="px-4 py-2 pl-0 font-medium text-purp-poudre">
        <span>{date}</span>
      </td>
      <td className="px-4 py-2 pl-0 font-medium text-purp-poudre">
        <button>
          <span className={`${status === "Active" ? 'bg-green-300 text-green-500 font-bold' : 'bg-red-300 text-red-500 font-bold'} cursor-default px-2 py-1 rounded`}>
            {status}
          </span>
        </button>
      </td>
      <td className="flex pl-0">
        <button className="cursor py-5 px-2 text-teal-2 hover:text-teal-500 duration-500">
          <BiEdit onClick={onUpdate} size={25}></BiEdit>
        </button>
        <button className="cursor py-5 px-2 text-orange-500 hover:text-orange-600 duration-500">
          <BiTrashAlt onClick={onDelete} size={25}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}