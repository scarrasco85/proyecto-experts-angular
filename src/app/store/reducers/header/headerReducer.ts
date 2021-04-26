
import { Action } from "../../actions/action.interface";
import { ACTION_CHANGE_TITLE_HEADER, ACTION_CHANGE_BUTTON_NEW_HEADER, ACTION_CHANGE_NUM_TOTAL_REGISTERS,ACTION_CHANGE_DIV_TO_LOAD } from "../../actions/actions.types";
import HeaderState from "../../config/header/headerState.interface";

// Header initial state
const initialState: HeaderState = {
    title: "",
    newButtonToLoad: "",
    numTotalRegisters: 0,
    divToLoad: ''
}


export function headerReducer(state = initialState, action: Action): HeaderState {
    switch (action.type) {
      case ACTION_CHANGE_TITLE_HEADER:
        return {
          ...state, 
          title: action.payload 
        }
      case ACTION_CHANGE_BUTTON_NEW_HEADER:
        return {
          ...state,
          newButtonToLoad: action.payload
        }
      case ACTION_CHANGE_NUM_TOTAL_REGISTERS:
        return {
          ...state,
          numTotalRegisters: action.payload
        }
      case ACTION_CHANGE_DIV_TO_LOAD:
        return {
          ...state,
          divToLoad: action.payload
        }
    }
  
    // En caso de que no entre en por estos tipos de mensajes, tenemos que
    // devolver el estado sin tocarlo
    return state;
  }