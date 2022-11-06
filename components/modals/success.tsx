import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion"
import { RiCloseCircleLine } from 'react-icons/ri'
import { flip, dropIn, newspaper } from "./ModalAnimations";

type Props = {
  message: string;
}

function Success({ message }: Props) {

  return (
    <>
    <motion.div 
      className="backdrop bg-filter bg-black bg-opacity-70 fixed inset-0 w-full h-full z-20"
      animate={{
        opacity: 1,
        transition: {duration: 2, delay: 0.5},
        transitionEnd: {
          display: "none",          
        },
      }}
    >
      <motion.div
        className="modal fixed inset-0 z-30 transition-all duration-500 visible"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">

        <main className=" flex justify-center items-center h-screen w-screen modal-wrapper">
          <div className="bg-white-rose dark:bg-white-green w-2/5 rounded z-30">
            <div className="flex text-xl justify-center gap-2 mx-auto p-2">
              <BiCheck size={30} color={"green"}>
              </BiCheck>
              {message}
            </div>
          </div>
        </main>
      </motion.div>
      </motion.div>

</>

  );
}
export default Success;