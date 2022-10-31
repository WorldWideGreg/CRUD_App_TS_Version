import { BiErrorAlt } from "react-icons/bi";

type Props = {
  message: string;
}

function Error({message}: Props) { 
  return (
    <div className="error container mx-auto">
      <div className="flex justify-center mx-auto border border-orange-200 bg-orange-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message}
        <BiErrorAlt size={25} color={"red"}></BiErrorAlt>
      </div>
    </div>
  );
}
export default Error;