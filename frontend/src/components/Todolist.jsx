import React from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";


const Todolist = ({ text, updateMode, deleteToDo }) => {
    return (
        <div className="todo relative mt-4 bg-black text-white sm:py-[1.2rem] p-4 sm:px-[3rem] rounded-[5px]">
            <div className="text">{text}</div>

            <div className="icons absolute top-1/2 translate-y-[-50%] right-[20px]
            flex gap-4">
                <BiEdit className='icon cursor-pointer text-[1.3rem]' onClick={updateMode}/>
                <MdDelete className='icon cursor-pointer text-[1.3rem]' onClick={deleteToDo}/>
            </div>
        </div>
    )
}

export default Todolist