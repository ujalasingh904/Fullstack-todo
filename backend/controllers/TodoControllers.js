import { todo } from "../models/TodoModel.js";

const getToDo = async (req, res) => {
    const toDo = await todo.find()
    res.send(toDo)
};

const saveTodo = async (req, res) => {
    const { text } = req.body

    todo
        .create({ text })
        .then((data) => {
            res.send(data)
        })
}

const updateToDo = async (req, res) => {
    const { _id, text } = req.body

    todo
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("updated successfully"))
        .catch((err) => console.log(err))
}

const deleteToDo = async (req, res) => {
    const { _id } = req.body
 
    todo
        .findByIdAndDelete(_id)
        .then(() => res.send("deleted successfully"))
        .catch((err) => console.log(err))
}

export {
    getToDo,
    saveTodo,
    updateToDo,
    deleteToDo
}
