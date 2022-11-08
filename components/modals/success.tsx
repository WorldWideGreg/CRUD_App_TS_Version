import { BiCheck } from "react-icons/bi";

type Props = {
  message: string;
}

function Success({ message }: Props) {

  return (
          <div className="bg-white-rose dark:bg-white-green w-2/5 rounded mx-auto mb-3">
            <div className="flex text-xl justify-center gap-2 mx-auto p-2">
              <BiCheck size={30} color={"green"}>
              </BiCheck>
              {message}
            </div>
          </div>     
  );
}
export default Success;