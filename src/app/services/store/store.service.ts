import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
 import { Action } from '../../store/actions/action.interface';
 //import { AppStore } from '../../store/config/appStore.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<any>) { }

  /**
   * Método para obtener cualquier STATE (messageState o el que toque)
   * del STORE
   * de la aplicación
   */
  getState(state: string) {
    return this.store.select(state);
  }

  /**
   * Método que sirve para despachar acciones
   * El Reducer que las escuche, gestionará el STATE
   * @param action que despacha y será escuchada por el REDUCER
   */
  updateState(action: Action) {
    this.store.dispatch(action);
  }


}
