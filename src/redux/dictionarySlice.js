import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { write } from "../utils/ls";
import { getCurrentDateFormatted } from "../utils/date";

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
            ? { ...el, status: (el.status = !el.status),
              memorizationTime: el.status ? getCurrentDateFormatted() : '',
            }
            : el
        ),
      ];
      write("initialState", state);
    },
    /*
    {
          ...el,
          status: !el.status,
          memorizationTime: el.memorizationTime === '' ? getCurrentDateFormatted() : '',
        }
    */
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
