import { database } from '../firebaseConfig'


const INIT = 'todolist/INIT'
const ADD = 'todolist/ADD'
const DEL = 'todolist/DEL'
const NEW_TEXT = 'todolist/NEW_TEXT'
// const TOGGLE = 'todolist/TOGGLE'

export const init = (tasks) => ({
    type: INIT,
    tasks
})

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


const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
        .map(([key, value]) => (
            typeof value === 'object' ?
                { ...value, key }
                :
                { key, value }
        ))
)

export const initSync = () => (dispatch, getState) => {
    const state = getState()
    state.auth.isUserLoggedIn===true ? database.ref(`users/${state.auth.user.uid}/tasks`).on(
        'value',
        (snapshot) => dispatch(
            init(
                mapObjectToArray(snapshot.val())
            )
        )
    ) : alert('nie jesteś zalogowany!')
}
export const updateAfterRemove = () => (dispatch, getState) => {
    const state = getState()
  database.ref(`users/${state.auth.user.uid}/tasks`).set(
        state.todolist.tasks
    )
}


// export const delTask = () => (dispatch, getState) => {
//     const state = getState()
//     database.ref('todo/').remove({
//         text: state.todolist.text
//     })
// }

export const addTask = () => (dispatch, getState) => {
    const state = getState()
    database.ref('todo').push({
        text: state.todolist.text
    })
}

const initialState = {
    tasks: [],
    text:''
}



// export const toggle = (index) => ({
//     type: TOGGLE,
//     index,

// })


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                tasks: state.tasks.concat({ text: state.text })
            }
        case INIT:
            return {
                tasks: action.tasks
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
        // case TOGGLE:
        //     return {
        //         ...state,
        //         tasks: state.tasks.map((task, index) => (index === action.index)
        //             ? { ...task, completed: !task.completed }
        //             : task)
        //     }


        default:
            return state
    }
}