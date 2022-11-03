import { BiCheck } from "react-icons/bi";

type Props = {
  message: string;
}

function Success({message}: Props) { 
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-teal-2 bg-white-rose w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message}
        <BiCheck size={25} color={"green"}></BiCheck>
      </div>
    </div>
  );
}
export default Success;