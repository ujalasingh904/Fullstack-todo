import { useEffect, useState } from 'react'
import './App.css'
import Todolist from './components/Todolist'
import toast, { Toaster } from 'react-hot-toast';
import { addToDo, deleteToDo, getAllToDo, updateToDo } from './utils/HandleApi'

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [TodoId, setTodoId] = useState("")

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  return (

    <div className="app">
      <div className="container max-w-[600px] m-auto py-0 px-4">

        <h1 className='mt-4 text-center font-[600] text-3xl'>Your Task</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault(); 
            if (isUpdating) {
              updateToDo(text, setText, setToDo, TodoId, setIsUpdating);
            } else {
              addToDo(text, setText, setToDo);
            }
          }}
          className="top flex mt-8 gap-4 justify-around"
        >
          <input type="text"
            placeholder='write your todos'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=' border-b-[1px] border-solid border-black outline-0 w-[66%] sm:w-[80%] py-0 px-[0.5rem] ' />

          <div className="add bg-lime-600 text-white py-[.5rem] flex justify-center flex-1 cursor-pointer "
            onClick={isUpdating ? () => updateToDo(text, setText, setToDo, TodoId, setIsUpdating) :
              () => addToDo(text, setText, setToDo)}>{isUpdating ? "Update" : "Add Task"}</div>

        </form>

        <div className="list">
          {toDo.map((data) =>
            <Todolist key={data._id}
              text={data.text}
              updateMode={() => updateMode(data._id, data.text)}
              deleteToDo={() => deleteToDo(setToDo, data._id)}
            />)}
        </div>

      </div>
      <Toaster />
    </div>

  )
}

export default App
