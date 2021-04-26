// El RootReducer es el Reducer que va a englobar todos los Reducers
// que apliquen a un Store

import { ActionReducerMap } from "@ngrx/store";
import { Action } from "../actions/action.interface";
import { AppStore } from "../config/appStore.interface";

// My reducers
import { headerReducer } from "./header/headerReducer";

// El Reducer devolverá un conjunto de:
// estado : reducer que lo controla
// Nos aseguramos de que se mapee correctamente la Interface del STORE y las ACTIONS
export const RootReducer: ActionReducerMap<AppStore, Action> = {
  
  headerState: headerReducer
  
}
