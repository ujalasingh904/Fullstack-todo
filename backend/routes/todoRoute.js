import {Router} from 'express'
import {deleteToDo, getToDo, saveTodo, updateToDo} from '../controllers/TodoControllers.js'  


const router = Router()

router.get('/', getToDo)
router.post('/save',saveTodo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)

export default router