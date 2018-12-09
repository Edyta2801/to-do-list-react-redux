import { database } from '../firebase'
import auth from './auth'


const INIT = 'todolist/INIT'
const ADD = 'todolist/ADD'
const DEL = 'todolist/DEL'
const NEW_TEXT = 'todolist/NEW_TEXT'

const initialState = {
    tasks: [{
        text: '',
        key: '',
    }],
    text: '',

}


export const add = () => ({
    type: ADD,

})
export const init = (tasks) => ({
    type: INIT,
    tasks

})
export const newText = (text) => ({
    type: NEW_TEXT,
    text
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
    state.auth.isUserLoggedIn === true ? 
    database.ref(`users/${state.auth.user.uid}/tasks`).on(
        'value',
        (snapshot) => dispatch(
            init(
                mapObjectToArray(snapshot.val())
            )
        )
    ) : false
}






export const updateAfterRemove = () => (dispatch, getState) => {
    const state = getState()
    database.ref(`users/${state.auth.user.uid}/tasks`).set(
        state.todolist.tasks
    )
}

export const addTask = () => (dispatch, getState) => {
    const state = getState()
    database.ref(`users/${state.auth.user.uid}/tasks`).push({
        text: state.todolist.text
    })
}




export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                text: '',
                tasks: state.tasks.concat({ text: state.text })
            }
        case INIT:
            return {
                text: '',
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
                text: action.text
            }
        default:
            return state
    }
}