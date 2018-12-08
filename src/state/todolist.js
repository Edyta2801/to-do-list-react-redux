const ADD = 'todolist/ADD'
const DEL = 'todolist/DEL'
const NEW_TEXT = 'todolist/NEW_TEXT'
const TOGGLE = 'todolist/TOGGLE'

const initialState = {
    tasks: [],
    text: null
}




export const add = () => ({
    type: ADD,
})
export const newText = (text) => ({
    type: NEW_TEXT,
    text,
    
})
export const del = (index) => ({
    type: DEL,
    index
})
export const toggle = (index) => ({
    type: TOGGLE,
    index,
    
})


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                text: null,
                tasks: state.tasks.concat({ text: state.text })
            }
        case DEL:
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.index)
            }
        case NEW_TEXT:
            return {
                ...state,
                text: action.text,
                
            }
        case TOGGLE:
            return {
                ...state,
                tasks: state.tasks.map((task, index) => (index === action.index)
                    ? { ...task, completed: !task.completed }
                    : task)
            }


        default:
            return state
    }
}