import axios from "axios";
import toast from 'react-hot-toast'; 

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log("data ---->", data);
            setToDo(data) 
        })
}
 
const addToDo = (text,setText,setToDo) => {
    if(text.length===0){
        toast.error("Please enter a task")
        return 
    }
        axios
        .post(`${baseUrl}/save`,{text})
        .then((data)=>{
                
                setText("")
                getAllToDo(setToDo)
                toast.success("Task Added successfully")
            })
        .catch((err)=>toast.error(err.message))
}
const updateToDo = (text,setText,setToDo,TodoId,setIsUpdating) => {
        axios
        .post(`${baseUrl}/update`,{_id:TodoId,text})
        .then((data)=>{
                
                setText("")
                setIsUpdating(false)
                getAllToDo(setToDo)
                toast.success("Task Updated successfully")
            })
        .catch((err)=>toast.error(err.message))
}
const deleteToDo = (setToDo,TodoId) => {
        axios
        .post(`${baseUrl}/delete`,{_id:TodoId})
        .then((data)=>{
                getAllToDo(setToDo)
                toast.success("Task Deleted successfully")
            })
        .catch(toast.error(err.message))
}

export { getAllToDo, addToDo ,updateToDo ,deleteToDo }