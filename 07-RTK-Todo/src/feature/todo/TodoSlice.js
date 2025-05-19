import { createSlice, nanoid } from "@reduxjs/toolkit";


//The initial state of this slice of the Redux store is defined 
//Sets up a starting state to ensure the application has at least one default todo item.
const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};


//Redux Toolkit uses this object to generate actions and reducers automatically
export const todoSlice = createSlice({
  name: "todo",
  initialState,

  //this are logics to change the state
  reducers: {

    //A user dispatches an addTodo action with a text payload
    //The reducer constructs a new todo item and adds it to the array
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // this returns the items which fullfills the condition
      // creates a new array
      state.todos = state.todos.filter((elem) => elem.id != action.payload);
    },
  },
});

//These can now be imported and dispatched in React components
export const { addTodo, removeTodo } = todoSlice.actions;

//Exports the reducer function to be included in the Redux store
export default todoSlice.reducer;
