import { UserTypes } from "../pages/utils";
import { BiEdit, BiTrashAlt } from "react-icons/bi";


export default function UserRow(UserData:UserTypes) {
  
    const {id, 
      name='unknown', 
      avatar='#', 
      email='unknown', 
      salary='unknown', 
      date='unknown', 
      status='unknown'
    } = UserData;
  
    return (
      <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 flex flex-row items-center">
          <img src={avatar||"#"} alt="" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-center ml-2 font-semibold">{name||"Unknown"}</span>
        </td>
        <td className="px-16 py-2">
          <span>{email||"Unknown"}</span>
        </td>
        <td className="px-16 py-2">
          <span>{salary||"Unknown"}</span>
        </td>
        <td className="px-16 py-2">
          <span>{date||"Unknown"}</span>
        </td>
        <td className="px-16 py-2">
          <button>
            <span className= {`${status === "Active"? 'bg-green-600': 'bg-red-500'} text-white px-5 py-1 rounded-full`}>
              {status}
            </span>
          </button>
        </td>
        <td className="px-16 py-2 flex justify-around gap-5">
          <button className="cursor">
            <BiEdit size={25} color={"blue"}></BiEdit>
          </button>
          <button className="cursor">
            <BiTrashAlt size={25} color={"red"}></BiTrashAlt>
          </button>
        </td>
      </tr>
    );
  }