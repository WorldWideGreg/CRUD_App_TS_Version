import { motion } from "framer-motion";
import { useEffect } from 'react'
import { dropIn } from './ModalAnimations'
import { BiCheck } from 'react-icons/bi'

type Props = {
  message: string;
}
export default function Success({ message }: Props) {

  const SuccessRmv = useEffect(() => {
    let myDiv = document.querySelector(".success");
    if (myDiv) {
      setTimeout(() => myDiv?.classList.add("hidden")
        , 2000)
    };
  })

  return (

    <motion.div
      className=" success backdrop bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
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
        <main className=" flex justify-center items-center h-screen w-screen modal-wrapper">
          <div className="bg-white-rose dark:bg-white-green w-2/5 rounded mx-auto mb-3">
            <div className="flex text-xl font-bold justify-center gap-2 mx-auto p-2">
              <BiCheck size={25} color="green"></BiCheck>
              {message}
              <BiCheck size={25} color="green"></BiCheck>
            </div>
          </div>
          <>{SuccessRmv}</>
        </main>
      </motion.div>
    </motion.div>
  );
}
