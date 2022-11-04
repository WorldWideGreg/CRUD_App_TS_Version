import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion"

type Props = {
  message: string;
}

function Success({ message }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 transition-all duration-500 visible">
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md xl:max-w-xl lg:max-w-xl md:max-w-xl bg-light-sable dark:bg-sable max-h-screen shadow-lg flex-row rounded relative">
            <div className="success container mx-auto">
              <div className="flex justify-center mx-auto border border-teal-2 bg-white-rose w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
                {message}
                <BiCheck size={25} color={"green"}></BiCheck>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>

  );
}
export default Success;