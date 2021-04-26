import { Component, OnInit } from '@angular/core';

// Redux
import { StoreService } from 'src/app/services/store/store.service';
import { ACTION_CHANGE_TITLE_HEADER, ACTION_CHANGE_BUTTON_NEW_HEADER, ACTION_CHANGE_DIV_TO_LOAD } from 'src/app/store/actions/actions.types';
import HeaderState from 'src/app/store/config/header/headerState.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // State properties
  title = '';
  newButtonToLoad = '';
  numTotalRegisters = 0;
  divToLoad = '';
  experts: boolean = true;

  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    // Load State
    this._storeService.getState('headerState').subscribe((state: HeaderState) => {
      this.title = state.title;
      this.newButtonToLoad = state.newButtonToLoad;
      this.numTotalRegisters = state.numTotalRegisters;
      this.divToLoad = state.divToLoad;
    });
  }

}
