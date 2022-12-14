import { BiErrorAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { dropIn } from "./ModalAnimations";
import { RiCloseCircleLine } from 'react-icons/ri'
import { toggleChangeAction } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import { useEffect } from 'react'


type ErrorProps = {
  message: string;
}

function Error({ message }: ErrorProps) {

  const dispatch = useDispatch()

  const OnClose = () => {
    dispatch(toggleChangeAction())
  }

  const SuccessRmv = useEffect(() => {
    const myDiv = document.querySelector(".success");
    if (myDiv) {
      setTimeout(OnClose, 2000)
    };
  },[])

  return (
    <motion.div
      className="backdrop bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
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
          <div className="bg-white-rose dark:bg-white-green w-2/5 rounded z-30">
            <a href="/" className="flex flex-row-reverse px-2"><button><RiCloseCircleLine size={30}></RiCloseCircleLine></button></a>
            <div className="flex text-xl justify-center gap-2 mx-auto pb-5">
              <BiErrorAlt size={25} color={"red"}></BiErrorAlt>
              {message}
            </div>
          </div>
          <>{SuccessRmv}</>
        </main>
      </motion.div>
    </motion.div>

  );
}
export default Error;