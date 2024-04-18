import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { write, read } from "../utils/ls";

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addToDictionary: (state, action) => {
      state.dictionary = state.dictionary = [
        ...state.dictionary,
        action.payload,
      ];
      write("initialState", state);
    },
    changeStatus: (state, action) => {
       
      state.dictionary = [
        ...state.dictionary.map((el) =>
          el.id === action.payload
            ? { ...el, status: (el.status = !el.status) }
            : el
        ),
      ];
      console.log('im in changeStatus')
      write("initialState", state);
    },
    deleteWord: (state, action) => {
        console.log('im in delet')
        state.dictionary = [
            ...state.dictionary.filter((el) =>
              el.id !== action.payload
            ),
          ];
          write("initialState", state);
    }
  },
});

export const { addToDictionary, changeStatus, deleteWord } = dictionarySlice.actions;
