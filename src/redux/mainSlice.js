import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  lists: [["Do homework", "Sleep" ], ["Go to univer"], ["Eat"]],
  current : null,
  isDroppedOnElem: false,
  newTodo: ''
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
   setCurrent(state, action){
    state.current = action.payload
   },
   moveOtherList(state, action){
    state.lists[state.current.list-1].splice(state.current.idx, 1);
    state.lists[action.payload.list-1].splice(action.payload.idx , 0, state.current.text)
    state.isDroppedOnElem = true
    },
    moveOtherCol(state, action) {
        if (state.isDroppedOnElem === true) {
            state.isDroppedOnElem = false
            return
        }
        state.lists[action.payload-1].push(state.current.text)
        state.lists[state.current.list-1].splice(state.current.idx, 1);
    },
    removeToDo(state) {
        state.lists[state.current.list-1].splice(state.current.idx, 1);
    },
    setNewTodo(state, action) {
        state.newTodo = action.payload
    },
    addTodo(state) {
        if (state.newTodo.replace(/ /g, '') !== '') {
            state.lists[0].push(state.newTodo);
            state.newTodo = ''    
        }
        
    }
  },
})

export const { setCurrent, moveOtherList, moveOtherCol, removeToDo, setNewTodo , addTodo} = mainSlice.actions

export default mainSlice.reducer