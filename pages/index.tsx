import Head from "next/head";
import React from "react";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import Table from "../components/layouts/table";
import Form from "../components/Forms/form";
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, deleteAction } from "../redux/reducer";
import { deleteUser, getUsers } from '../lib/fetcher'
import { useQueryClient } from "react-query";
import AppFooter from "../components/layouts/footer";
import Image from "next/image";
import logo from "../public/images/logo-light.png"
import { motion } from "framer-motion";
import Header from "../components/themeSwitch/ButtonTheme";

export default function Home() {
  const URL = "/"

  const visible = useSelector((state: any) => state.app.client.toggleForm)
  const deleteId = useSelector((state: any) => state.app.client.deleteId)
  const queryClient = useQueryClient()

  const dispatch = useDispatch()

  const handler = () => {
    dispatch(toggleChangeAction())
  }

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId)
      await queryClient.prefetchQuery('users', getUsers)
      await dispatch(deleteAction(null))
    }
  }

  const cancelHandler = async () => {
    console.log('Cancel')
    await dispatch(deleteAction(null))
  }


  return (
    <section>
      <Head>
        <title>Team Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
        className="">
        <div className="background bg-lightBgPage dark:bg-darkBgPage">
          <main className="min-w-screen min-h-screen">
            <div className="flex items-center pb-10">
              <div className="mx-auto px-3 absolute"> <a href={URL}>
                <Image src={logo} width="50px" height="50px" alt="Logo" className="logo" /></a>
              </div>
              <h1 className="bg-headerLight dark:bg-headerDark mx-auto px-4 py-5 lg:text-3xl md:text-xl text-left min-w-full max-w-full pl-20">
                <span className="text-white-rose">Team Manager</span>
              </h1>

              <button
                onClick={handler}
                className="tooltiptext rippleBlue bg-blue-02 dark:bg-orange-mid text-white-rose flex items-center h-10 w-10 pl-1 right-20 rounded absolute">
                <span className="tooltip"> <span className="tooltiptext">Add Member</span>
                  <BiUserPlus size={34}></BiUserPlus>
                </span>
              </button>
              {/* Theme Switcher */}
              <div className="right-5 bg-darkBgPage dark:bg-lightBgPage h-6 w-10 rounded-md flex items-center pl-1 absolute duration-500">
                <Header />
              </div>
            </div>

            <div >
              {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
            </div>
            
              {visible ? <Form /> : <></>}
           

            <div className="overflow-auto w-11/12 mx-auto bg-white-rose">
              <Table />
            </div>

            <div className="footerFont mx-auto pt-48 px-5 ">
              <AppFooter />
            </div>

          </main>
        </div>
      </motion.section>
    </section>

  )
}


function DeleteComponent({ deleteHandler, cancelHandler }: any) {
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
          <div className="modal max-w-md xl:max-w-xl lg:max-w-xl md:max-w-xl bg-white-rose dark:bg-white-green max-h-screen shadow-lg flex-row rounded relative">
            <p className="py-2 px-4 text-center font-bold">CONFIRM DELETE:</p>
            <div className="modal-header flex justify-between gap-6 p-5 border-ternary-light dark:border-ternary-dark">
              <button onClick={deleteHandler} className="flex bg-green-300 text-white-rose px-2 py-2  rounded hover:bg-green-500 duration-500">
                Yes <span className="px-1 "><BiX color='rgb(255 255 255)' size={25} /></span></button>
              <button onClick={cancelHandler} className="flex bg-red-300 text-white-rose px-2 py-2  rounded hover:bg-red-500 duration-500 " >
                No <span className="px-1 "><BiCheck color='rgb(255 255 255)' size={25} /></span></button>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

